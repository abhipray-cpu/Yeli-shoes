<template>
 <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
       Size
      </v-expansion-panel-header>
      <v-expansion-panel-content>
            <div class="size">
               <div class="sizePassive">
                 <h2>6UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>6.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>7UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>7.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>8UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>8.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>9UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>9.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>10UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>10.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>11UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>11.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>12UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>12.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>13UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>13.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>14UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>14.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>15UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>15.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>16UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>16.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>17UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>17.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>18UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>18.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>19UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>19.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>20UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>20.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>21UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>21.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>22UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>22.5UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>23UK</h2>
               </div>
               <div class="sizePassive">
                 <h2>23.5UK</h2>
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
  .size{
    display:grid;
    grid-template-columns: 120px 120px 120px;
    padding-left:5px;
    padding-right:5px;
  }
  .sizePassive{
    width:90px;
    height:60px;
    border:1px solid black;
    border-radius:4px;
    margin-bottom:5px;
    margin-top:5px;
    cursor:pointer;
  }
  .sizePassive h2{
    font-weight:500;
   font-size:16px;
   text-align: center;
   margin-top:16px; 
  }
  
  .sizeActive,
  .sizePassive:hover{
    background-color:rgb(33, 33, 33);
    width:90px;
    height:60px;
    border:1px solid black;
    border-radius:4px;
    margin-bottom:5px;
    margin-top:5px;
    cursor:pointer;
  }
  .sizeActive h2,
  .sizePassive:hover h2{
    font-weight:500;
   font-size:16px;
   text-align: center;
   margin-top:16px; 
   color:white;
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
  .size{
    display:grid;
    grid-template-columns:repeat(3,13vw);
    padding-left:1.5vw;
    padding-right:1.5vw;
    margin-left:-20px
  }
  .sizePassive{
    width:11.50vw;
    height:50px;
    border:1px solid black;
    border-radius:4px;
    margin-bottom:5px;
    margin-top:5px;
    cursor:pointer;
  }
  .sizePassive h2{
   font-weight:500;
   text-align: start;
  line-height: 50px; 
  font-size:13px;
  margin-left:-0.5px;
  }
  
  .sizeActive,
  .sizePassive:hover{
    background-color:rgb(33, 33, 33);
  }
  .sizeActive h2,
  .sizePassive:hover h2{
   color:white;
  }
}
</style>