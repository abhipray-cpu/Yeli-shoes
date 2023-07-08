<template>
  <div id="container">
<div class="item1">
  <grid-item v-for="i in 4" :key="i" :width="400" :height="300" :margin-left="5" :margin-right="5" id="desktop"></grid-item>
  <grid-item v-for="i in 2" :key="i" :width="180" :height="130" :margin-left="2.1" :margin-right="2.1" id="mobile"></grid-item>
</div>
</div>
</template>

<script>
//the loading state will be a global state that will be shared by each grid item
import GridItem from './grid-item.vue';

export default {
  components:{
    'grid-item':GridItem,
  },
  
}
</script>

<style scoped>
@media only screen and (min-width:900px){
  #container{
    padding-left:1%;
    padding-top:2.5%;
    margin-left:.5%;
    }
    .item1{
      display:grid;
      grid-template-columns: repeat(4,auto);
    padding-left:.5%;
    }
    #mobile{
      display: none;
    }
}
@media only screen and (max-width:480px){
  #mobile{
    height:130px;
    overflow-y:hidden;
  }
  #container{
    padding-left:3vw;
    }
    .item1{
      display:grid;
      grid-template-columns: repeat(2,auto);
    padding-left:.5%;
    }
    #desktop{
      display:none;
    }
}
</style>