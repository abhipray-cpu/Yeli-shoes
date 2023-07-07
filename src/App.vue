<template>
  <div id="papa">
    <!--make these two conditionals based on some state-->
 
  <div  :style="{background:alert_data['color']}">
   <v-alert
               :value="alert"
              :color="alert_data['color']"
               style="{
                 background-color: transparent;
                 position: fixed;
  left: 50%;
  top: 50px;
  z-index: 1;
  transform: translate(-50%, -50%);
  margin: 0 auto;  // Without this the box extends the width of the page}"
               dark
               :type="alert_data['type']"
               transition="slide-y-transition"
               >
               {{alert_data['text']}}
      </v-alert>
 </div>

    <the-header v-if="currentRouteName" style="z-index:1"></the-header>
    <!---include this only for landing page--->
    <v-fade-transition mode="out-in">
      <router-view :key="$route.fullPath"/>
    </v-fade-transition>

    <the-footer v-if="currentRouteName"></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/landing-page/Landing-header.vue";
import TheFooter from "./components/general/footer-landing.vue";
export default {
  data(){
    return{
      alertData:{
        'cart-success':{
          color:"rgb(255, 0, 102)",
          type:'success',
          text:'Successfully added to cart!'
        },
        'whishlist-success':{
          color:"rgb(255, 71, 26)",
          type:'success',
          text:'Successfully added to whishlist!'
        },
        'cart-fail':{
          color:"rgb(256, 0, 0)",
          type:'error',
          text:'Failed to add to cart!'
        },
        'whishlist-fail':{
          color:"rgb(256, 0, 0)",
          type:'error',
          text:'Failed to add to whishlist!'
        }
      }
    }
  },
  components: {
    "the-header": TheHeader,
    "the-footer": TheFooter,
  },
  computed: {
    currentRouteName() {
        return this.$route.name != 'Login' && this.$route.name!='Signup' && this.$route.name != "Checkout";
    },
    alert(){
      return this.$store.getters['user/getAlert'];
    },
    alert_data(){
      let info=this.$store.getters['user/getAlertState']
      return this.alertData[info];
    }
  },
  
};
</script>
<style>
#papa{
  overflow-y:auto;
  overflow-x: hidden;
}
#papa::-webkit-scrollbar{
  display: none;
}
</style>
