<template>
    <div>
      <div id="col1_1">
        <div class="prodImage"
        v-for="image in images"
        :key="image">
          <img :src="image" alt="productImage">
        </div>
      </div>
      <div id="mob">
        <v-app>
          <v-carousel

      :show-arrows="false"
      :touch="true"
      class="carousel"
      height="500px"
      :next-icon="true"
      :prev-icon="true"
      :cycle="true"
      >
        <v-carousel-item v-for="image in images" :key="image">
          <img :src="image" alt="advertisement"
           @click="carouselRedirect('Puma','roopamc')" class="mob">      
        </v-carousel-item>
      </v-carousel>
       </v-app>
      </div>
    </div>
</template>
<script>
export default {
    //except images as props 
    props:['images'],
}
</script>
<style scoped>
@media only screen and (min-width:900px){
  #col1_1{
    width:100%;
    height:fit-content;
    display:grid;
    grid-template-columns: repeat(2,450px);
    padding-left:5%;
    grid-gap:30px;
  }
  .prodImage img{
    width:450px;
    height:500px;
   cursor: pointer;
  }
  #mob{
    display: none;
  }
}
@media only screen and (max-width:480px){
  #col1_1{
    display: none;
    height:520px;
  }
  .mob{
    height:500px;
    width: 100vw;
  }
  ::v-deep .v-application--wrap {
    min-height: fit-content;
    max-height: 500px;
  }
}
</style>