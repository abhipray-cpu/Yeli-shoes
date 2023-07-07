<template>
  <div>
    <div style="margin-left:35%;">
      <the-progress :circle1="true" :line1="true" :circle2="true"
      :line2="false" :circle3="false"></the-progress>
    </div>
    <div id="baap">
      <div id="container">
    
<h2>Delivery Contact</h2>
<div id="divider"></div>
<div id="form">
  <div id="row1" class="entry">
    <div class="input">
      <h3>First Name</h3>
      <v-text-field value="Abhipray"
            
            outlined
            v-model="firstName"
            ></v-text-field>
    </div>
    <div class="input">
      <h3>Last Name</h3>
      <v-text-field value="Dumka" 
      outlined
      v-model="lastName"></v-text-field>
    </div>
  </div>
  <div id="row2" class="entry">
    <div class="input" style="width:650px;">
      <h3>Email Address</h3>
      <v-text-field value="dumkaabhipray@gmail.com"
       outlined 
       full-width
       v-model="email"></v-text-field>
    </div>
  </div>
  <div id="row3" class="entry">
    <div class="input">
      <h3>Phone</h3>
    <v-text-field value="91+ 7895724996"
     outlined
     v-model="number"></v-text-field>
    </div>
  </div>
  <v-btn dark x-large>Continue</v-btn>
</div>
<div id="footer"></div>
  </div>

    <div style="margin-left:15%;">
      <order-summary></order-summary>
    </div>

    </div>
    <div id="footer">
      <helper-1></helper-1>
      <helper-2></helper-2>
      <helper-3></helper-3>
    </div>
  </div>
</template>

<script>
import TheProgress from './progress-comp.vue'
import TheSummary from './order-details.vue'
import Helper1 from './helper-1.vue'
import Helper2 from './helper-2.vue'
import Helper3 from './helper-3.vue'
export default {
  components:{
    'the-progress':TheProgress,
    'order-summary':TheSummary,
    'helper-1':Helper1,
    'helper-2':Helper2,
    'helper-3':Helper3
  },
  data(){
    return{
      firstName:"",
      lastName:"",
      email:"",
      number:""
    }
  }
}
</script>

<style scoped>

#container{
  margin-left:10%;
  margin-top:1%;
  width:700px;
  padding-top:0.75%;
  padding-left:0.25%;
  padding-right:0.25%;
  padding-bottom:1.5%;
}
h2{
  font-weight:500;
  font-style:normal;
  font-size:22px;
}
#divider{
  margin-top:3%;
  margin-bottom:5%;
  width:100%;
  height:1px;

  background-color:rgb(202, 201, 201)
}
.entry{
  margin-bottom:2%;
  margin-top:1.5%;
}
#row1{
  display:grid;
  grid-template-columns: auto auto;
}
.input{
  width:315px;
}

.input h3{
  font-weight:600;
  font-style:normal;
  font-size:20px;
  margin-bottom:12px;
}
#baap{
  display:grid;
  grid-template-columns: auto auto;
}
#footer{
  display:grid;
  grid-template-columns: auto auto auto;
  margin-bottom:5%;
  padding-left:3%;
  padding-right:3%;
}
</style>