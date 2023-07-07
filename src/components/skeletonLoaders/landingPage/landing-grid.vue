<template>
  <div id="container">
<div class="item1">
  <grid-item v-for="i in 4" :key="i" :width="400" :height="300" :margin-left="5" :margin-right="5"></grid-item>
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
</style>