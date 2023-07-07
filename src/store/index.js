import shoesStore from './shoes/index'
import userStore from './user/index'
import { Store } from 'vuex';
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Store({
    modules: {
        shoes: shoesStore, //this is the coaches module
        user: userStore //this is the requests module
    },
})
export default store; //make sure to export store object