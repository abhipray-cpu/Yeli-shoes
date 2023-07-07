<template>
    <v-app>
     <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="1000"
      height="1000"
    >
      <template v-slot:activator="{ on, attrs }">
       <div id="Details" v-bind="attrs" v-on="on" style>
          <h4>View Product Details</h4>
       </div>
      </template>

      <v-card>
        <div id="cardRow1">
          <div id="cardCol1_1">
             <img :src="image" :alt="title">          
          </div>
          <div id="cardCol1_2">
            <h2 class="descActive">{{title}}</h2>
            <h2 class="descActive">₹{{price}}</h2>
            <h2 class="descPassive">incl. of taxes</h2>
                          
          </div>
        </div>
        <div id="cardRow2">
          <h2 class="activeStrong">PUNISHING SPEED.</h2>
                <h2 class="activeStrong">Russell Westbrook is fast. In 48 minutes of play, he's only in the air a few seconds at most, with the bulk of his time spent leaving opponents in the dust. The Jordan Why Not? Zer0.5 optimises Russ' superpower of speed with data-informed traction and a full-foot fit system that keeps him contained and in control. It has the rugged utility look of a trail-running shoe combined with the on-purpose clash of colours and materials at the core of Why Not?</h2>
        <h2 class="activeStrong">Benefits</h2>
        <ul class="descriptionList">
          <li>Floating midfoot bands, an external heel counter, webbing and laces work together to fully secure your foot.</li>
<li>The durable rubber outsole has a rugged, data-informed traction pattern inspired by trail running shoes.</li>
<li>Outsole is split into sections by using less rubber underfoot, reducing the weight.</li>
<li>Translucent materials in the upper are lightweight, breathable and supportive.</li>
<li>Large external component under the arch helps keep the shoe stable.</li>
<li>Internal collar provides support and comfort for the Achilles tendon.</li>
        </ul>
        <h2 class="activeStrong">Product Details</h2>
        <ul class="descriptionList">
          <li>Jordan and RW logos on the tongues</li>
<li>Reinforced toe</li>
<li>Colour Shown: Amethyst Tint/Black/Chlorine Blue/Bright Crimson</li>
<li>Style: DC3643-500</li>
<li>Country/Region of Origin: Vietnam</li>
        </ul>
        </div>
      </v-card>
    </v-dialog>
  </div>
   </v-app>
</template>

<script>

export default {
    props:['image','title','price'],
    data()
    {
        return{
            dialog:false
        };
    }
}
</script>

<style scoped>
@media only screen and (min-width:900px){
  #Details{
    margin-top:20px;
    margin-left:5.5%;
    background:transparent;
    padding-left:0px;
  
  }
  #Details h4{
    text-decoration: underline;
    font-weight:400;
    font-style:normal;
    font-size:18px;
    cursor:pointer;
    padding-left:0px;
    
  }
  .divider{
    width:90%;
    background-color:rgb(218, 214, 214);
    height:1px;
    margin-top:10%;
    margin-bottom:4%;
    margin-left:4%;
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
    margin-left:1.5%;
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
      min-width: fit-content;
    }
  #cardRow1{
    padding-left:1.5%;
    padding-top:1.5%;
    display:grid;
    grid-template-columns: 200px 170px;
  
  }
  #cardCol1_1 img{
    width:180px;
   height:170px;
  }
  #cardRow2{
    padding-left:4.5%;
    padding-right:4.5%;
    padding-bottom:1.5%;
  }
}
@media only screen and (max-width:480px){
  .v-card{
    width:98vw;
    margin-left:1vw;
    margin-right:1vw;
    overflow-x:hidden;
  }
  #Details{
    margin-top:10px;
    margin-left:4.5%;
    background:transparent;
    padding-left:0px;
  
  }
  #Details h4{
    text-decoration: underline;
    font-weight:400;
    font-style:normal;
    font-size:18px;
    cursor:pointer;
    padding-left:0px;
    
  }
  .divider{
    width:90%;
    background-color:rgb(218, 214, 214);
    height:1px;
    margin-top:10%;
    margin-bottom:4%;
    margin-left:4%;
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
    margin-left:1.5%;
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
      min-width: fit-content;
    }
  #cardRow1{
    padding-left:1.5%;
    padding-top:1.5%;
    display:grid;
    grid-template-columns: 170px 300px;
  
  }
  #cardCol1_1{
    width:170px;
    height:120px; margin-left:-10px;
  }
  #cardCol1_1 img{
    width:170px;
   height:120px;
  }
  #cardRow2{
    padding-left:4.5%;
    padding-right:4.5%;
    padding-bottom:1.5%;
  }
  #cardCol1_2{
   margin-left:-70px;
  }
}
</style>