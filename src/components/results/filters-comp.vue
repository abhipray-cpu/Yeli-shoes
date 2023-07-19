<template>
  <div id="container">
   <v-app>
   <div id="button" v-if="btnState==0">
    <v-icon 
       v-ripple="false"
       @click="Switch" id="buttonActive" x-large class="desktop" style="margin-left:1.5vw;">
       {{btnActive}}
     </v-icon>
     <v-icon 
       v-ripple="false"
       @click="Switch" id="buttonActive" large class="mobile" style="margin-left:3vw;">
       {{btnActive}}
     </v-icon>
   </div>
   <div id="filters" v-else :class="btnState == 1?'active':'passive'">
    <v-icon 
    v-ripple="false"
    @click="Switch" id="buttonPassive" x-large class="desktop"  style="margin-left:20vw;">
    {{btnPassive}}
  </v-icon>
  <v-icon 
  v-ripple="false"
  @click="Switch" id="buttonPassive" large class="mobile" style="margin-left:30vw;">
  {{btnPassive}}
</v-icon>
<sort-comp></sort-comp>
<div class="divider"></div>
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
   </div>
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
import SortComp from './sort-shoe.vue'
import { mdiMenu } from '@mdi/js';
import { mdiMenuOpen } from '@mdi/js';
export default {
  components:{
    'the-gender':TheGender,
    'the-color':TheColor,
    'the-brand':TheBrand,
    'the-size':TheSize,
    'shoe-material':ShoeMaterial,
    'shoe-type':ShoeType,
    'sort-comp':SortComp
  },
  data(){
    return{
      state:0,
      btnActive:mdiMenu,
      btnPassive:mdiMenuOpen
    }
  },
  computed:{
    State(){
      return this.state;
    },
    btnState(){
      return this.state;
    }
  },
  methods:{
    Switch(){
      if(this.state==0){
      this.state=1;
      }
      else if(this.state==1){
      this.state=0;
      }
    }
  }
}
</script>
<style scoped>
@media only screen and (min-width:900px){
  ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
  .desktop{
    display: block;
  }
  .mobile{
    display: none;
  }
  .active{
    animation:active-animate;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  .passive{
    animation:passive-animate;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes active-animate{
    from{
      width:0vw;
      display: none;
    }
    to{
      widht:25vw;
      display: block;
    }
  }
  @keyframes passive-animate{
    from{
      width:25vw;
      display: block;
    }
    to{
      width:0vw;
      display: none;
    }
  }
  #filters{
    margin-top:10px;
  }
#container{
  margin-top:12%;
  left: 0;
  height:80vh;
  padding-left:0.075%;
  overflow-y:scroll;
  overflow-x:hidden !important;
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
#btnActive{
  margin-left:2vw;
}
#btnPassive{

}
}
@media only screen and (max-width:480px){
  ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
  .desktop{
    display: none;
  }
  .mobile{
    display: block;
  }
  .active{
    animation:active-animate;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  .passive{
    animation:passive-animate;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes active-animate{
    from{
      width:0vw;
      display: none;
    }
    to{
      widht:40vw;
      display: block;
    }
  }
  @keyframes passive-animate{
    from{
      width:40vw;
      display: block;
    }
    to{
      width:0vw;
      display: none;
    }
  }
  #filters{
    margin-top:5px;
  }
#container{
  margin-top:12%;
  left: 0;
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