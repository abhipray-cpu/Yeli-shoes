<template>
<!---split into components after adding state to control the visiblity ogf styling---->
  <div id="container" :class="[initalState?'containerNormal':searchChange?'containerActive':'containerPassive']">
    <div id="brand" :class="[searchChange?'hide':'visible']">
      <img :src="require('/src/assets/siteLogo/size4.png')" alt="Yelli Shoes" @click="redirect('Home')" style="cursor:pointer">
    </div>
    <div id="search">
      <!---implement elastic search in next project to make it work--->
     <v-text-field
     rounded
     v-model="searchVal"
     :append-icon="search"
           style="cursor:pointer" :class="[initalState?'searchNormal':searchChange?'searchActive':'searchPassive']" @click="searchClick"
          ></v-text-field>
     
<div :class="[searchChange?'popularActive':'popularPassive']">
  <h2>Some popular Search terms</h2>
  <ul>
    <li>Nike Air</li>
    <li>Adidas Sneakers</li>
    <li>Woodland Boots</li>
    <li>Kolhapuri Chappal</li>
  </ul>
</div>
    </div>
    <div id="mainNav" :class="[initalState?'navNormal':searchChange?'navHide':'navVisible']">
      <v-icon style="color:rgba(0,0,0,0.9)" class="navigation" @click="redirect('Notifications')">
        {{ bell}}
      </v-icon>
      <v-icon style="color:rgba(0,0,0,0.9)" class="navigation" @click="redirect('Cart')">
        {{ cart }}
      </v-icon>
      <v-icon style="color:rgba(0,0,0,0.9)" class="navigation" @click="redirect('Liked')">
        {{heart }}
      </v-icon>
    </div>
    <div id="closeCircle" :class="[searchChange?'closePassive':'closeActive']" @click="closeClick">
      <v-icon style="color:rgba(0,0,0,0.8)" large id="closeButton">
        {{close}}
      </v-icon>
    </div>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
      style="z-index:1"
    >
     <v-card>
       <div>
         <img :src="require('/src/assets/authorization puppy.jpg')" alt="Alert!!" class="authorizationPuppy">
       </div>

        <v-card-text>
          You are not logged in. Please login to continue.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <div id="buttons">
            <v-btn
            color="primary"
            text
            @click="cancel"
          >
            Cancel
          </v-btn>
            <v-btn
            color="primary"
            text
            @click="loginRedirect"
          >
            Login
          </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
 </div>
</template>

<script>
import { mdiMagnify } from '@mdi/js'
import { mdiHeart  } from '@mdi/js'
import {mdiBell} from '@mdi/js'
import { mdiCart } from '@mdi/js'
import { mdiCloseCircle } from '@mdi/js';
export default {
  computed:{
searchChange()
{ 
  console.log(this.searchState)
  return this.searchState;
},
dialog(){
  return this.$store.getters['user/getDialogState'];
}
  },
  data(){
    return{
      search:mdiMagnify,
      heart:mdiHeart,
      cart:mdiCart,
      bell:mdiBell,
      close:mdiCloseCircle,
      searchState:false,
      initalState:true,
      searchVal:'',
    }
  },
  methods:{
    loginRedirect(){
      this.$router.push({
        name:'Login'
      })
      
    },
    redirect(to){
      if(this.$store.getters['user/getauth'])
      {
        this.$router.push({
        name:`${to}`
      })
      }
      else{
        this.$store.commit('user/setlogDialog',{value:true})
      }
    },
    cancel(){
      this.$store.commit('user/setlogDialog',{value:false})
    },
    searchClick(){
      this.searchState = true;
      this.initalState=false;
    },
    closeClick(){
      this.searchState = false;
    }
  }
}
</script>

<style scoped>
/*these are the normal classes*/
@media only screen and (min-width:900px){
  .containerNormal{
    height:fit-content;
    }
    .searchNormal
    {
       display: flex;
      flex-direction: row-reverse;
      width:180px;
      height:40px;
      background:rgb(225, 225, 225);
      border-radius: 20px;
      margin-left:29%;
      margin-top:1%;
    }
    .navNormal
    {
    padding-left:70%;
      padding-top:1.65%;
      display:grid;
      grid-template-columns: repeat(3,auto);
    }
    .closeActive
    {
      display:none;
    }
    .closePassive
    {
    display:block;
    margin-left:75%;
    cursor:pointer;
    margin-top:1.4%;
    }
    .containerActive{
      animation-name:activateContainer;
      animation-delay: 0.15s;
      animation-duration:0.65s;
      animation-fill-mode:forwards;
    }
    .containerPassive{
     animation-name:deactivateContainer;
      animation-duration:.15s;
      animation-fill-mode:forwards;
    }
    #container{
      width:100%;
      margin-top:0.55%;
      padding-top:0.25%;
      padding-left:0.75%;
      background-color:rgb(245, 245, 245);
      padding-top:0.75%;
      display:grid;
      grid-template-columns: 13% auto auto;;
    }
    #brand img{
      margin-top:2%;
    }
    .popularPassive{
      display:none;
    }
    .popularActive{
         margin-left:33%;
    margin-top:1.25%;
    animation-name: popularActive;
    animation-delay:1s;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
    }
    .popularActive h2{
      font-weight:500;
      font-style:normal;
      margin-bottom:2.25%;
    }
    .popularActive ul{
      list-style-type: none;
    }
    .popularActive ul li{
      margin-top:1.65%;
      margin: bottom 1.65%;
      font-weight:400;
      font-style:normal;
      cursor:pointer;
    }
    .popularActive ul li:hover{
      color:rgb(106, 106, 106);
    }
    .searchPassive{
        display: flex;
      flex-direction: row-reverse;
      width:180px;
      height:40px;
      background:rgb(225, 225, 225);
      border-radius: 20px;
      margin-left:29%;
      margin-top:1%;
      animation-name:searchCollapse ;
      animation-duration: 0.75s;
      animation-fill-mode: forwards;
    }
    .searchActive{
       display: flex;
      flex-direction: row-reverse;
      height:40px;
      background:rgb(225, 225, 225);
      border-radius: 20px;
      margin-left:32%;
      margin-top:1%;
      animation-name: searchExpand;
      animation-duration: 0.75s;
      animation-fill-mode: forwards;
    }
    .search{
      margin-top:4px;
      margin-right:10px;
    }
    .navHide{
      display:none;
    }
    .navVisible{
      padding-left:70%;
      padding-top:1.65%;
      display:grid;
      grid-template-columns: repeat(3,auto);
    }
    .navigation{
      cursor: pointer;
    }
    .hide{
      visibility:hidden;
    }
    .visible{
      visibility:visible;
    }
    
    .authorizationPuppy{
      width:100%;
      height:200px;
    }
    
    /*animation for search expansion*/
    @keyframes searchExpand{
      0%{
        width:180px;
      }
      100%{
        width:480px;
      }
    }
    @keyframes popularActive{
      from{
    
        display:none;
      }
      to{
        display:block;
      }
    }
    @keyframes activateContainer{
      from{
        height:fit-content;
      }
      to{
        height:fit-content;
      }
    }
    /*reverse animations*/
    @keyframes searchCollapse{
      0%{
        width:480px;
      }
      100%{
        width:180px;
      }
    }
    @keyframes popularPassive{
      from{
    
        display:block;
      }
      to{
        display:none;
      }
    }
    @keyframes deactivateContainer{
      from{
        height:fit-content;
      }
      to{
        height:fit-content;
      }
    }
    #buttons{
      display:grid;
      grid-template-columns: auto auto;
    }
}
@media only screen and (max-width:480px){
  .containerNormal{
    height:fit-content;
    }
    #brand{
     display: none; 
    }
    .searchNormal
    {
       display: flex;
      flex-direction: row-reverse;
      width:180px;
      height:40px;
      background:rgb(225, 225, 225);
      border-radius: 20px;
      margin-left:2%;
      margin-top:1%;
    }
    .navNormal
    {
    padding-left:2%;
      padding-top:1.65%;
      display:grid;
      grid-template-columns: repeat(3,auto);
    }
    .v-icon{
      font-size:34px;
    }
    .closeActive
    {
      display:none;
    }
    .closePassive
    {
    display:block;
    margin-left:75%;
    cursor:pointer;
    margin-top:1.4%;
    }
    .containerActive{
      animation-name:activateContainer;
      animation-delay: 0.15s;
      animation-duration:0.65s;
      animation-fill-mode:forwards;
    }
    .containerPassive{
     animation-name:deactivateContainer;
      animation-duration:.15s;
      animation-fill-mode:forwards;
    }
    #container{
      width:100%;
      margin-top:0.55%;
      padding-top:0.25%;
      padding-left:0.75%;
      background-color:rgb(245, 245, 245);
      padding-top:0.75%;
      display:grid;
      grid-template-columns:auto auto;;
    }
    #brand img{
      margin-top:2%;
    }
    .popularPassive{
      display:none;
    }
    .popularActive{
    float:left;
    margin-left:5vw;
    margin-top:1.25%;
    animation-name: popularActive;
    animation-delay:1s;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
    }
    .popularActive h2{
      font-weight:500;
      font-style:normal;
      margin-bottom:2.25%;
      margin-left:0px;
    }
    .popularActive ul{
      list-style-type: none;
    }
    .popularActive ul li{
      margin-top:1.65%;
      font-weight:400;
      font-style:normal;
      cursor:pointer;
    }
    .popularActive ul li:hover{
      color:rgb(106, 106, 106);
    }
    .searchPassive{
        display: flex;
      flex-direction: row-reverse;
      width:180px;
      height:40px;
      background:rgb(225, 225, 225);
      border-radius: 20px;
      margin-top:1%;
      animation-name:searchCollapse ;
      animation-duration: 0.75s;
      animation-fill-mode: forwards;
    }
    .searchActive{
       display: flex;
      flex-direction: row-reverse;
      height:40px;
      width:50vw;
      background:rgb(225, 225, 225);
      border-radius: 20px;
      margin-top:1%;
      animation-name: searchExpand;
      animation-duration: 0.75s;
      animation-fill-mode: forwards;
    }
    .search{
      margin-top:4px;
      margin-right:10px;
    }
    .navHide{
      display:none;
    }
    .navVisible{
      padding-left:2%;
      padding-top:1.65%;
      display:grid;
      grid-template-columns: repeat(3,auto);
    }
    .navigation{
      cursor: pointer;
    }
    .hide{
      visibility:hidden;
    }
    .visible{
      visibility:visible;
    }
    
    .authorizationPuppy{
      width:100%;
      height:200px;
    }
    
    /*animation for search expansion*/
    @keyframes searchExpand{
      0%{
        width:180px;
      }
      100%{
        width:80vw;

      }
    }
    @keyframes popularActive{
      from{
    
        display:none;
      }
      to{
        display:block;
      }
    }
    @keyframes activateContainer{
      from{
        height:fit-content;
      }
      to{
        height:fit-content;
      }
    }
    /*reverse animations*/
    @keyframes searchCollapse{
      0%{
        width:80vw;
      }
      100%{
        width:180px;
      }
    }
    @keyframes popularPassive{
      from{
    
        display:block;
      }
      to{
        display:none;
      }
    }
    @keyframes deactivateContainer{
      from{
        height:fit-content;
      }
      to{
        height:fit-content;
      }
    }
    #buttons{
      display:grid;
      grid-template-columns: auto auto;
    }
    #closeButton{
      float:right;
      margin-right:3vw;
    }
}
</style>