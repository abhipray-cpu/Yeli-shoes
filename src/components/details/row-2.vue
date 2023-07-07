<template>
<!--need to add a virtual scroll in this section-->
     <div id="row2">

      
     <div id="row1">
    <div id="col1">
      <h2>You Might also like</h2>
    </div>
    <div id="col2">
     
           <v-icon x-large class="arrow1" id="leftButton" @click="scrollLeft"> 
            {{leftArrow}}
           </v-icon>
    
           <v-icon  x-large class="arrow2" id="rightButton" @click="scrollRight">
             {{rightArrow}}
           </v-icon>
      
    </div>
  </div>
   <div id="suggestions" ref="suggestions" v-if="loadState">
      <suggested-prod 
     v-for="product in prods"
     :key="product.title"
     :id="product._id.$oid"
     :image="product.image[0]"
     :name="product.title"
     :price="product.price"
     :description="product.description"
     :brand="product.brand"
     :type="product.type"></suggested-prod>
     </div>
     <skeleton-loader v-else></skeleton-loader>

   </div>
</template>

<script>
import SuggesteProd from './suggest_prod.vue'
import { mdiArrowRightCircle } from '@mdi/js';
import { mdiArrowLeftCircle } from '@mdi/js';
import skeletonLoader from '../skeletonLoaders/details/suggestion-skeleton.vue'
export default {
    components:{
      'suggested-prod':SuggesteProd,
      'skeleton-loader':skeletonLoader
    },
    computed:{
      prods(){
        return this.products;
      },
      loadState(){
       return this.$store.getters['shoes/getLoad'];
      }
    },
    data(){
      return{
        rightArrow:mdiArrowRightCircle,
      leftArrow:mdiArrowLeftCircle,
        scrollAmount:0,
        products:[],
      }
    },
    methods: {
      scrollLeft(){
      const suggestions = this.$refs.suggestions
       suggestions.scrollTo({
      left: this.scrollAmount -= 450,
      behavior: 'smooth',
    })
   },

scrollRight(){
    const suggestions = this.$refs.suggestions
       suggestions.scrollTo({
        left: this.scrollAmount += 450,
        behavior: 'smooth',
    })
}
    },
    props:['data'],
async mounted(){
       this.products=this.data;
  }
}
</script>

<style scoped>
@media only screen and (min-width:900px){
  #row2{
    width:100%;
    height:fit-content;
    margin-top:20px;
    padding-left:3.5%;
    padding-right:.5%;
    padding-top:2.5%;
    padding-bottom:2.5%;
  }
  #row2 h2{
    font-weight:500;
    font-style:normal;
    font-size:22px;
    margin-left:2%;
  }
  #suggestions{
    margin-top:2.5%;
    padding-left:2%;
    padding-right:2%;
    overflow-x:auto;
    display: grid;
    grid-template-columns: repeat(12,430px);
  }
  #suggestions::-webkit-scrollbar{
    display:none;
  }
  .suggestion{
    width:420px;
    height:500px;
    cursor:pointer;
   
  }
  .suggestion img{
    width:420px;
    height:340px;
  }
  .suggestDetails{
    margin-top:10px;
    width:420px;
    height:100px;
  }
  /*row1 styling*/
  #row1{
    display:grid;
    grid-template-columns: auto auto;
  }
  .arrow1{
    position: absolute;
    cursor:pointer;
  }
  .arrow2{
    margin-left:6.25%;
    position: absolute;
    cursor:pointer;
  }
  #col2{
    margin-left:63%;
  }
}
@media only screen and (max-width:480px){
  #row2{
    width:100vw;
    height:fit-content;
    margin-top:20px;
    padding-left:3.5%;
    padding-right:.5%;
    padding-top:2.5%;
    padding-bottom:2.5%;
  }
  #row2 h2{
    font-weight:500;
    font-style:normal;
    font-size:22px;
    margin-left:2%;
  }
  #suggestions{
    margin-top:4.5%;
    padding-left:2%;
    padding-right:2%;
    overflow-x:auto;
    display: grid;
    grid-template-columns: repeat(12,230px);
  }
  #suggestions::-webkit-scrollbar{
    display:none;
  }
  .suggestion{
    width:420px;
    height:500px;
    cursor:pointer;
   
  }
  .suggestion img{
    width:420px;
    height:340px;
  }
  .suggestDetails{
    margin-top:10px;
    width:420px;
    height:100px;
  }
  /*row1 styling*/
  #row1{
    display:grid;
    grid-template-columns: auto auto;
  }
  .arrow1{
    position: absolute;
    cursor:pointer;
  }
  .arrow2{
    margin-left:12.25%;
    position: absolute;
    cursor:pointer;
  }
  #col2{
    margin-left:0vw;
    margin-bottom:20px;
  }
}

</style>