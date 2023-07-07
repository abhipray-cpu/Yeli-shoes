<template>
  <div class="orders">
    <div class="header">
      <div class="date">
        <h2 class="passive">Order Placed</h2>
        <h2 class="active">16 Mar 2022</h2>
      </div>
      <div class="total">
        <h2 class="passive">Total</h2>
        <h2 class="active">₹9999</h2>
      </div>
      <div class="addres">
        <h2 class="passive">SHIP TO</h2>
        <!--add a dialog that will display the detailed address-->
        <h2 class="active" style="cursor:pointer">Kamal Kumar Dumka Radhe</h2>
      </div>
      <div class="orderId">
        <h2 class="passive" style="margin-left:30%">Order #69696969669696</h2>
        <div class="bhau">
          <div class="link">
            <h2>View Product Details</h2>
          </div>
          <div class="link">
            <h2>Download Invoice</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="column1">
        <div class="delivered">
          <h1>Delivered on 16th March 2022</h1>
        </div>
        <div class="colChotu">
          <div class="pic">
            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ef3ae1e-7206-4a5b-bbe0-434c5bad97aa/jordan-why-not-5-pf-basketball-shoes-r2JwFc.png" alt="Product Image">
          </div>
          <div class="text">
            <h2 class="activeT">Nike Air Jordans</h2>
            <h2 class="semi-activeT">Kamal Kumar Dumka Radhe Kunj near mary go garden Gas Godamn road haldwani</h2>
          <h2 class="passiveT">Return By 4th April 2022</h2>
          </div>
        </div>
      </div>
      <div class="column2">
        <v-btn  dark>Track Package</v-btn>
        <v-btn  dark>Return Items</v-btn>
        <v-btn  dark>Share Gift Receipt</v-btn>
        <v-btn  dark>Leave Seller Feedback</v-btn>
        <v-btn  dark>Leave Delivery Feedback</v-btn>
        <v-btn  dark>Write a Product Review</v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.orders{
    margin-left:20%;
  width:900px;
  height:364px;
border:1px solid rgb(165, 164, 164);

margin-top:2%;
margin-bottom:2%;

border-radius: 5px;

}
.header{
  width:100%;
  height:64px;
  background-color:rgb(219, 217, 217);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display:grid;
  grid-template-columns: repeat(4,auto);
 padding-left:1.5%;
padding-right:1.5%;
padding-top:0.25%;
padding-bottom:0.25%;
}
.active{
  font-size:16px;
  font-weight:400;
  font-style:normal;
  color:rgba(0, 0, 0,0.8);
  margin-bottom:0.125%;
    margin-top:2%;
}
.passive{
  font-size:16px;
  font-weight:400;
  font-style:normal;
  color:rgb(87, 86, 86);
}
.bhau{
  display: grid;
  grid-template-columns: repeat(2,auto);
  margin-top:2%;
}
.link{
  margin-left:20%;
}
.link h2{
  font-size:16px;
  font-weight:400;
  font-style:normal;
  color:rgba(15, 5, 153,0.7);
  margin-bottom:0.125%;
  text-decoration: underline;
  cursor: pointer;
}
.body{
  padding-top:1%;
  padding-left:1.5%;
  display:grid;
  grid-template-columns: auto auto;
}
.delivered h1{
  color:rgba(0,0,0,0.8);
  font-weight:600;
  font-style:normal;
  font-size:24px;
  margin-left:1%;
}
.colChotu{
  margin-top:1%;
  display: grid;
  grid-template-columns: 240px 250px;
}
.pic img{
  width:230px;
  height:250px;
}
.activeT{
  margin-top:4.5%;
  font: weight 600;
  color:rgba(0, 0, 0,0.8);
  font-size:20px;
  font-style:normal;
  margin-bottom:3.5%;
}
.semi-activeT{
  margin-top:7.5%;
 font: weight 400;
  color:rgba(0,0,0,0.8);
  font-size:16px;
  font-style:normal;
  line-height:0.95;
}
.passiveT{
  font: weight 800;
  color:black;
  font-size:16px;
  font-style:normal;
  margin-top:15.5%;
}
.column2{
  padding-top:1.5%;
  padding-bottom:1.5%;
  display: grid;
  grid-template-rows:auto(repeat,6);
  margin-left:20%;
}
.v-btn{
  width:250px;
}
</style>