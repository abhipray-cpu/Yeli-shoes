<template> 
    <div id="col1_2">
      
      <the-info :title="title" :price="price"></the-info>
      <div id="size">
        <h3>Select size <span id="guide" @click="sizeRedirect">Size Guide</span></h3>
       <the-size></the-size>
        <div id="button1" @click="cartRedirect">
          <h3>Add To Bag</h3>
           <v-overlay :value="overlay1">
      <v-progress-circular
        indeterminate
        size="64"
        color="purple"
      ></v-progress-circular>
    </v-overlay>
        </div>
        <div id="button2" @click="likeRedirect">
          <h3>Favourite <span> <v-icon>{{ heart }}</v-icon> </span></h3>
           <v-overlay :value="overlay2">
      <v-progress-circular
        indeterminate
        size="64"
        color="purple"
      ></v-progress-circular>
    </v-overlay>
        </div>
        <div id="description">
          <h4>{{description}}</h4>
        </div>
      
       <the-details 
       :title="title" 
       :price="price"
       :image="image"></the-details>
        <div class="divider">
        </div>
        <div class="delivery">
          <v-expansion-panels>
            <v-expansion-panel>
            <v-expansion-panel-header>Free Delivery and Returns</v-expansion-panel-header>
            <v-expansion-panel-content>
              <h4 class="expansion1_h4">Your order of ₹14,000 or more gets free standard delivery.</h4>
              <ul>
                <li>Standard Delivery for Postal Codes: 100000-399999, 500000-699999 and 800000-899999 : 4 – 16 business days</li>
                <li>Standard Delivery for Postal Codes: 400000-499999 : 3 – 15 business days</li>
                <li>Standard Delivery for Postal Codes: 700000-799999 and 900000-999999: 5 – 21 business days</li>
              </ul>
              <h4>
                Orders are processed and delivered Monday-Friday (excluding public holidays).
              </h4>
              <h4 class="expansion1_h4">Nike Members enjoy <span class="underline"><strong>free returns</strong></span>. <span class="underline"><strong>Exclusions apply</strong></span>.</h4>
            </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
          <div class="divider"></div>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Reviews(2)
                <span>
                  
                </span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>

              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
         
        </div>
      </div>
    </div>
</template>

<script>
import { mdiHeartOutline } from '@mdi/js';
import TheInfo from './info-comp.vue'
import TheDetails from './details-comp.vue'
import TheSize from './size-comp.vue'
export default {
  components:{
    'the-info':TheInfo,
    'the-details':TheDetails,
    'the-size':TheSize
  },
  props:['id','title','price','description','image'],
    data(){
    return{
      heart:mdiHeartOutline,
      dialog:false,
      overlay1_val:false,
      overlay2_val:false
    }
  },
  computed:{
    overlay1(){
      return this.overlay1_val;
    },
    overlay2(){
      return this.overlay2_val;
    }
  },
  methods:{
    sizeRedirect(){
     //this will be opened in a new page
     window.open("/size_chart", '_blank');
    },
   async cartRedirect(){
     let auth=this.$store.getters['user/getauth'];
     if(auth==false)
     {
       this.$store.commit('user/setlogDialog',{value:true})
     }
    else
    {
       this.saved=!this.saved;
      this.overlay1_val=true;
     await this.$store.dispatch('user/addCart',this.id);
     this.overlay1_val=false;
    }
     
    },
    async likeRedirect(){
      let auth=this.$store.getters['user/getauth'];
     if(auth==false)
     {
       this.$store.commit('user/setlogDialog',{value:true})
     }
     else
     {
       this.liked=!this.liked;
       this.overlay2_val=true;
     await this.$store.dispatch('user/Whishlist',this.id);
   this.overlay2_val=false;
     }
      
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width:900px){
  #col1_2{
    padding-left:2.5%;
    padding-top:1.5%;
    padding-right: 2.5%;
  }
  #size{
    margin-top:10%;
  }
  #size h3{
    font-weight: 300;
    font-style:normal;
  }
  #guide{
    margin-left:45%;
    color:rgb(100, 98, 98);
    cursor:pointer;
  }
  
  #button1{
    background-color:black;
    border-radius: 30px;
    height:60px;
    width:85%;
    margin-top:20px;
    margin-left:2.5%;
    text-align:center;
    padding-top:1px;
  }
  #button1 h3{
    color:white;
    margin-top:20px;
    font-weight:400;
    font-style:normal;
  }
  #button1:hover{
    cursor:pointer;
    background-color:rgba(0,0,0,0.6)
  }
  #button2{
    background-color:rgb(250, 248, 248);
    border-radius: 30px;
    border:1px solid rgb(151, 150, 150);
    height:60px;
    width:85%;
    margin-top:20px;
    margin-left:2.5%;
    text-align:center;
    padding-top:1px;
  }
  #button2 h3{
    color:black;
    margin-top:20px;
    font-weight:400;
    font-style:normal;
  }
  #button2:hover{
    cursor:pointer;
    border: 1px solid black;
  }
  #description{
    margin-top:25px;
    padding-left:5.5%;
    padding-right:5.5%;
  }
  #description h4{
  
    font-weight:300;
    font-style:normal;
    font-size:18px;
     line-height: 1.85;
  }
  #Details{
    margin-top:20px;
    margin-left:5.5%;
  
  }
  #Details h4{
    text-decoration: underline;
    font-weight:400;
    font-style:normal;
    font-size:18px;
    cursor:pointer;
  }
  .divider{
    width:90vw;
    background-color:rgb(218, 214, 214);
    height:1px;
    margin-top:10%;
    margin-bottom:4%;
    margin-left:5vw;
  }
  /*simply removing the raised box effect from the expansion pannel*/
  .v-expansion-panel::before {
     box-shadow: none !important;
  }
  .v-expansion-panel-header{
    font-weight:400;
    font-size:24px;
  }
  .expansion1_h4{
    margin-top:20px;
    margin-bottom:40px;
    font-weight:500;
    font-style:normal;
    line-height: 1.46;
    font-size:20px;
  }
  .underline{
    text-decoration:underline;
    cursor:pointer;
  }
  ul li{
    font-weight:500;
    line-height: 1.5;
    font-style: normal;
    margin-top:10px;
    font-size:18px;
  }
  
  .descActive{
    margin-top:10px;
    color: black;
    font-weight:400;
    font-style:normal;
    font-size:16px;
  }
  .activeStrong{
    margin-top:20px;
    margin-bottom:10px;
    color: black;
    font-weight:400;
    font-style:normal;
    font-size:16px;
    line-height: 1.95;
  }
  .descPassive{
    margin-top:10px;
    color: rgb(121, 120, 120);
    font-weight:400;
    font-style:normal;
    font-size:16px;
  }
  ::v-deep .v-application--wrap {
      min-height: fit-content;
    }
  
}
@media only screen and (max-width:480px){
  #col1_2{
    padding-left:2.5%;
    padding-top:1.5%;
    padding-right: 2.5%;
  }
  #size{
    margin-top:10%;
  }
  #size h3{
    font-weight: 300;
    font-style:normal;
  }
  #guide{
    margin-left:45%;
    color:rgb(100, 98, 98);
    cursor:pointer;
  }
  
  #button1{
    background-color:black;
    border-radius: 30px;
    height:60px;
    width:86vw;
    margin-top:20px;
    margin-left:5vw;
    text-align:center;
    padding-top:1px;
  }
  #button1 h3{
    color:white;
    margin-top:20px;
    font-weight:400;
    font-style:normal;
  }
  #button1:hover{
    cursor:pointer;
    background-color:rgba(0,0,0,0.6)
  }
  #button2{
    background-color:rgb(250, 248, 248);
    border-radius: 30px;
    border:1px solid rgb(151, 150, 150);
    height:60px;
    width:86vw;
    margin-top:20px;
    margin-left:5vw;
    text-align:center;
    padding-top:1px;
  }
  #button2 h3{
    color:black;
    margin-top:20px;
    font-weight:400;
    font-style:normal;
  }
  #button2:hover{
    cursor:pointer;
    border: 1px solid black;
  }
  #description{
    margin-top:25px;
    padding-left:5.5%;
    padding-right:5.5%;
  }
  #description h4{
  
    font-weight:300;
    font-style:normal;
    font-size:18px;
     line-height: 1.85;
  }
  #Details{
    margin-top:20px;
    margin-left:5.5%;
  
  }
  #Details h4{
    text-decoration: underline;
    font-weight:400;
    font-style:normal;
    font-size:18px;
    cursor:pointer;
  }
  .divider{
    width:90%;
    background-color:rgb(218, 214, 214);
    height:1px;
    margin-top:10%;
    margin-bottom:4%;
    margin-left:5vw;
  }
  /*simply removing the raised box effect from the expansion pannel*/
  .v-expansion-panel::before {
     box-shadow: none !important;
  }
  .v-expansion-panel-header{
    font-weight:400;
    font-size:24px;
  }
  .expansion1_h4{
    margin-top:20px;
    margin-bottom:40px;
    font-weight:500;
    font-style:normal;
    line-height: 1.46;
    font-size:20px;
  }
  .underline{
    text-decoration:underline;
    cursor:pointer;
  }
  ul li{
    font-weight:500;
    line-height: 1.5;
    font-style: normal;
    margin-top:10px;
    font-size:18px;
  }
  
  .descActive{
    margin-top:10px;
    color: black;
    font-weight:400;
    font-style:normal;
    font-size:16px;
  }
  .activeStrong{
    margin-top:20px;
    margin-bottom:10px;
    color: black;
    font-weight:400;
    font-style:normal;
    font-size:16px;
    line-height: 1.95;
  }
  .descPassive{
    margin-top:10px;
    color: rgb(121, 120, 120);
    font-weight:400;
    font-style:normal;
    font-size:16px;
  }
  ::v-deep .v-application--wrap {
      min-height: fit-content;
    }
  
}

</style>