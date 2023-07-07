<template>
    <div id="eja">
        <div class="prod">
      <div class="prodImg">
        <img :src="image" :alt="name">
      </div>
      <div class="prodDetails">
        <h1 style="margin-left:6%;cursor: pointer;" @click="prodRedirect">{{name}}</h1>
        <h2 style="margin-left:6.85%">₹{{price}}</h2>
        <h3>{{bhangBhosda}}</h3>
      <div class="btns">
        <v-btn large dark class="btnLeft" @click="whislist">Wishlist</v-btn>
        <v-btn large dark class="btnRight" @click="deleteItem">Delete</v-btn>
      </div>
      </div>
      
    </div>
    <div class="divider"></div>
    </div>
</template>
<script>
export default {
   inject:['del_item'],
    props:['item'],
    data(){
      return {
        image:'',
        name:'',
        price: 0,
        description:'',
        id:'',
        brand:'',
        type:''
      }
    },
    computed:{
     bhangBhosda(){
       return this.description.substring(0,300)
     }
    },
    async mounted(){
      let res = await this.$store.dispatch('user/getShoe',this.item.shoe);
      if(res.response==='OK')
      {
        this.image=res.data.image[0];
      this.name=res.data.title;
      this.price=res.data.price;
      this.description=res.data.description;
      this.id=res.data._id.$oid;
      this.brand=res.data.brand;
      this.type=res.data.type;
      }
    },
    methods:{
      prodRedirect()
      {
        this.$router.push({
       //passing in the path with param
       //so that params are retained even after reloading
       path:`/product/${this.id}/${this.brand}/${this.type}`,
       params:{product:this.name}
     })
        
      },
      deleteItem(){
      //add logic
      this.del_item(this.id);
      this.$store.dispatch('user/deleteCart',{shoeID:this.id});
    },
    whislist(){
      //add logic
      this.del_item(this.id);
      this.$store.dispatch('user/moveCartWhishlist',{shoeID:this.id});
    },
    }
}
</script>
<style scoped>
@media only screen and (min-width:900px){
  .prod{
    margin-left:10%;
  margin-top:2%;
  display:grid;
  grid-template-columns: 320px auto;
  }
  .prodImg img{
  width:300px;
  height:250px;
  }
  .divider{
    width:85%;
    margin-top:1.5%;
    margin-bottom:1.5%;
    height:1px;
    background-color:rgb(173, 170, 170);
    margin-left:10%;
  }
  .prodDetails{
    margin-left:3.5%;
  padding-top: .25%;
  }
  .prodDetails h1{
    font-weight: 500;
    font-style:normal;
    margin-bottom:1.5%;
  }
  .prodDetails h2{
    font-weight: 500;
    font-style:normal;
    margin-bottom:1.5%;
  color:rgb(12, 12, 12);
  }
  .prodDetails h3{
    font-weight: 400;
    font-style:normal;
    margin-bottom:1.5%;
  color:rgb(100, 100, 100);
  padding: left 5%;
  padding-right:5%;
  line-height: 1.5;
  }
  .btns{
  margin-top:3%;
  }
  .btnLeft{
    margin-left:50%;
    margin-right: 6%;
  }
  .btnRight{
    margin-right:3%;
  }
}

@media only screen and (max-width:480px){
  #eja{
    width:100vw;
    height:fit-content;
  }
  .prod{
    width:100vw;
    height:350px;
    display: grid;
    grid-template-columns: 35vw 65vw;
  }
  .prodImg{
    width:35vw;
    height:250px;
  }
  .prodImg img{
    width:35vw;
    height:150px;
  }
  .prodDetails{
    width:60vw;
    margin-left:5px;
  }
  .prodDetails h1{
    font-size:24px;
    font-weight: 500;
  }
  .prodDetails h2{
    font-size:22px;
    font-weight: 600;
  }
  .prodDetails h3{
    width:60vw;
    height: 100px;
    overflow: hidden;
    font-weight: 350;
    font-size:18px;
    margin-left:9px;
    margin-top:10px;
  }
  .btns{
    width:60vw;
    display: grid;
    grid-template-rows: auto;
    padding-left:15vw;
    padding-top:20px;
  }
  .btnLeft{
      width:40vw;
margin-bottom:15px;
  }
  .btnRight{
  width:40vw;margin-bottom:15px;

  }
  .divider{
    width:100vw;
    height:1px;
    background-color:rgb(173, 170, 170);
  margin-bottom:5px;
  }
}
</style>