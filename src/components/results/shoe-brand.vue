<template>
      <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        Brand
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div id="brands">
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/adidas.png')" alt="Adidas">
            <h4>Adidas</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/nike.png')" alt="Nike">
            <h4>Nike</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/puma.jpg')" alt="Puma">
            <h4>Puma</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/reebok.jpg')" alt="Reebok">
            <h4>Reebok</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/airJordans.png')" alt="AirJordans">
            <h4>Jordans</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/burberry.png')" alt="Burberry">
            <h4>Burberry</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/crocs.png')" alt="Crocs">
            <h4>Crocs</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/gucci.png')" alt="Gucci">
            <h4>Gucci</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/hm.png')" alt="H&M">
            <h4>H&M</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/miu.png')" alt="Miu_Miu">
            <h4>Miu Miu</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/newBalance.png')" alt="NewBalance">
            <h4>New Balance</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/redChief.png')" alt="Red Chief">
            <h4>Red Chief</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/action.png')" alt="Action">
            <h4>Action</h4>
          </div>
          
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/woodland.png')" alt="Woodland">
            <h4>Woodland</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/paragon.png')" alt="Paragon">
            <h4>Paragon</h4>
          </div>
          <div class="brand">
            <img :src="require('/src/assets/brandLogo/underArmour.png')" alt="UnderArmour">
            <h4>UnderArmour</h4>
          </div>
          
          <div class="brand"></div>
          <div class="brand"></div>
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
  #brands{
    display:grid;
    grid-template-columns: repeat(3,115px);
    padding-left:5px;
    padding-right:15px;
  }
  .brand{
    width:100px;
    height:100px;
    margin-top:25px;
    margin-bottom:25px;
    cursor:pointer;
  }
  .brand img{
    width:90px;
    height:90px;
    margin-bottom:5px;
  }
  .brand img:hover{
    border:1px solid rgb(57, 57, 57);
    box-shadow:2px 2px 2px black;
  }
  .brand h4{
    font-weight:500;
    font-size:16px;
    text-align:center;
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
  #brands{
    display:grid;
    grid-template-columns: repeat(2,20vw);
    margin-left:-7px;
  }
  .brand{
    width:17vw;
    height:50px;
    margin-top:4px;
    margin-bottom:4px;
    cursor:pointer;
    margin-left:1.5vw;
    margin-right:1.5vw;
  }
  .brand img{
    width:17vw;
    height:50px;
    margin-bottom:2px;
  }
  .brand img:hover{
    border:1px solid rgb(57, 57, 57);
    box-shadow:2px 2px 2px black;
  }
  .brand h4{
    display: none;
  }
}
</style>

