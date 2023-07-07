<template>
<empty-whishlist v-if="itemsLen===0"></empty-whishlist>
  <div v-else>
    <div id="container-liked" v-if="loading">
    <h1 class="saved">Saved</h1>
    <TransitionGroup name="list" tag="ul">
       <saved-item  v-for="item in items_arr" :key="item" :item="item"></saved-item>
    </TransitionGroup>
   
  </div>
  <skelton-loader v-else></skelton-loader>
  </div>
</template>

<script>
import SavedItem from '../components/saved/liked-prod.vue'
import skeletonLoader from '../components/skeletonLoaders/like/skeleton_loader1.vue'
import emptyWhishlist from '../components/saved/empty_whishlist.vue'
export default {
  components:{
    'saved-item':SavedItem,
     'skelton-loader':skeletonLoader,
     'empty-whishlist':emptyWhishlist
  },
  provide()
  {
    return{
      del_item:this.removeItem
    }
  },
   data(){
    return{
      items:['mkc'],
        load_state:true
    }
  },
  computed:{
    loading(){
      return this.load_state;
    },
    items_arr(){
      return this.items;
    },
     itemsLen(){
      return this.items.length;
    }
  },
    async mounted(){
     window.scrollTo(0,0);
      this.load_state=false;
     let docs = await this.$store.dispatch('user/getWhishlistItems');
    if(docs.response==='OK')
    {
      this.items=docs.items; 
    }
    else
    this.items=[];
    this.load_state=true;
  },
 methods:{
    removeItem(shoeId){
    this.items=this.items.filter(item=>item.shoe != shoeId);
  }
 }
}
</script>

<style scoped>
@media only screen and (min-width:900px) {
  .saved{
    text-align:left;
    font-weight: 400;
    margin-top:10px;
    margin-bottom:20px;
    font-size:32px;
    margin-left:10%;
    margin-top:10%;
    }
    #container-liked{
      display:inline-block
    }
    /* transition group styling */
    .list-enter-active,
    .list-leave-active {
      transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(90px);
    }
}
@media only screen and (max-width:480px){
  .saved{
    font-weight: 500;
    margin-bottom:20px;
    font-size:24px;
    margin-left:10%;
    margin-top:10%;
    }
    #container-liked{
      display:inline-block
    }
    /* transition group styling */
    .list-enter-active,
    .list-leave-active {
      transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(90px);
    }
}
</style>