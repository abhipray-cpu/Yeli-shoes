import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from '/src/firebase.js'
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import router from '/src/router/router.js'
export default {

    //this will contain all the actions
    async login(context, payload) {
        try {
            let auth = getAuth();
            context.commit('setLoad', { value: true })
            const user = await signInWithEmailAndPassword(auth, payload.email, payload.password);
            localStorage.setItem('token', user._tokenResponse.idToken);
            localStorage.setItem('expires', user._tokenResponse.expiresIn);
            localStorage.setItem('user', user._tokenResponse.localId);
            localStorage.setItem('refresehToken', user._tokenResponse.refreshToken);
            localStorage.setItem('auth',true)
            context.commit('setUser', {
                idToken: user._tokenResponse.idToken,
                refreshToken: user._tokenResponse.refreshToken,
                localId: user._tokenResponse.localId,
                expiresIn: user._tokenResponse.expiresIn
            })

            let expires = +user._tokenResponse.expiresIn * 1000; //converting to miliseconds
            let expirationDate = new Date().getTime + expires;
            //storing this in local storage
            localStorage.setItem('expiratonDate', expirationDate);
            context.commit('setLoad', { value: false });
            context.commit('setAuth', { value: true });
            router.push({
                name: 'Home'
            })
        } catch (error) {
            console.log(error)
            //work on this
        }



    },
    async signup(context, payload, ) {
        context.commit('setLoad', { value: true })
        const auth = getAuth();
        try {
            const user = await createUserWithEmailAndPassword(auth, payload.email, payload.password)
                //console.log(user._tokenResponse.email)
            context.commit('setUser', {
                    idToken: user._tokenResponse.idToken,
                    refreshToken: user._tokenResponse.refreshToken,
                    localId: user._tokenResponse.localId,
                    expiresIn: user._tokenResponse.expiresIn
                })
                //creating the user object in the firestore
            const docData = {
                User: payload.name,
                email: payload.email,
                UID: user._tokenResponse.localId,
                password: payload.password,
                number: payload.number,
                timeStamp: Timestamp.fromDate(new Date("January 10, 1964"))
            };
            try {
                await setDoc(doc(db, "users", `${user._tokenResponse.localId}`), docData);
                context.commit('setAuth', { value: true })
            } catch (err) {
                console.log(err.id)
                console.log(err.message);
            }

            //creating other related documents
            await setDoc(doc(db, "carts", `${user._tokenResponse.localId}_cart`), {
                name: payload.name,
                email: payload.email,
                UID: user._tokenResponse.localId,
                items: [],
                totalPrice: 0.0,

            });
            await setDoc(doc(db, "save", `${user._tokenResponse.localId}_save`), {
                name: payload.name,
                email: payload.email,
                UID: user._tokenResponse.localId,
                items: [],
            });
            context.commit('setLoad', { value: false });
            context.commit('setAuth', { value: true });
            router.push({
                name: 'Home'
            })

        } catch (e) {
            console.log(e.code);
            console.log(e.message);
        }
    },
    async autoLogin(context) {
        try {
            let expiry = +localStorage.getItem('expiratonDate') - new Date().getTime();
            if (expiry <= 0) {

                context.dispatch('logout');
            } else {
                let token = localStorage.getItem('token');
                let Uid = localStorage.getItem('user');
                let refreshToken = localStorage.getItem('refresehToken');
                let expiresIn = localStorage.getItem('expires');
                let expires = +expiresIn * 1000; //converting to miliseconds
                let expirationDate = new Date().getTime + expires;
                //storing this in local storage
                localStorage.setItem('expiratonDate', expirationDate);
                context.commit('setUser', {
                    idToken: token,
                    refreshToken: refreshToken,
                    localId: Uid,
                    expiresIn: expiresIn
                })
                context.commit('setAuth', { value: true });
                router.push({
                    name: 'Home'
                })
                return true;
            }
        } catch (err) {
            return false;
        }

    },

    async logout(context) {
        localStorage.clear();
        context.commit('setUser', {
            idToken: '',
            refreshToken: '',
            localId: '',
            expiresIn: ''
        })
        context.commit('setAuth', { value: false });
    },

    async addCart(context, shoeID) {
        try {
            let shoe = await context.dispatch('getShoe', shoeID);
            let cart = await context.dispatch('getCart');
            console.log('#######################################################################')
            console.log(shoeID)
            console.log(cart)
            console.log('#######################################################################')
            if (shoe.response == 'OK' && cart.response == 'OK') {
                await context.dispatch('updateCart', { shoe: shoe.data, cart: cart.data });
                context.commit('setAlertState', { value: 'cart-success' })
                context.commit('setAlert', { value: true })

                setTimeout(() => {
                    context.commit('setAlert', { value: false })
                }, 2000);
            } else {
                context.commit('setAlertState', { value: 'cart-fail' })
                context.commit('setAlert', { value: true })

                setTimeout(() => {
                    context.commit('setAlert', { value: false })
                }, 2000);
            }

        } catch (err) {
            console.log(err);
            console.log('teri mkc hogayi!!')
            context.commit('setAlertState', { value: 'cart-fail' })
            context.commit('setAlert', { value: true })

            setTimeout(() => {
                context.commit('setAlert', { value: false })
            }, 2000);
        }

    },
    async Whishlist({dispatch,commit}, shoeId) {
        try {
            let shoe = await dispatch('getShoe', shoeId);
            let save = await dispatch('getSave');
            console.log(save)
            if (shoe.response == 'OK' && save.response == 'OK') {
                await dispatch('updateWhislist', { shoe: shoe.data, save: save.data });
                commit('setAlertState', { value: 'whishlist-success' })
                commit('setAlert', { value: true })

                setTimeout(() => {
                    commit('setAlert', { value: false })
                }, 2000);
            } else {
                commit('setAlertState', { value: 'whishlist-fail' })
                commit('setAlert', { value: true })

                setTimeout(() => {
                   commit('setAlert', { value: false })
                }, 2000);
            }

        } catch (err) {
            commit('setAlertState', { value: 'whishlist-fail' })
            commit('setAlert', { value: true })

            setTimeout(() => {
                commit('setAlert', { value: false })
            }, 2000);
        }
    },
    async getShoe(context, shoeId) {
        try {
            const q = query(collection(db, "shoes"), where("_id.$oid", "==", shoeId), limit(1));
            let shoe = await getDocs(q);
            return { data: shoe.docs[0].data(), response: 'OK' }
        } catch (err) {
            // console.log(err.id)
            // console.log(err.message);
            return { data: null, response: 'lawde' }
        }
    },
    async getCart() {
        //giving error need to work around permission
        try {
            let UID = localStorage.getItem('user');
            const q = db.collection('carts').where('UID', '==', UID).limit(1);
            let cart = await getDocs(q);
            return { data: cart.docs[0].data(), response: 'OK' }

        } catch (err) {
            // console.log(err.id)
            // console.log(err.message);
            return { data: null, response: 'lawde' }
        }
    },
    async getSave() {
        //giving error need to work around permission
        try {
            let UID = localStorage.getItem('user');
            const q = db.collection('save').where('UID', '==', UID).limit(1);
            let save = await getDocs(q);
            return { data: save.docs[0].data(), response: 'OK' }

        } catch (err) {
            console.log(err)
            return { data: null, response: 'lawde' }
        }
    },
    async updateCart(context, payload) {
        let shoe = payload.shoe;
        let cart = payload.cart;
        let updatePrice = 0;
        updatePrice = parseInt(shoe.price) + parseInt(cart.totalPrice);
        let updatedItems = [...cart.items];
        if (updatedItems.length > 0)
            updatedItems = updatedItems.filter(item => item.shoe != shoe._id.$oid);
        updatedItems.push({ shoe: shoe._id.$oid, quantity: 1 });
        let updateCart = setDoc(doc(db, "carts", `${cart.UID}_cart`), {
            UID: cart.UID,
            email: cart.email,
            items: updatedItems,
            name: cart.name,
            totalPrice: updatePrice
        });
        context.commit('setCartPrice', { value: updatePrice });
        console.log(updateCart);
    },
    async updateWhislist(context, payload) {
        let shoe = payload.shoe;
        let save = payload.save;
        let updatedItems = [...save.items];

        if (updatedItems.length > 0)
            updatedItems = updatedItems.filter(item => item.shoe != shoe._id.$oid);
        updatedItems.push({ shoe: shoe._id.$oid });
        let updateCart = setDoc(doc(db, "save", `${save.UID}_save`), {
            UID: save.UID,
            email: save.email,
            items: updatedItems,
            name: save.name
        });
        console.log(updateCart);
    },
    async whishlist(context, shoeID) {
        console.log(shoeID)

    },
    async getCartItems(context) {
        try {
            let UID = localStorage.getItem('user');
            const q = db.collection('carts').where('UID', '==', UID).limit(1);
            let cart = await getDocs(q);
            let cartItems = cart.docs[0].data().items
            let totalPrice = cart.docs[0].data().totalPrice
            context.commit('setCartPrice', { value: totalPrice });
            return {
                items: cartItems,
                response: 'OK',
                price: totalPrice
            }
        } catch (err) {

            console.log(err);
            return {
                items: [],
                response: 'lawde',
                price: 0
            }
        }

    },
    async getWhishlistItems() {
        try {
            let UID = localStorage.getItem('user');
            const q = db.collection('save').where('UID', '==', UID).limit(1);
            let cart = await getDocs(q);
            let cartItems = cart.docs[0].data().items
            return {
                items: cartItems,
                response: 'OK',
            }
        } catch (err) {

            console.log(err);
            return {
                items: [],
                response: 'lawde',
            }
        }

    },
    //badmei dekhta hai ise
    async deleteCart(context, payload) {
        //get cart
        let UID = localStorage.getItem('user');
        const q = db.collection('carts').where('UID', '==', UID).limit(1);
        let cart = await getDocs(q);
        let items = cart.docs[0].data().items
        let totalPrice = parseInt(cart.docs[0].data().totalPrice)
        let ID = cart.docs[0].data().UID
        let email = cart.docs[0].data().email
        let name = cart.docs[0].data().name
            // remove given shoeID 
        let temp = items;
        let shoeQuantity = temp.filter(item => item.shoe == payload.shoeID)[0].quantity
        items = items.filter(item => item.shoe !== payload.shoeID)
        let Shoe = await context.dispatch('getShoe', payload.shoeID);
        if (Shoe.response === 'OK') {
            totalPrice = totalPrice - (parseInt(Shoe.data.price) * shoeQuantity);
        }
        let updateCart = setDoc(doc(db, "carts", `${ID}_cart`), {
            UID: ID,
            email: email,
            items: items,
            name: name,
            totalPrice: totalPrice
        });
        context.commit('setCartPrice', { value: totalPrice });
        updateCart;

    },
    async deleteWhishlist(context, payload) {
        let UID = localStorage.getItem('user');
        const q = db.collection('save').where('UID', '==', UID).limit(1);
        let cart = await getDocs(q);
        let items = cart.docs[0].data().items
        let ID = cart.docs[0].data().UID
        let email = cart.docs[0].data().email
        let name = cart.docs[0].data().name
            // remove given shoeID 
        items = items.filter(item => item.shoe !== payload.shoeID)

        let updateWhislist = setDoc(doc(db, "save", `${ID}_save`), {
            UID: ID,
            email: email,
            items: items,
            name: name,
        });
        updateWhislist;
    },
    async moveCartWhishlist(context, payload) {
        //need to dispatch
        //deletCart
        await context.dispatch('deleteCart', payload.shoeID);
        //addWhishlist
        await context.dispatch('Whishlist', payload.shoeID);
    },
    async moveWhishlistCart(context, payload) {
        //need to dispatch
        //deleteWhishlist
        await context.dispatch('deleteWhishlist', payload.shoeID);
        //addCart
        await context.dispatch('addCart', payload.shoeID);
    },




}