<template>
  <div id="container2">
    <div id="column1">
      <v-icon color="black">
        {{ delivery }}
      </v-icon>
    </div>
    <div id="column2">
      <h2>Delivery</h2>
      <h3>
        Track the progress of your order in real time
      </h3>
      <h3 style="text-decoration:underline">
        Find Out More
      </h3>
      
    </div>
  </div>
</template>

<script>

import { mdiTruckDeliveryOutline } from '@mdi/js';

export default {
  
  data(){
    return{
 
      delivery:mdiTruckDeliveryOutline,
     
    }
  }
}
</script>

<style scoped>
#container2{
  margin-top:10%;
  margin-left:10%;
  width:270px;
  height:180px;
  border:1px solid rgb(163, 162, 162);
  border-radius:7px;
  box-shadow: 2px 2px 2px rgb(221, 220, 220);
  display:grid;
  grid-template-columns: auto auto;
  padding-top:1%;
  padding-left:.75%;
  padding-right:.75%
}
#column1{
  padding-left:15%;
 
}
#column2{
  padding-left:5%;
}
h2{
  font-weight: 600;
  font-style:normal;
  font-size:20px;
  margin-bottom:2%;
}
h3{
    font-weight: 400;
  font-style:normal;
  font-size:16px;
  margin-bottom:7%;
  margin-top:7%;
  color:rgb(107, 107, 107);
}

</style>q