<template>
    <div id="container-foot">
<div id="row1">
  <div class="column">
    <h2 class="title">About</h2>
    <h5 class="about">This is a company and add some thing about this company whateer you want 
      to add I don't give a fuck frankly speaking no one gives a fuck in the entire world.
      This is a company and add some thing about this company whateer you want 
      to add I don't give a fuck frankly speaking no one gives a fuck in the entire world.
    </h5>
  </div>
  <div class="column mob">
    <h2 class="title">Products</h2>
    <ul style="list-style: none">
      <li @click="shoeRedirect('Sneakers')">
        <a href="#">Sneakers</a>
      </li>
     <li @click="shoeRedirect('High Heels')">
        <a href="#">High Heels</a>
      </li>
     
      <li @click="shoeRedirect('Office Shoes')">
        <a href="#">Office Shoes</a>
      </li>
      <li @click="shoeRedirect('Slip Ons')">
        <a href="#">Slip Ons</a>
      </li>
      <li @click="shoeRedirect('Sandals')">
        <a href="#">Sandals</a>
      </li>
    </ul>
  </div>
  <div class="column mob">
  <h2 class="title">Quick Links</h2>
  <ul style="list-style:none">
    <li @click="redirection('Home')">
      <a href="#">Home</a>
    </li>
    <li @click="redirection('Profile')" v-if="auth">
      <a href="#">Account</a>
    </li>
    <li @click="redirection('Orders')" v-if="auth">
      <a href="#">Orders</a>
    </li>
    <li @click="redirection('Liked')" v-if="auth">
      <a href="">Saved</a>
    </li>
    <li @click="redirection('Cart')" v-if="auth">
      <a href="">Cart</a>
    </li>
    <li @click="redirection('Offers')">
      <a href="#">Offers</a>
    </li>
  </ul>
  </div>
</div>
<div class="divider"></div>
<div id="row2">
  <div>
    <h2 class="title1">
      Copyright © 2022 all rights reserved by Puttanpal and sons.
    </h2>
  </div>
  <div class="connect">
    <div class="icon">
      <v-icon>
      {{google}}
    </v-icon>
    </div>
    <div class="icon">
      <v-icon>
      {{facebook}}
    </v-icon>
    </div>
    <div class="icon">
      <v-icon>
      {{twitter}}
    </v-icon>
    </div>
    <div class="icon">
      <v-icon>
      {{instagram}}
    </v-icon>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import { mdiGoogle } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
export default {
    data(){
      return{
        google:mdiGoogle,
        facebook:mdiFacebook,
        twitter:mdiTwitter,
        instagram:mdiInstagram
      }
    },
    computed:{
      auth(){
        return this.$store.getters['user/getauth']
      }
    },
    methods:{
      redirection(to){
        this.$router.push(
          {
            name:`${to}`
          }
        )},
      shoeRedirect(type)
      {
        this.$router.push({
    path:`/search_results/roopamc/${type}`
  })
      }
    }
}
</script>

<style scoped>
@media only screen and (min-width:900px){
  #container-foot{
    width:99.5%;
    height:350px;
    background-color:rgba(0,0,0,0.9);
    margin-left:.25%;
    margin-right:.25%;
    margin-top:1.25%;
    padding-left:5%;
    padding-right:2%;
    padding-top:3%;
    margin-bottom:.125%;
    position:static;
}
#row1{
  height:190px;
  width:100%;
  display:grid;
  grid-template-columns: repeat(3,auto);
}
.title{
  font-size:20px;
  font-weight: 500;
  color:white;
  font-family: 'Roboto', sans-serif;
}
.title1{
  font-size:18px;
  font-weight: 500;
  color:rgb(94, 92, 92);
  font-family: 'Roboto', sans-serif;
}
.about{
  font-size:15px;
  font-weight: 300;
  color:rgb(129, 129, 129);
  font-family: 'Roboto', sans-serif;
  width:500px;
  margin-top:10px;
  line-height: 1.35;
}
ul{
  margin-top:10px;
  margin-left: 25%;
}
ul li a{
text-decoration: none;
color: rgb(136, 136, 136);  
cursor:pointer;
font-size:18px;

}
ul li
{
  margin-top:1.5%;
  margin-bottom:1.5%;
}
.divider{
  width:90%;
  height:1px;
  background-color: rgb(102, 102, 102);
margin-top:2%;
margin-bottom:2%;
}
#row2{
  display:grid;
  grid-template-columns: auto auto;
}
.connect{
  display:grid;
  grid-template-columns: repeat(4,55px);
  margin-left: 40%;
}
.icon{
  background-color:rgb(138, 137, 137);
width:30px;
height:30px;
border-radius:100px;
padding:3px;
cursor: pointer;
}
ul li a:hover{
  color:white;
}
}
@media only screen and (max-width:480px){
  #container-foot{
    width:99.5vw;
    height:490px;
    background-color:rgba(0,0,0,0.9);
    margin-left:.25%;
    margin-right:.25%;
    margin-top:1.25%;
    padding-top:3%;
    margin-bottom:.125%;
    bottom: 0;

}

#row1{
  width:100vw;
}
.title{
  font-size:20px;
  font-weight: 500;
  float: left;
  margin-left:20px;
  color:white;
  font-family: 'Roboto', sans-serif;
  margin-top:10px;
}
.title1{
font-size:18px;
font-weight: 500;
color:rgb(94, 92, 92);
font-family: 'Roboto', sans-serif;
margin-left:15px;  
}
.about{
  font-size:15px;
  font-weight: 300;
  color:rgb(129, 129, 129);
  font-family: 'Roboto', sans-serif;
  width:95vw;
  margin-top:10px;
  line-height: 1.35;
  float: left;
  margin-left:10px;
  margin-bottom:15px;
}
ul{
  margin-top:20px;
  width:98vw;
  margin-left:1vw;
  margin-right:1vw;
display: flex;
flex-direction: row;
padding-left:4vw;
}
ul li a{
text-decoration: none;
color: rgb(136, 136, 136);  
cursor:pointer;
font-size:18px;

}
ul li
{
  margin-top:1.5%;
  margin-bottom:1.5%;
  margin-left:4px;
  margin-right:4px;
}
.divider{
  width:90vw;
  height:1px;
  margin-left:3vw;
  background-color: rgb(102, 102, 102);
margin-top:2%;
margin-bottom:2%;
}
#row2{
  width:100vw;
}
.connect{
  display:grid;
  grid-template-columns: repeat(4,55px);
  margin-left:100px;
  margin-top:10px;
}
.icon{
  background-color:rgb(138, 137, 137);
width:30px;
height:30px;
border-radius:100px;
padding:3px;
cursor: pointer;
}
ul li a:hover{
  color:white;
}
}
</style>