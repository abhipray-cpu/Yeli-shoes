import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../views/landing-page.vue'
import CartPage from '../views/cart-page.vue'
import Checkout from '../views/checkout-page.vue'
import LikedPage from '../views/liked-page.vue'
import LoginPage from '../views/login-page.vue'
import Notifications from '../views/notifications-page.vue'
import Offers from '../views/offers-page.vue'
import ProductPage from '../views/products-page.vue'
import ProfilePage from '../views/profile-page.vue'
import SearchResults from '../views/results-page.vue'
import SignupPage from '../views/signup-page.vue'
import SizeChart from '../views/size-chart.vue'
import Orders from '../views/orders-view.vue'
import Recommendations from '../views/recom-mendation.vue'
Vue.use(Router)
import store from '../store/index'
export default new Router({
    mode: 'history',
    routes: [{
            name: "Home",
            path: "/",
            component: LandingPage
        },
        {
            name: "Cart",
            path: "/cart",
            component: CartPage,
            beforeEnter: (to, from, next) => {
                // ...
                if (store.getters['user/getauth'] === true)
                    next();
                else
                    next('/');
            }
        },
        {
            name: "Liked",
            path: "/liked",
            component: LikedPage,
            beforeEnter: (to, from, next) => {
                // ...
                if (store.getters['user/getauth'] === true)
                    next();
                else
                    next('/');
            }
        },
        {
            name: "Login",
            path: "/login",
            component: LoginPage
        },
        {
            name: "Notifications",
            path: "/notifications",
            component: Notifications,
            beforeEnter: (to, from, next) => {
                // ...
                console.log('this is the notification route')
                console.log(store.getters['user/getauth'])
                if (store.getters['user/getauth'] === true)
                    next();
                else
                    next('/');
            }
        },
        {
            name: "Offers",
            path: "/offers",
            component: Offers
        },
        {
            name: "Product",
            path: "/product/:id/:brand/:type",
            props: true,
            component: ProductPage
        },
        {
            name: "Profile",
            path: "/profile",
            component: ProfilePage,
            beforeEnter: (to, from, next) => {
                // ...
                if (store.getters['user/getauth'] === true)
                    next();
                else
                    next('/');
            }
        },
        {
            name: "Search_results",
            path: "/search_results/:brand/:type",
            component: SearchResults
        },
        {
            name: "Signup",
            path: "/signup",
            component: SignupPage
        },
        {
            name: "SizeChart",
            path: "/size_chart",
            component: SizeChart
        },
        {
            name: "Checkout",
            path: "/checkout",
            component: Checkout,
            beforeEnter: (to, from, next) => {
                // ...
                if (store.getters['user/getauth'] === true)
                    next();
                else
                    next('/');
            }
        },
        {
            name: "Orders",
            path: '/orders',
            component: Orders,
            beforeEnter: (to, from, next) => {
                // ...
                if (store.getters['user/getauth'] === true)
                    next();
                else
                    next('/');
            }
        },
        {
            name: "Recommendations",
            path: '/recommendations',
            component: Recommendations,
            beforeEnter: (to, from, next) => {
                // ...
                if (store.getters['user/getauth'] === true)
                    next();
                else
                    next('/');
            }
        }

    ]
})