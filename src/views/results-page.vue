<template>
 <div id="container-res">
   <div id="col1">
     <the-filter></the-filter>
   </div>
   <div id="col2">
<v-expansion-panels popout class="sort">
    <v-expansion-panel>
      <v-expansion-panel-header>
        Sort By
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <ul style="list-style-type: none">
          <li>Avg Customer rating</li>
          <li>Newest</li>
          <li>Price:Low to high</li>
          <li>Price:High to low</li>
        </ul>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>    <!--later add a global state listenere in here for controlling the bottom sheet-->

  <the-container v-if="loading"></the-container>
  <skeleton-loader v-else></skeleton-loader>
   </div>
   


 </div>
</template>


<script>

import TheContainer from '../components/results/results-container.vue'
import TheFilters from '../components/results/filters-comp.vue'
import SkeletonLoader from '../components/skeletonLoaders/results/skeleton-grid.vue'
export default {
  data(){
    return {
activate:false,
    }
  },
  computed:{
    loading(){
      return this.$store.getters['shoes/getLoad'];
    }
  },
  components:{
    'the-container':TheContainer,
    'the-filter':TheFilters,
    'skeleton-loader':SkeletonLoader
   
  },
  
  methods:{
    modalController(){
      this.activate = !this.activate;
    }
  },
    mounted(){
     window.scrollTo(0,0);
     this.$store.commit('shoes/intializeFilters',{ 
       brand:this.$route.params.brand,
       type:this.$route.params.type
      })

    this.$store.dispatch({
      type:'shoes/fetchShoes',
    })
  
     
  }
}
</script>

<style scoped>
@media only screen and (min-width:900px){
  #container-res{
    display:grid;
    grid-template-columns:410px auto;
    position:static;
    width:100vw;
    overflow-x:hidden;
    z-index:0 !important;
  }
  .sort{
    float: right;
    right: 0;
    margin-right:50px;
  }
  .v-expansion-panels{
    float:right;
    margin-right:30px;
    width:250px;
    right:0;
    margin-bottom:2%;
  }
  .v-expansion-panel::before {
     box-shadow: none !important;
  }
  .v-expansion-panel-header{
    font-weight:400;
    font-size:24px;
    font-style:normal;
  }
  .v-expansion-panel-content{
    height:150px;
    border-radius:20px;
    background-color:white;
  }
  ul{
    padding-top:2px;
    padding-bottom:2px;
  }
  ul li{
    margin-top:10px;
    margin-bottom:10px;
    font-weight:400;
    line-height: 1.5;
    font-style: normal;
    font-size:18px;
    cursor:pointer;
    
  }
  ul li:hover{
    color:rgb(148, 148, 148);
  }
  #col2{
    width:fit-content;
    overflow-x:scroll;
  }
  #col2::-webkit-scrollbar{
    display:none;
  }
}
@media only screen and (max-width:480px){
  #container-res{
    display:grid;
    grid-template-columns:40vw 60vw;
    position:static;
    width:100vw;
    overflow-x:hidden;
    z-index:0 !important;
    margin-top:20px;
  }
  .sort{
    float: right;
    right: 0;
    margin-right:10px;
  }
  .v-expansion-panels{
    float:right;
    margin-right:10px;
    width:150px;
    right:0;
    margin-bottom:2%;
  }
  .v-expansion-panel::before {
     box-shadow: none !important;
  }
  .v-expansion-panel-header{
    font-weight:400;
    font-size:16px;
    font-style:normal;
  }
  .v-expansion-panel-content{
    height:150px;
    border-radius:20px;
    background-color:white;
  }
  ul{
    padding-top:2px;
    padding-bottom:2px;
  }
  ul li{
    margin-top:10px;
    margin-bottom:10px;
    font-weight:400;
    line-height: 1.5;
    font-style: normal;
    font-size:15px;
    cursor:pointer;
    
  }
  ul li:hover{
    color:rgb(148, 148, 148);
  }
  #col2{
    width:fit-content;
    overflow-x:scroll;
  }
  #col2::-webkit-scrollbar{
    display:none;
  }
}
</style>
