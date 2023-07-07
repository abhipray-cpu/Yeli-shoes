<template>
  <div id="container">
   <v-app>
   <the-gender></the-gender>
  <div class="divider"></div>
 <the-color></the-color>
  <div class="divider"></div>
 <the-brand></the-brand>
  <div class="divider"></div> 
 <the-size></the-size>
  <div class="divider"></div>
  <shoe-material></shoe-material>
  <div class="divider"></div>
  <shoe-type></shoe-type> 
   </v-app>
  </div>

</template>
<script>
import TheGender from './gender-select.vue'
import TheColor from './shoe-color.vue'
import TheBrand from './shoe-brand.vue'
import TheSize from './shoe-size.vue'
import ShoeMaterial from './shoe-material.vue'
import ShoeType from './shoe-type.vue'
export default {
  components:{
    'the-gender':TheGender,
    'the-color':TheColor,
    'the-brand':TheBrand,
    'the-size':TheSize,
    'shoe-material':ShoeMaterial,
    'shoe-type':ShoeType
  }
}
</script>
<style scoped>
@media only screen and (min-width:900px){
  ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
#container{
  margin-top:12%;
  left: 0;
  width:400px;
  height:80vh;
  padding-left:0.075%;
  overflow-y:scroll;
  overflow-x:hidden;
  margin-right:3px;

}
/* Designing for scroll-bar */
        #container::-webkit-scrollbar {
            width: 12px;
            
        }
      
        /* Track */
        #container::-webkit-scrollbar-track {
            background: gainsboro;
            border-radius: 5px;
              margin-top: 50px;
              
        }
      
        /* Handle */
        #container::-webkit-scrollbar-thumb {
            
            background: #555;
            border-radius: 5px;
            height:60%;
        }
      
        /* Handle on hover */
        #container::-webkit-scrollbar-thumb:hover {
            background: black;
        }

.divider{
  width:84%;
  height:1px;
  background-color:rgb(195, 195, 195);
  border-radius: 30px;
  margin-left:6%;
  margin: top 1%;
  margin-bottom:1%;
}
.v-checkbox{
  margin-top:2px;
  margin-bottom:2px;
  padding-top:0;
  padding-bottom:0;
}
}
@media only screen and (max-width:480px){
  ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
#container{
  margin-top:12%;
  left: 0;
  width:40vw;
  height:80vh;
  overflow-y:scroll;
  overflow-x:hidden;
  margin-right:3px;
}
      .divider{
  width:40vw;
  height:1px;
  background-color:rgb(195, 195, 195);
  border-radius: 30px;
  margin: top 1%;
  margin-bottom:1%;
}
.v-checkbox{
  margin-top:2px;
  margin-bottom:2px;
  padding-top:0;
  padding-bottom:0;
}
}



</style>