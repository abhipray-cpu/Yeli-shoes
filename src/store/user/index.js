import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
    namespaced: true,
    state() {
        return {
            auth: false,
            authToken: "",
            refreshToken: "",
            expiresIn: 0,
            UID: "",
            ordersId: '',
            loading: false,
            logDialog: false,
            alert: false,
            alertState: 'cart-success',
            fromState: 0,
            toState: -1,
            circle1: true,
            circle2: false,
            circle3: false,
            line1: false,
            line2: false,
            animationMode: 'forward',
            cartPrice: 0,

        };
    },
    mutations,
    getters,
    actions

}