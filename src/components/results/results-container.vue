<template>
    <div id="containerF">
    <search-item v-for="item in items"
    :key="item._id.$oid"
    :item="item"></search-item>
</div>
</template>


<script>
import TheItem from './search-item.vue'
export default {
    components:{
        'search-item':TheItem,
    },
    computed:{
      items(){
        return this.$store.getters['shoes/getItems']
      }
    }
    
}
</script>
<style scoped>
@media only screen and (min-width:900px){
  #containerF{
    height:80vh;
    margin-top:55px;
    padding-left:1.75%;
    padding-right:0.5%;
    display:grid;
    grid-template-columns: repeat(4,23vw);
    grid-gap:.75vw;
    position:relative;
  }
  #containerF::-webkit-scrollbar{
    display:none
  }
}
@media only screen and (max-width:480px){
  #containerF{
    height:80vh;
    margin-top:55px;
    display:grid;
    grid-template-columns: repeat(2,40vw);
    position:relative;
    margin-left:2vw;
  }
  #containerF::-webkit-scrollbar{
    display:none
  }
}
</style>