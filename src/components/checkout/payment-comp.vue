<template>
<!--add a dynamic component here which will a three phase UI keep on updating the phase indicator as well as per state-->
  <div id="baap">
    <div style="margin-left:35%">
      <the-progress :circle1="true" :line1="true" :circle2="true"
      :line2="true" :circle3="true"></the-progress>
    </div>
    <div id="containerT">
      <div id="payment">
        <div>
          <payment-card></payment-card>
          <net-banking></net-banking>
          <upi-payment></upi-payment>
          <wallet-payment></wallet-payment>
           
        </div>
      </div>
      <div style="margin-left:1.5%;">
        <order-summary></order-summary>
        <div style="margin-top:10px;margin-left:45%;">
           <v-btn dark x-large shaped>
      Make Payment
    </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheProgress from './progress-comp.vue'
import OrderSummary from './order-details.vue'
import PaymenCard from './payment-card.vue'
import NetBanking from './net-banking.vue'
import UPIPayment from './upi-payment.vue'
import WalletPayment from './wallet-payment.vue'
//inplace of static bar add animatted component
export default {
  components:{
    'the-progress':TheProgress,
    'order-summary':OrderSummary,
    'payment-card':PaymenCard,
    'net-banking':NetBanking,
    'upi-payment':UPIPayment,
    'wallet-payment':WalletPayment
  }
}
</script>

<style scoped>
#containerT{
  display:grid;
  grid-template-columns: auto auto;
  margin-top:1.75%;
  margin-left:20%;
}
#payment{
  width:700px
}
</style>