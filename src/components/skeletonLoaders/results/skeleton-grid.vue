<template>
  <div id="containerT">
  <grid-item v-for="i in 30" :key="i"></grid-item>
</div>
</template>

<script>
//the loading state will be a global state that will be shared by each grid item
import GridItem from './grid-tem.vue'

export default {
  components:{
    'grid-item':GridItem,
  },
  
}
</script>

<style scoped>
#containerT{
padding-left:1%;
padding-top:2.5%;
margin-left:2.5%;
display:grid;
grid-template-columns:repeat(3,350px);
}
</style>