import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '/src/firebase.js'
export default {
    //this will contain all the actions
    async fetchShoes(context) {
        let brands = this.getters['shoes/getBrands'];
        let types = this.getters['shoes/getTypes'];
        // let colors = this.getters['shoes/getColors'];
        //  let materials = this.getters['shoes/getMaterials'];
        // let sizes = this.getters['shoes/getSizes'];
        //  let types = this.getters['shoes/getTypes'];
        // let gender = this.getters['shoes/getGenders']
        context.commit({
            type: 'setLoader',
            value: false
        })
        let q;
        console.log(brands.length);
        console.log(types.length); //particular search for brand
        //need to make brand filter hide in this case
        if (brands.length == 1 && brands[0] != '' && types.length != 1) {
            //   console.log('case1 is executed!');
            q = query(collection(db, "shoes"), where("brand", "in", brands));
        }
        //particular search for type
        //need to make type filter hidden in this case
        else if (types.length == 1 && types[0] != '' && brands.length != 1) {
            //  console.log('case2 is executed!');
            q = query(collection(db, "shoes"), where("type", "in", types));
        }
        //in this case both the filters are set
        //need to hide both the filters
        else {
            //   console.log('case3 is executed!');
            await context.dispatch('fetchShoesByBrand_andType', {
                brand: brands[0],
                type: types[0]
            })
            return;
        }
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //here we are not using namespacig since
            //this is a local mutation
            context.commit({
                type: 'addItem',
                value: doc.data()
            });
            context.commit({
                type: 'setLoader',
                value: true
            })

        });
    },
    async fetchShoesByBrand_andType(context, payload) {
        console.log(payload)
        let q = query(collection(db, "shoes"), where("type", "==", payload.type));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if (doc.data().brand == payload.brand) {
                context.commit({
                    type: 'addItem',
                    value: doc.data()
                });
            }

        })
        context.commit({
            type: 'setLoader',
            value: true
        })



    },
    //filtering is quite time consuking in this case
    //since firestore does not support complex queries of
    //multiple filters

}