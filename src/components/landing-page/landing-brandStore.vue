<template>
<div id="container-cancer">
  <div id="row1">
    <div id="col1">
      <h2 @click="searchRedirect">{{brand}} Store</h2>
    </div>
    <div id="col2">
     
           <v-icon x-large class="arrow1 desktop" id="leftButton" @click="scrollLeft">
            {{leftArrow}}
           </v-icon>
           <v-icon large class="arrow1 mobile" id="leftButton" @click="scrollLeft">
            {{leftArrow}}
           </v-icon>
    
           <v-icon  x-large class="arrow2 desktop" id="rightButton" @click="scrollRight">
             {{rightArrow}} 
           </v-icon>
           <v-icon  large class="arrow2 mobile" id="rightButton" @click="scrollRight">
            {{rightArrow}} 
          </v-icon>
      
    </div>
  </div>
  
 <div id="row" ref="row" v-if="loadState">
   <prod-carousel v-for="product,index in products" 
   :key="product.id+index"
   :data="product"></prod-carousel>
 </div>
 <skeleton-loader v-else></skeleton-loader>
</div>
</template>-

<script>
import ProdCarousel from './prod-carousel.vue'
import { mdiArrowRightCircle } from '@mdi/js';
import { mdiArrowLeftCircle } from '@mdi/js';
import { collection, query, where, getDocs , limit} from "firebase/firestore";
import {db} from '/src/firebase.js'
import SkeletonLoader from '../skeletonLoaders/landingPage/landing-grid.vue'
export default {
  components:{
    'prod-carousel':ProdCarousel,
    'skeleton-loader':SkeletonLoader
  },
  props:['brand'],

  data(){
    return{
      rightArrow:mdiArrowRightCircle,
      leftArrow:mdiArrowLeftCircle,
      liked:false,
      saved:false,
      state:'normal',
      heightNormal:'300px',
      widthNormal:'350px',
      heightHover:'350px',
      widthHover:'400px',
      hideBg:true,
      cycle:false,
       scrollAmount: 0,
      products:[],
      loading:true
    }
   
  },
  computed:{
    loadState(){
      return this.loading;
    }
  },
  methods:{
   scrollLeft(){
      const row = this.$refs.row
       row.scrollTo({
      left: this.scrollAmount -= 450,
      behavior: 'smooth',
    })
   },

scrollRight(){
    const row = this.$refs.row
       row.scrollTo({
        left: this.scrollAmount += 450,
        behavior: 'smooth',
    })
},
searchRedirect(){
  this.$router.push({
    path:`/search_results/${this.brand}/roopamc`
  })
}
  },
  async mounted(){
  const q = query(collection(db, "shoes"), where("brand", "==", this.brand), limit(6));
  this.loading=false;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
  this.products.push(doc.data());
   });
   this.loading=true;
       
  }
 
}
</script>

<style scoped>
@media only screen and (min-width:900px){
  #container-cancer {
    padding-left:5%;
    margin-bottom:0.75%;
    width:100%;
  }
  #row::-webkit-scrollbar{
    display:none;
  }
  #row{
  margin-top:3.25%;
  display:grid;
  grid-template-columns: repeat(6,auto);
  overflow-x: auto;
  }
  
  #row::-webkit-scrollbar{
    display:none;
  }
  
  h2{
    font-weight: 500;
    font-style:normal;
    font-size:24px;
    position:absolute;
    cursor:pointer;
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
    margin-left:75%;
  }
  .mobile{
    display: none;
  }
}
@media only screen and (max-width:480px){
  #container-cancer {
    width:100vw;
    margin-bottom:1.5vh;
    padding-left:0.5vw;
    padding-right:0.5vw;
  }
  #row::-webkit-scrollbar{
    display:none;
  }
  #row{
  margin-top:30px;
  display:grid;
  grid-template-columns: repeat(6,auto);
  overflow-x: auto;
  padding-left:15px;
  }
  
  #row::-webkit-scrollbar{
    display:none;
  }
  .v-icon{
    font-size:20px;
  }
  h2{
    font-weight: 500;
    font-style:normal;
    font-size:24px;
    position:absolute;
    cursor:pointer;
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
    margin-left:55%;
  }
  .desktop{
    display: none;
  }
}
</style>