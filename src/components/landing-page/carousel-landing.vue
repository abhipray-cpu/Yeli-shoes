<template>
<div>
   <v-app>
      <v-carousel
  :hide-delimiter-background="true"
  :hide-delimiters="true"
  :show-arrows="false"
  :cycle="true"
  :interval="3800"
  class="carousel"
  >
    <v-carousel-item>
      <img :src="require(`/src/assets/landing6.png`)" alt="advertisement"
       @click="carouselRedirect('Puma','roopamc')" class="desktop">    
       <img :src="require(`/src/assets/landing-small4.png`)" alt="advertisement"
       @click="carouselRedirect('Puma','roopamc')" class="mobile">    
    </v-carousel-item>
     <v-carousel-item>
       <img :src="require(`/src/assets/landing1.png`)" alt="advertisement"
       @click="carouselRedirect('roopamc','Sneakers')" class="desktop">    
       <img :src="require(`/src/assets/landing-small.png`)" alt="advertisement"
       @click="carouselRedirect('roopamc','Sneakers')" class="mobile">    
    </v-carousel-item>
     <v-carousel-item>
       <img :src="require(`/src/assets/landing2.png`)" alt="advertisement"
        @click="carouselRedirect('Nike','Sneakers')" class="desktop">    
        <img :src="require(`/src/assets/landing-small3.png`)" alt="advertisement"
        @click="carouselRedirect('Nike','Sneakers')" class="mobile">   
    </v-carousel-item>
     <v-carousel-item>
       <img :src="require(`/src/assets/landing4.png`)" alt="advertisement"
       @click="carouselRedirect('Nike','Sneakers')" class="desktop">    
       <img :src="require(`/src/assets/landing-small6.png`)" alt="advertisement"
       @click="carouselRedirect('Nike','Sneakers')" class="mobile">    
    </v-carousel-item>
     <v-carousel-item>
       <img :src="require(`/src/assets/landing3.png`)" alt="advertisement"
       @click="carouselRedirect('Adidas','roopamc')" class="desktop">   
       <img :src="require(`/src/assets/landing-small2.png`)" alt="advertisement"
       @click="carouselRedirect('Adidas','roopamc')" class="mobile">   
    </v-carousel-item>
     <v-carousel-item>
       <img :src="require(`/src/assets/landing5.png`)" alt="advertisement"
        @click="carouselRedirect('Adidas','roopamc')" class="desktop">    
        <img :src="require(`/src/assets/landing-small5.png`)" alt="advertisement"
        @click="carouselRedirect('Adidas','roopamc')" class="mobile">  
    </v-carousel-item>
  </v-carousel>
   </v-app>
</div>
</template>

<script>
export default {
  data(){
    return{
      adds:[
        '/src/assets/landing3.png',
      '/src/assets/landing1.png',
      '/src/assets/landing2.png',
      '/src/assets/landing4.png',
      '/src/assets/landing5.png',
      '/src/assets/landing6.png',],
    }
  },
  methods:{
    //modify this function to take a parametre that will redirect to search results
    carouselRedirect(brand,type){
       this.$router.push({
    path:`/search_results/${brand}/${type}`
  })
    },
     
  }
}
</script>

<style scoped>
@media only screen and (min-width:900px){
  ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
.v-carousel{
 
  margin-left:0.5%;
  margin-top:0.125%;
  margin-bottom:0.125%;
  height: 600px;
}
img{
  width:100%;
  height:100%;
  cursor:pointer;
}
.mobile{
  display: none;
}
}
@media only screen and (max-width:480px){
  ::v-deep .v-application--wrap {
    min-height: fit-content;
    max-height: 140px;
  }
.v-carousel{
 height: 140px;
  margin-left:0.5%;
  margin-top:10px;
  margin-bottom:0.125%;
}
img{
  width:100vw;
  height:140px;
}
.desktop{
  display: none;
}
}
</style>