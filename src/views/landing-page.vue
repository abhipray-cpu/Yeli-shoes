<template>
<!--need to add lazy loader here-->
<div id="boodie">
 <the-nav class="shortcut"></the-nav>
 <the-carousel></the-carousel>
 <div class="row" v-for="row in rows1" :key="row">
   <the-row  :brand="row"></the-row>
 </div>
 <div class="advertisement">
   <div class="advertise1" @click="advertiseRedirect('Nike','Sneakers')">
     <img :src="require('../assets/brandLogo/advertise1.png')" alt="advertisement">
   </div>
   <div class="advertise2" @click="advertiseRedirect('Air Jordan','roopamc')">
     <img :src="require('../assets/brandLogo/advertise2.png')" alt="advertisement">
   </div>
 </div>
 <div class="row" v-for="row in rows2" :key="row">
   <the-row  :brand="row"></the-row>
 </div>
  <div class="advertisement">
   <div class="advertise1" @click="advertiseRedirect('roopamc','Sneakers')">
     <img :src="require('../assets/brandLogo/advertise3.png')" alt="advertisement">
   </div>
   <div class="advertise2" @click="advertiseRedirect('roopamc','Office Shoes')">
     <img :src="require('../assets/brandLogo/advertise4.png')" alt="advertisement">
   </div>
 </div>
 <div class="row" v-for="row in rows3" :key="row">
   <the-row  :brand="row"></the-row>
 </div>
  <div class="advertisement" @click="advertiseRedirect('Adidas','Sneakers')">
   <div class="advertise1">
     <img :src="require('../assets/brandLogo/advertise5.png')" alt="advertisement">
   </div>
   <div class="advertise2" @click="advertiseRedirect('Nike','roopamc')">
     <img :src="require('../assets/brandLogo/advertise6.png')" alt="advertisement">
   </div>
 </div>
 <div class="row" v-for="row in rows4" :key="row">
   <the-row  :brand="row"></the-row>
 </div>
  <div class="advertisement" @click="advertiseRedirect('roopamc','Office Shoes')">
   <div class="advertise1">
     <img :src="require('../assets/brandLogo/advertise7.png')" alt="advertisement">
   </div>
   <div class="advertise2" @click="advertiseRedirect('roopamc','Loafers')">
     <img :src="require('../assets/brandLogo/advertise11.png')" alt="advertisement">
   </div>
 </div>
 <div class="row" v-for="row in rows5" :key="row">
   <the-row  :brand="row"></the-row>
 </div>
</div>
  
</template>
<script>


import TheRow from '../components/landing-page/landing-brandStore'

import TheCarousel from '../components/landing-page/carousel-landing.vue'
import TheNav from '../components/general/navig-ator.vue'


export default {
 components:{
   'the-row':TheRow,
   'the-carousel':TheCarousel,
   'the-nav':TheNav,  
 },
 computed:{
   drawState(){
     return this.drawer;
   }
 },
   data(){
    return{
      sheet:true,
      drawer: null,
      rows1:['Air Jordan','Adidas',],
      rows2:['Reebok','Puma','Gucci',],
      rows3:['Red Chief','Crocs','H&M'],
      rows4:['Skechers','Burberry'],
      rows5:['Under Armour','Miu Miu','Woodland',],
        
}
},
  methods:{
       advertiseRedirect(brand,type)
       {
           this.$router.push({
    path:`/search_results/${brand}/${type}`
  })
       }   
   
    },
    provide(){
      return {
        'expandDrawer':()=>{
          this.drawer=!this.drawer
        },
        'expandState':this.drawState
      }
    },
    mounted(){
     //this will dispatch the autologin action
     
     try
     {
       this.$store.dispatch('user/autoLogin');
     }
     catch(err)
     {
       console.log(err);
     }
    }
    
  }
  

</script>

<style >
@media only screen and (min-width:900px){
  
.row{
  margin-top:2%;
}
.row h2{
  margin-left:5%;
  margin-bottom:-0.5%;
  font-weight:600;
  font-style:normal;
  font-size: 25px;
  color:rgba(0,0,0,0.8);
cursor:pointer;
}
#container1{
    width:499px;
    height:300px;
    display:grid;
    margin-left:5%;
    grid-template-columns: 300px 150px;
}
 #add h2
{
    text-align:center;
    font-style: italic;
    font-weight: 500;
    margin-top:25px;
    margin-left:20px;
}
#container1 img{
    width:300px;
    height:300px;
}
.logo{

  margin-left:0.125%;
  margin-left:5%;
  cursor: pointer;
  width:150px;
  height:150px;
}
#boodie{
  overflow-y:auto;
}
#boodie::-webkit-scrollbar{
  display:none;
}

.advertisement{
  display: grid;
  grid-template-columns: auto auto;
}
.advertise1{
  margin-left:5%;
  width:600px;
    cursor: pointer;
}
.advertise2{
  margin-left:15%;
  width:600px;
    cursor: pointer;
}
.advertise1{
  right:0;
  margin-right:10%;
  width:600px;
    cursor: pointer;

}
.advertise1 img,.advertise2 img{
  width:600px;
  height:600px;
  box-shadow: 2px 2px 4px rgb(88, 87, 87);
}
}
@media only screen and (max-width:480px){
  .shortcut{
    display: none;
  }
  .row{
    margin-top:2%;
    height: fit-content;
  }
  .row h2{
    margin-left:5%;
    margin-bottom:-0.5%;
    font-weight:600;
    font-style:normal;
    font-size: 25px;
    color:rgba(0,0,0,0.8);
  cursor:pointer;
  }
  #container1{
      width:499px;
      height:300px;
      display:grid;
      margin-left:5%;
      grid-template-columns: 300px 150px;
  }
   #add h2
  {
      text-align:center;
      font-style: italic;
      font-weight: 500;
      margin-top:25px;
      margin-left:20px;
  }
  #container1 img{
      width:300px;
      height:300px;
  }
  .logo{
  
    margin-left:0.125%;
    margin-left:5%;
    cursor: pointer;
    width:150px;
    height:150px;
  }
  #boodie{
    overflow-y:auto;
  }
  #boodie::-webkit-scrollbar{
    display:none;
  }
  

.advertise1{
  margin-left:1vw;
  width:98vw;
    cursor: pointer;
   margin-right:1vw;
}
.advertise2{
  margin-left:1vw;
  width:98vw;
    cursor: pointer;
    margin-right:1vw;
}
.advertise1 img,.advertise2 img{
  width:98vw;
  height:300px;
  margin-top:4px;
  margin-bottom:4px;
  border-radius:10px;
  box-shadow: 4px 4px 4px rgba(38, 38, 38, 0.689);
}
}
</style>