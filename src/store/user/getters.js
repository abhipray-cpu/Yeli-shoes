export default {
    //this will contain all the getters
    getauth(state) {
        return state.auth;
    },
    getLoading(state) {
        return state.loading;
    },
    getDialogState(state) {
        return state.logDialog;
    },
    getAlert(state) {
        return state.alert
    },
    getAlertState(state) {
        return state.alertState;
    },
    get_toState(state) {
        return state.toState
    },
    get_fromState(state) {
        return state.fromState;
    },
    get_circle1(state) {
        return state.circle1;
    },
    get_line1(state) {
        return state.line1;
    },
    get_circle2(state) {
        return state.circle2;
    },
    get_circle3(state) {
        return state.circle3;
    },
    get_line2(state) {
        return state.line2;
    },
    get_animationMode(state) {
        return state.animationMode
    },
    get_cartPrice(state) {
        return state.cartPrice;
    }

}