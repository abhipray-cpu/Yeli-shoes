<template>
  <div id="row1">
<column-1 :images="item.image" v-if="loadState"></column-1>
<col1-skeleton v-else></col1-skeleton>
    <column-2 
    :id="item._id.$oid"
    :title="item.title"
    :price="item.price"
    :description="item.description"
    :image="item.image[0]"
    v-if="loadState"></column-2>
    <col2-skeleton v-else></col2-skeleton>
  </div>
</template>
  
<script>
import Column1 from './col1_1.vue'
import Col1Skeleton from '../skeletonLoaders/details/images-skeleton.vue'
import Column2 from './col1_2.vue'
import Col2Skeleton from '../skeletonLoaders/details/col-2.vue'
export default {
    components:{
        'column-1':Column1,
        'column-2':Column2,
        'col1-skeleton':Col1Skeleton,
        'col2-skeleton':Col2Skeleton
    },
    computed:{
      loadState(){
        return this.$store.getters['shoes/getLoad'];
      },
      item(){

        return this.data;
      }
    },
    props:['data'],
    async mounted(){
       
  }
}
</script>
<style scoped>
@media only screen and (min-width:900px){
  #row1{
    margin-top:3.35%;
    width:100vw;
    height:fit-content;
    display:grid;
    grid-template-columns: 70% 30%;
  }
  
}
@media only screen and (max-width:480px){
  #row1{
    margin-top:3.35%;
    width:100vw;
    height:fit-content;
    display: flex;
    flex-direction: column;
  }
}
</style>