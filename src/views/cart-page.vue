<template>
<empty-cart v-if="itemsLen===0"></empty-cart>
<div v-else>
  <skelton-loader v-if="loading"></skelton-loader>
  <div id="container-cart" v-else>
    <!--add a produvt increment and decrement component later--->
    <h1 class="saved">Cart</h1>
     <div class="total">
      <h1>Total=₹{{cartPrice}}</h1>
    </div>
    <TransitionGroup name="list" tag="ul">
      <cart-item v-for="item in items" :key="item" :item="item"></cart-item>
    </TransitionGroup>
   <div class="total">
      <h1>Total=₹{{cartPrice}}</h1>
    </div>
    <v-btn x-large dark class="Checkout" @click="checkout" id="btn">Checkout</v-btn>
  </div>
</div>
</template>

<script>
import CartItem from '../components/cart/cart-item.vue'
import skeletonLoader from '../components/skeletonLoaders/like/save/skeleton_loader.vue'
import emptyCart from '../components/cart/empty_cart.vue'
export default {
  components:{
    'cart-item':CartItem,
    'skelton-loader':skeletonLoader,
    'empty-cart':emptyCart
  },
  methods:{
    checkout(){
      this.$router.push({
        name:'Checkout'
      })
    },
    removeItem(shoeId){
    this.items=this.items.filter(item=>item.shoe != shoeId);
  }
  },
  data(){
    return{
      items:['mkc'],
      load_state:false
    }
  },
  computed:{
    loading(){
      return this.load_state;
    },
    itemsLen(){
      return this.items.length;
    },
    cartPrice(){
      return this.$store.getters['user/get_cartPrice']
    }
  },
   provide()
  {
    return{
      del_item:this.removeItem
    }
  },

    async mounted(){
     window.scrollTo(0,0);
     this.load_state=true
    let docs= await this.$store.dispatch('user/getCartItems');
    if(docs.response==='OK')
    {
      this.items=docs.items; 
    }
    else
    this.items=[];
    //else throw some error
    this.load_state=false;
  }
}
</script>

<style scoped>
@media only screen and (min-width:900px){
  .saved{
    text-align:left;
    font-weight: 400;
    margin-top:10px;
    margin-bottom:20px;
    font-size:24px;
    margin-left:10%;
    margin-top:10%;
    }
    
    .total{
      margin-top:2%;
    }
    .total h1{
      text-align:end;
      margin-right:10%;
      font-weight:400;
      font-style:normal;
    }
    .Checkout{
      margin-top:2%;
      margin-left:80%;
      margin-bottom:6%;
    }
    /* transition group styling */
    .list-enter-active,
    .list-leave-active {
      transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(90px);
    }
}
@media only screen and (max-width:480px){
  .saved{
    font-weight: 500;
    margin-bottom:20px;
    font-size:24px;
    margin-left:10%;
    margin-top:10%;
    }
    
    .total{
      margin-top:20px;
      float: left;
      margin-bottom:10px;
    }
    .total h1{
      text-align:start;
      margin-left:1.5vw;
      font-weight:700;
      font-style:normal;
      font-size:27px;
    }
    .Checkout{
      margin-top:2%;
      margin-left:55%;
      margin-bottom:6%;
    }
    /* transition group styling */
    .list-enter-active,
    .list-leave-active {
      transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(90px);
    }
    #btn{
      margin-top:20px;
      width:80vw;
      margin-left:10vw;
    }
}
</style>