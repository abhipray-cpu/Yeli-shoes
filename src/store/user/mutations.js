export default {
    //this will contain all the mutations
    setUser(state, payload) {
        state.authToken = payload.idToken;
        state.refreshToken = payload.refreshToken;
        state.UID = payload.localId;
        state.expiresIn = payload.expiresIn;
    },
    setAuth(state, payload) {
        console.log('this is the updated auth state')
        state.auth = payload.value;
    },
    setLoad(state, payload) {
        state.loading = payload.value;
    },
    setlogDialog(state, payload) {
        state.logDialog = payload.value;
    },
    setAlert(state, payload) {
        state.alert = payload.value;
    },
    setAlertState(state, payload) {
        state.alertState = payload.value;
    },
    checkFromState(state, payload) {
        state.fromState = payload.value;
    },
    checkToState(state, payload) {
        state.toState = payload.value;
    },
    setCartPrice(state, payload) {
        if (payload.value < 0)
            state.cartPrice = 0;
        else
            state.cartPrice = payload.value;
    }




}