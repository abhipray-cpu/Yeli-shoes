<template>
     <div id="text">
      <v-img>
        <img :src="require('/src/assets/siteLogo/login.png')" alt="Yelli Shoes" id="mot"/>
      </v-img>
      <h2>Ek baar order karke ke toe dekho!!</h2>
      
    </div>
</template>

<style scoped>
@media only screen and (min-width:900px){
  #text{
    margin-left:34%;
    margin-top:2%;
  }
  h2{
    margin-top:2px;
    font-weight: 400;
    font-size:16px;
    font-style:italic;
    color:rgb(56, 53, 53);
  }
}
@media only screen and (max-width:480px){
  #text{
    margin-top:7%;
  }
  #mot{
    width:80px;
    height: 60px;
    margin-left:3vw;
  }
  h2{
    margin-top:2px;
    margin-left:5vw;
    font-weight: 400;
    font-size:16px;
    font-style:italic;
    color:rgb(56, 53, 53);
  }
}
</style>