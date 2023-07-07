<template>
      <div class="suggestion" @click="suggestionRedirect('productID')">
      <img :src="image" alt="name of shoe">
      <div class="suggestDetails">
          <h2 class="active">{{name}}</h2>
          <h2 class="passive">{{desc}}</h2>
          <h2 class="active">₹{{price}}</h2>
          <h2 class="passive">Incl. of taxes and duties</h2>

      </div>
     </div>
</template>

<script>
export default {
    props:['image','id','name',
    'price','description',
    'brand','type'],
    computed:{
      desc(){
        return this.description.slice(0,25)+'...';
      }
    },
    methods:{
      suggestionRedirect(prodId){
        console.log( `Redirect to ${prodId}`);
        this.$router.push({path:`/product/${this.id}/${this.brand}/${this.type}`});

      }
    }
}
</script>

<style scoped>
@media only screen and (min-width:900px){
  .suggestion{
    width:420px;
    height:500px;
    cursor:pointer;
   
  }
  .suggestion img{
    width:420px;
    height:340px;
  }
  .suggestDetails{
    margin-top:10px;
    width:420px;
    height:100px;
  }
  .active{
    margin-top:20px;
    color: black;
    font-weight:400;
    font-style:normal;
    font-size:20px;
  }
  .passive{
    margin-top:10px;
    color: rgba(0, 0, 0,0.6);
    font-weight:400;
    font-style:normal;
    font-size:20px;
  }
}
@media only screen and (max-width:480px){
  .suggestion{
    width:230px !important;
    height:200px;
    cursor:pointer;
    margin-left:3px !important;
    margin-right: 3px !important;
  }
  .suggestion img{
    width:230px;
    height:180px;
  }
  .suggestDetails{
    margin-top:2px;
    width:230px;
    height:50px;
  }
  .active{
    margin-top:20px;
    color: black;
    font-weight:400;
    font-style:normal;
    font-size:17px;
  }
  .passive{
    margin-top:10px;
    color: rgba(0, 0, 0,0.6);
    font-weight:400;
    font-style:normal;
    font-size:14px;
  }
}
</style>