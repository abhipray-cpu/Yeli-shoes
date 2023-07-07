<template>
  <div id="container-cart">
    <img :src="require('/src/assets/empty_cart.png')" alt="Empty cart">
   <v-btn x-large dark class="redirect" @click="redirect">Continue shopping</v-btn>
  </div>
</template>

<script>
export default {
methods:{
  redirect(){
    this.$router.push({
      name:'Home'
    })
  }
}  
}
</script>

<style scoped>
@media only screen and (min-width:900px){
  #container-cart{
    margin-bottom:50px;
  margin-top:0.75%;
  }
  img{
    margin-left:31%;
  }
  .redirect{
    margin-left:43%;
    margin-top:.35%;
  }
}
@media only screen and (max-width:480px){
  #container-cart{
    margin-bottom:50px;
  margin-top:0.75%;
  }
  img{
    width:100vw;
    height:500px;
  }
  .redirect{
    margin-left:22%;
    margin-top:.35%;
  }
}
</style>