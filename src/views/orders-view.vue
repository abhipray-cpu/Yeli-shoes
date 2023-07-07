<template>
 <div>
    <h1 class="saved">Orders</h1>
    <the-order></the-order>
    <!---design this part further for placing orders-->
</div>
 

  
</template>

<script>
import TheOrder from '../components/orders/orders-comp.vue'
export default {
  components:{
    'the-order':TheOrder
  },
    mounted(){
     window.scrollTo(0,0);
  }
}
</script>
<style scoped>
.saved{
text-align:left;
font-weight: 400;
margin-top:10px;
margin-bottom:20px;
font-size:24px;
margin-left:20%;
margin-top:10%;
}

</style>