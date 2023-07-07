<template>

  <keep-alive>
     <div style="margin-left:35%;margin-top:0.75%">
  <the-progress></the-progress>
</div>
    <component :is="currComponent"></component>
  </keep-alive>
</template>

<script>
//link these components via some global state
import AddressComp from '../components/checkout/address-comp.vue'
import ContactsComp from '../components/checkout/contact-details.vue'
import PaymentComp from '../components/checkout/payment-comp.vue'
import TheProgress from '../components/checkout/progress-comp.vue'
export default {
  computed:{
    currComponent(){
      let state=this.$store.getters['user/get_fromState']
      if(state==0)
      return 'address-comp'
      else if(state==1)
      return 'contact-details'
      else if(state==2)
      return 'payment-comp';
      else
      return 'address-comp';
    },
  },
  data(){
    return{
      phase:3,//make this a global state
      circle1_state:true,
      line1_state:false,
      circle2_state:false,
      line2_state:false,
      circle3_state:false,
      mode:'forward'
    }
  },
  components:{
    'address-comp':AddressComp,
    'contacts-comp':ContactsComp,
    'payment-comp':PaymentComp,
      'the-progress':TheProgress,
  },
  mounted(){
    window.scrollTo(0,0);
  }
}
</script>

<style scoped>

</style>