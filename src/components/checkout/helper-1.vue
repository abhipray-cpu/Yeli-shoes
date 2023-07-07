<template>
  <div id="container2">
    <div id="column1">
      <v-icon color="black">
        {{ help }}
      </v-icon>
    </div>
    <div id="column2">
      <h2>Help</h2>
      <h3>Call us on 
        <span style="text-decoration:underline;cursor:pointer">7895173059</span>
      </h3>
      <h4>MON-FRI-8am-8pm</h4>
      <h4>SAT-SUN-10am-6pm</h4>
      <h3>email us at 
        <span style="text-decoration:underline;cursor:pointer">store@gmail.com</span>
      </h3>
      
    </div>
  </div>
</template>

<script>
import { mdiPhone } from '@mdi/js';

export default {
  
  data(){
    return{
      help:mdiPhone,
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
  font-size:17px;
  margin-bottom:7%;
  margin-top:7%;
}
h4{
    font-weight: 400;
  font-style:normal;
  font-size:13px;
  margin-bottom:4%;
  margin-top:4%;
  color: rgb(122, 120, 120);
}
</style>