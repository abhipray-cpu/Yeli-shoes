<template>
     <header>
      <div id="brand">
        <vue-img app>
      <img :src="require('/src/assets/siteLogo/size5.png')" class="desktop"/>
      <img :src="require('/src/assets/siteLogo/size2.png')" class="mobile"/>
    </vue-img>
      </div>
      <div id="nav">
        <v-btn
        elevation="2"
        class="nav-item"
        
              icon
              @click="searchRedirect"
        >
              <v-icon
              class="icon"
              style="color:black;"
              >
              {{search}}
              </v-icon>
        </v-btn>
        <v-btn
        elevation="2"
        class="nav-item"
              icon
              @click="cartRedirect"
        >
              <v-icon
              class="icon"
              style="color:black"
              >
              {{cart}}
              </v-icon>
        </v-btn>
        <v-btn
        elevation="2"
        class="nav-item"
        
              icon
              @click="likedRedirect"
        >
              <v-icon
              class="icon"
              style="color:black"
              >
              {{liked}}
              </v-icon>
        </v-btn>
      </div>
    </header>
</template>

<script>
import { mdiCart } from '@mdi/js'
import { mdiMagnify } from '@mdi/js'
import { mdiHeart  } from '@mdi/js'
export default {
  data(){
    return{
      cart:mdiCart,
      search:mdiMagnify,
      liked:mdiHeart
    }
  },
  methods:{
    searchRedirect(){
      console.log('redirecting to the search page')
    },
    cartRedirect(){
      console.log('redirecting to the cart page')
    },
    likedRedirect(){
      console.log('redirecting to the liked page')
    },
  }
}
</script>
<style scoped>
@media only screen and (min-width: 900px){
  header{
    display:grid;
    grid-template-columns:20fr 20fr
  }
  h1{
    font-weight:500;
    font-style:normal;
    font-size:24px;
    padding-top:16px;
  }
  #brand{
    padding:1%;
    margin:1%;
    display:grid;
    grid-template-columns:100px 200px;
  }
  #nav{
    margin:1%;
    padding:1%;
    margin-left:60%;
    display:grid;
    grid-template-columns: repeat(3,auto);
  }
  .mobile{
    display: none;
  }
  .nav-item{
    margin-left:4.5%;
    margin-right:4.5%;
  }
}
@media only screen and (max-width:480px){
  header{
    display:grid;
    grid-template-columns:20fr 20fr
  }
  h1{
    font-weight:500;
    font-style:normal;
    font-size:24px;
    padding-top:16px;
  }
  #brand{
    padding:1%;
    margin:1%;
    display:grid;
    grid-template-columns:repeat(2,auto);
  }
  #nav{
    margin-left:6vw;
    padding-left:2vw;
    display:grid;
    grid-template-columns: repeat(3,auto);
  }
  .desktop{
    display: none;
  }
  .nav-item{
    margin-left:1.5%;
    margin-right:1.5%;
  }
  .icon{
    font-weight: 400;
    margin-top:10px;
  }
}
</style>