<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        Color
      </v-expansion-panel-header>
      <v-expansion-panel-content>
         <div id="colors">
           <div class="colorVal">
             <div class="color" style="background-color:rgba(151, 2, 154, 1)"></div>
             <h4>Purple</h4>
           </div>
           <div class="colorVal">
             <div class="color" style="background-color:rgba(0,0,0,0.9)"></div>
             <h4>Black</h4>
           </div>
           <div class="colorVal">
             <div class="color" style="background-color:rgba(220, 5, 5, 1)"></div>
             <h4>Red</h4>
           </div>
           <div class="colorVal">
             <div class="color" style="background-color:rgba(218, 95, 7, 1)"></div>
             <h4>Orange</h4>
           </div>
           <div class="colorVal">
             <div class="color" style="background-color:rgba(4, 151, 214, 1)"></div>
             <h4>Blue</h4>
           </div>
           <div class="colorVal">
             <div class="color" style="background-color:rgba(241, 241, 241, 1)"></div>
             <h4>White</h4>
           </div>
           <div class="colorVal">
             <div class="color" style="background-color:rgba(141, 58, 32, 1)"></div>
             <h4>Brown</h4>
           </div>
           <div class="colorVal">
             <div class="color" style="background-color:rgba(31, 146, 2, 1)"></div>
             <h4>Green</h4>
           </div>
           <div class="colorVal">
             <div class="color" style="background-color:rgba(227, 218, 0, 1)"></div>
             <h4>Yellow</h4>
           </div>
           <div class="colorVal">
             <div class="color" id="multiColor"></div>
             <h4>multi</h4>
           </div>
           <div class="colorVal">
             <div class="color" style="background-color:rgba(175, 173, 173, 1)"></div>
             <h4>Grey</h4>
           </div>
           <div class="colorVal">
             <div class="color" style="background-color:rgba(226, 138, 196, 1)"></div>
             <h4>Pink</h4>
           </div>
           </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>


<script>
export default {
  
}
</script>

<style scoped>
@media only screen and (min-width:900px){
  .v-expansion-panels{
    margin-left:0px;
    padding-left:0.075%;
  }
  .v-expansion-panel::before {
     box-shadow: none !important;
  }
  .v-expansion-panel-header{
    font-weight:500;
    font-size:20px;
    font-style:normal;
  }
  #colors{
    display:grid;
    grid-template-columns: repeat(3,auto);
    padding-left:20px;
    padding-right:20px;
  }
  .color{
    width:35px;
    height:35px;
    border-radius:50%;
    margin-top:10px;
    margin-bottom:2px;
    cursor:pointer;
  }
  .color:hover{
    border:1px solid black;
  }
  #multiColor{
    background: linear-gradient(90.41deg, #FE0707 0.26%, rgba(252, 154, 7, 0.967926) 12.51%, rgba(232, 249, 37, 0.93661) 24.47%, rgba(67, 233, 93, 0.906112) 36.12%, rgba(110, 156, 175, 0.863585) 52.36%, rgba(139, 11, 216, 0.81544) 70.74%, rgba(235, 8, 226, 0.74) 99.55%);
  
  }
  .colorVal h4{
    font-size:16px;
    font-weight:400;
    font-style:normal;
  }
}
@media only screen and (max-width:480px){
  .v-expansion-panels{
    margin-left:0px;
    padding-left:0.075%;
  }
  .v-expansion-panel::before {
     box-shadow: none !important;
  }
  .v-expansion-panel-header{
    font-weight:500;
    font-size:20px;
    font-style:normal;
  }
  #colors{
    margin-left:-5px;
    display:grid;
    grid-template-columns: repeat(3,13vw);
    padding-left:0.5vw;
    padding-right:0.5vw;
  }
.colorVal{
  width:12vw;
  height:40px;
}
  .color{
    width:30px;
    height:30px;
    border-radius:50%;
    margin-top:10px;
    margin-bottom:2px;
    cursor:pointer;
  }
  .color:hover{
    border:1px solid black;
  }
  #multiColor{
    background: linear-gradient(90.41deg, #FE0707 0.26%, rgba(252, 154, 7, 0.967926) 12.51%, rgba(232, 249, 37, 0.93661) 24.47%, rgba(67, 233, 93, 0.906112) 36.12%, rgba(110, 156, 175, 0.863585) 52.36%, rgba(139, 11, 216, 0.81544) 70.74%, rgba(235, 8, 226, 0.74) 99.55%);
  
  }
  .colorVal h4{
    display: none;
  }
}
</style>