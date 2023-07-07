import class from '@vue/cli-service';
<template>
     <div id="item"  :class="hoverState==='hover'?'containerHover':'containerNormal'">
  <v-carousel 
  :interval="1000"
  :hide-delimiter-background="hideBg"
  :cycle="cycle"
  :delimiter-icon="minus"
  :show-arrows="false"
  class="carousel"
  height="auto"
  :class="hoverState==='hover'?'carouselHover':'carouselNormal'"
   @mouseover.native="mouseOver"
    @mouseout.native="mouseLeave"
    
  >
  <v-carousel-item
    v-for="img in images"
    :key="img">
      <img :src="img" :alt="title" :class="hoverState==='hover'?'carouselHover':'carouselNormal'" >
    </v-carousel-item>
  </v-carousel>
  <div id="details">
     <div >
        <v-icon 
        v-ripple="false"
        @click="like" class="action"
        :style="{color:likeColor}"
        >
        
        {{ likeState }}
      </v-icon>
     </div>
      <div id="info" style="margin-left:15%;">
         <h2 @click="productRedirect('id of the product')">{{title}}<br>  <strong>₹{{data.price}}</strong>  </h2>
      <p>{{description}}</p>
      </div>
     <div style="margin-left:97%;">
       <v-icon 
       v-ripple="false"
       @click="saveEventListener" style="right:0" :style="{color:cartColor}">
       {{ saveState }}
     </v-icon>
     </div>
  </div>
  </div>
  
</template>
<script>
import { mdiMinus } from '@mdi/js';
import { mdiCardsHeartOutline } from '@mdi/js';
import { mdiCardsHeart } from '@mdi/js';

import { mdiCartOutline } from '@mdi/js';
import { mdiCart } from '@mdi/js';
export default {
    computed:{
    hoverState(){
        return this.state;
    },
    likeState(){
     if(this.liked === true) return this.likeFinal;
     else return this.likeIitial;
    },
    saveState(){
      if(this.saved === true) return this.saveFinal;
      else return this.saveInitial;
    },
    likeColor(){
      return this.like_Colors[this.liked];
    },
    cartColor(){
      return this.cart_Colors[this.saved];
    },
    description(){
      return this.data.description.slice(0,50)+'...';
    },
    images(){
      return this.data.image;
    },
    title(){
      return this.data.title.slice(0,25)
    }
  },
  props:['data'],
    data(){
    return{
      id:'',
      liked:false,
      saved:false,
      state:'normal',
      heightNormal:'300px',
      widthNormal:'350px',
      heightHover:'350px',
      widthHover:'400px',
      hideBg:true,
      minus: mdiMinus,
      cycle:false,
     likeIitial:mdiCardsHeartOutline,
     likeFinal:mdiCardsHeart,
     saveInitial:mdiCartOutline,
     saveFinal:mdiCart,
     like_Colors:{false:"rgb(89, 89, 89)",true:"rgb(255, 51, 119)"},
     cart_Colors:{false:"rgb(89, 89, 89)",true:"rgb(255, 71, 26)"}
}
    
   
  },
  methods:{
   mouseOver(){
     this.hideBg=false;
      this.cycle=true
      this.state='hover';
   },
   mouseLeave(){
this.hideBg=true; 
      this.cycle=false;
      this.state='normal';
   },
   like(){
     let auth=localStorage.getItem('auth')
     console.log(auth)
     if(auth=='false' && auth)
     { 
       this.$store.commit('user/setlogDialog',{value:true})
     }
     else if(auth == 'true' && auth)
     {
       this.liked=!this.liked;
     this.$store.dispatch('user/Whishlist',this.id);
     setTimeout(()=>{
       this.liked=false;
     },20000)
     }
     else{
      this.$store.commit('user/setlogDialog',{value:true})
     }
   },
   saveEventListener(){
      let auth=localStorage.getItem('auth')
     if(auth=='false' && auth)
     {
       this.$store.commit('user/setlogDialog',{value:true})
     }
    else if(auth=='true' && auth)
    {
       this.saved=!this.saved;
     this.$store.dispatch('user/addCart',this.id);
     setTimeout(()=>{
       this.saved=false;
     },20000)
    }
    else{
      this.$store.commit('user/setlogDialog',{value:true})
    }
   },
   productRedirect(redirectTo){
     console.log(`Need to redirect to prduct with id ${redirectTo}`);
     this.$router.push({
       //passing in the path with param
       //so that params are retained even after reloading
       path:`/product/${this.data._id.$oid}/${this.data.brand}/${this.data.type}`
     })
   }
 },
 mounted(){
    this.images[0]=this.data.image[0];
    this.images[1]=this.data.image[1];
    this.images[2]=this.data.image[2];
    this.images[3]=this.data.image[3];
    this.images[4]=this.data.image[4];
    this.id=this.data._id.$oid;
    
    
 }
}
</script>
<style scoped>
@media only screen and (min-width:900px){
  .carousel{

    margin-bottom:10px;
  }
  .carouselNormal{
    width:350px;
    height:300px;
  }
  .carouselHover{
    width:400px;
    height:350px;
  }
  .containerNormal{
    width:350px;
  }
  .containerHover{
    width:400px;
  }
   #item{
     margin-right:50px;
     margin-top:10px;
   }
   #details{
     display:grid;
     grid-template-columns: 10% 70% 10%;
   }
   #info{
     margin-left:2%;
     margin-right:2%;
   }
   #info h2{
     text-align:center;
     font-weight:500;
     cursor:pointer;
   }
   #info p{
     text-align:center;
     font-style:italic;
   }
}
@media only screen and (max-width:480px){
  .v-carousel{
    width:200px !important;
    overflow: hidden;
  }
  .carousel{
    margin-bottom:10px;
    widht:200px;
  }
  .carouselNormal{
    width:200px;
    height:150px;
  }
  .carouselHover{
    width:200px;
    height:150px;
  }
  .containerNormal{
    width:200px;
  }
  .containerHover{
    width:200px;
  }
   #item{
     margin-right:10px;
     margin-top:10px;
     width:200px;
     overflow-x:hidden ;
   }
   #details{
     display:grid;
     grid-template-columns: 10% 70% 10%;
   }
   #info{
     margin-left:2%;
     margin-right:2%;
   }
   #info h2{
     text-align:center;
     font-weight:500;
     cursor:pointer;
     font-size:16px;
   }
   #info p{
     display: none;
   }
}

</style>