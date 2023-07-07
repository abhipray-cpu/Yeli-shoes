import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import router from './router/router'
import store from './store/index'
new Vue({
    el: '#app',
    vuetify,
    router,
    store,
    render: h => h(App)
})