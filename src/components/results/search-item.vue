<template>
    <div>
      <div id="desktop">
        <div id="item"  :class="hoverState==='hover'?'containerHover':'containerNormal'">
          <v-carousel 
          :interval="1000"
          :hide-delimiter-background="hideBg"
          :cycle="cycle"
          :delimiter-icon="minus"
          :show-arrows="false"
          class="carousel"
          :class="hoverState==='hover'?'carouselHover':'carouselNormal'"
          :height="hoverState==='hover'?'400px':'350px'"
           @mouseover.native="mouseOver"
            @mouseout.native="mouseLeave"
          >
          <v-carousel-item
            v-for="img in item.image"
            :key="img">
              <img :src="img" :alt="item.name" :class="hoverState==='hover'?'carouselHover':'carouselNormal'" >
            </v-carousel-item>
          </v-carousel>
          <div id="details">
             <div >
                <v-icon @click="like" class="action" :style="{color:likeColor}">
                {{ likeState }}
              </v-icon>
             </div>
              <div id="info" style="margin-left:15%;">
                 <h2 @click="productRedirect('id of product')">{{title}} <br>  <strong>₹{{item.price}}</strong>  </h2>
              <p>{{description}}</p>
              </div>
             <div style="margin-left:97%;">
               <v-icon @click="saveEventListener" style="right:0" :style="{color:cartColor}">
               {{ saveState }}
             </v-icon>
             </div>
          </div>
          </div>
      </div>
    <div id="mobile">
      <img :src="item.image[0]" :alt="title">
      <div id="actions">
         <div >
           <v-icon @click="like" class="action" :style="{color:likeColor}">
           {{ likeState }}
         </v-icon>
        </div>
         <div>
          <v-icon @click="saveEventListener"  style="right:0" :style="{color:cartColor}">
          {{ saveState }}
        </v-icon>
        </div>
      </div>
      <div id="details">
         <div id="info">
            <h2 @click="productRedirect('id of product')">{{title}} <br>  <strong>₹{{item.price}}</strong>  </h2>
         <p>{{description}}</p>
         </div>
       
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
    title(){
      return this.item.title.slice(0,35)
    },
    description(){
      return this.item.description.slice(0,35)+'...';
    },
    likeColor(){
      return this.like_Colors[this.liked];
    },
    cartColor(){
      return this.cart_Colors[this.saved];
    },
  },
    data(){
    return{
      liked:false,
      saved:false,
      state:'normal',
      hideBg:true,
      minus: mdiMinus,
      cycle:false,
      images:['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/391bdf6c-e50e-4211-9670-c2548146c7dd/air-jordan-6-retro-shoe-tVbL3r.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/838aeab1-506b-41df-a0e8-888b086dcce5/air-jordan-6-retro-shoe-tVbL3r.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5df2dd0a-ca69-463a-b385-ba703a67e357/air-jordan-6-retro-shoe-tVbL3r.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4aea8aff-e014-43d6-bfa3-6b1663a7df09/air-jordan-6-retro-shoe-tVbL3r.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/eecc5b32-a3de-4d0a-bd6d-6c7dff8f4772/air-jordan-6-retro-shoe-tVbL3r.png'
      ],
     likeIitial:mdiCardsHeartOutline,
     likeFinal:mdiCardsHeart,
     saveInitial:mdiCartOutline,
     saveFinal:mdiCart,
     like_Colors:{false:"rgb(89, 89, 89)",true:"rgb(255, 51, 119)"},
     cart_Colors:{false:"rgb(89, 89, 89)",true:"rgb(255, 71, 26)"}
    }
   
  },
  props:['item'],
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
     this.$store.dispatch('user/Whishlist',this.item._id['$oid']);
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
     this.$store.dispatch('user/addCart',this.item._id['$oid']);
     setTimeout(()=>{
       this.saved=false;
     },20000)
    }
    else{
      this.$store.commit('user/setlogDialog',{value:true})
    }
   },
   productRedirect(prodId){
     console.log(`Need to redirect to the product with id ${prodId}`);
    this.$router.push({path:`/product/${this.item._id.$oid}/${this.item.brand}/${this.item.type}`});
   },

 }
}
</script>
<style scoped>
@media only screen and (min-width:900px){
  #item{
    margin-top:20px;
    margin-bottom:20px;
  }
  .v-carousel{
    z-index:0;
  }
  .carousel{
      margin-bottom:10px;
  }
  .carouselNormal{
    width:300px;
    height:350px;
    background: transparent !important;
  }
  .carouselHover{
    width:350px;
    height:400px;
    background: transparent !important;
  }
  .containerNormal{
    width:300px;
  }
  .containerHover{
    width:350px;
  }
   #item{
     margin-right:50px;
     margin-top: 20px;
     margin-bottom:20px;
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
     cursor: pointer;
   }
   #info p{
     text-align:center;
     font-style:italic;
   }
   #mobile{
    display: none;
   }
}
@media only screen and (max-width:480px){
  #desktop{
    display:none
  }
#mobile{
  width:27vw;
  margin-left:0.5vw;
  margin-right:0.5vw;
  margin-top:5px;
  margin-bottom:5px;
}
img{
  width:27vw;
  height: 100px;
}
#details{
  width:27vw;
}
#details p{
display: none;
}
#details h2{
  font-size:18px;
}
#actions{
  display: grid;
  grid-template-columns: repeat(2,10vw);
  width:28vw;
  padding-left:4vw;
  padding-right:4vw;
  margin-bottom:10px;
}
}
</style>