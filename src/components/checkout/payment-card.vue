<template>
 <v-app>
    <div id="container">
    
      <div id="row1">
        <v-radio-group v-model="active">
  <v-radio  label="" :value="card" @click="stateChange" color="black" ></v-radio>
  </v-radio-group>
<div id="title">
<h2>Credit/Debit Card</h2>
</div>
<div class="image" id="visa">
  <img :src="require('/src/assets/card.png')" alt="card">
</div>
      </div>
    <div id="row2">
      <div class="input">
        <h3>Card Number</h3>
        <v-text-field outlined v-model="cardNumber" class="field"
        :placeholder="placeHolder_cardNumber"
        background-color="white"
        color="black"></v-text-field>
      </div>
      <div class="input">
        <h3>Name On Card</h3>
        <v-text-field outlined v-model="name" class="field"
        :placeholder="placeHolder_name"
        background-color="white"
        color="black"></v-text-field>
      </div>
      <div id="lastIp">
        <div class="lastIp">
          <h3>Expiry Date</h3>
          <div id="dualInput">
            <v-text-field outlined v-model="expiryMonth" class="field"
            :placeholder="placeHolder_expiryMoth"
            background-color="white"
            color="black"></v-text-field>
            <div id="spacer">
              <h3>/</h3>
            </div>
            <v-text-field outlined v-model="expiryYear" class="field"
            :placeholder="placeHolder_expiryYear"
            background-color="white"
            color="black"></v-text-field>
          </div>
        </div>
         <div class="lastIp" style="margin-left:20%;">
          <h3>cvv</h3>
          <v-text-field outlined v-model="cvv" class="field"
          :placeholder="placeHolder_cvv"
          :append-icon="card"
          background-color="white"
          color="black"></v-text-field>
        </div>
      </div>
    </div>

 
  </div>
 </v-app>
</template>

<script>
import { mdiCreditCard } from '@mdi/js';
export default {
  data(){
    return{
      active:true,
      placeHolder_cardNumber:"xxxx xxxx xxxx xxxx",
      placeHolder_name:"puttanpal",
      placeHolder_expiryMoth:"05",
      placeHolder_expiryYear:"24",
      placeHolder_cvv:"...",
      cardNumber:"",
      name:"",
      expiryMoth:"",
      expiryYear:"",
      cvv:"",
      card:mdiCreditCard
    }
  },
  methods:{
    stateChange(){
      this.active=!this.active;
    }
  }
}
</script>

<style scoped>
#container{
  width:700px;
  background-color:rgb(245, 244, 244);
  border-radius: 7px;
  padding-left:1.75%;
  padding-right:0.75%;
}
::v-deep .v-application--wrap {
    min-height: fit-content;
  }
.title{
  color:black;
}
#row1{
  display:grid;
  grid-template-columns: 35px 300px 300px;
}
#title h2{
  margin-top:5.95%;
  font-weight:500;
  font-style:normal;
  font-size:20px;
}
.image img{
  width:100px;
  height:50px;
  margin-top:4%;
  right:0;
}
#visa{
  margin-left:75%;
  margin-top:3.5%;
}
#row2{
  margin-top:5px;
  margin-bottom:2%;
}
.input{
  width:650px;
}

.input h3{
  font-weight:600;
  font-style:normal;
  font-size:18px;
  margin-bottom:7px;
}
#lastIp{
  display: grid;
  grid-template-columns: 300px 300px;
}
.lastIp{
  width:250px;
}
.lastIp h3{
  font-weight:600;
  font-style:normal;
  font-size:18px;
  margin-bottom:7px;
}
#dualInput{
  display:grid;
  grid-template-columns: 100px 50px 100px;
}
#spacer h3{
  text-align:center;
  font-weight:100;
  font-style: normal;
  font-size:40px;
  color:rgb(126, 123, 123);
  
  }
  .v-text-field input {
    font-size: 18px;
  }
</style>