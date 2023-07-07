<template>
  <v-app>
        <div id="container">
       <div id="row1">
          <v-radio-group v-model="active">
  <v-radio  label="" :value="netBanking" @click="stateChange" color="black" ></v-radio>
  </v-radio-group>
  <div id="title">
<h2>Net Banking</h2>
</div>
       </div>
       <template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="500px"
    >
      <v-card>
        <v-card-title>Select Your Bank</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group
            v-model="bank"
            column
          >
          <!--later run a v-for loop in this section-->
           <div class="child">
            <div>
               <v-radio
              label=""
              value="SBI"
              color="black"
              style="margin-top:20px;"
            ></v-radio>
            </div>
            <div class="eleTitle">
              <h4>SBI</h4>
            </div>
            <div class="eleImg">
              <img :src="require('/src//assets/sbi.jpg')" alt="SBI">
            </div>
           </div>
          <div class="child">
            <div>
               <v-radio
              label=""
              value="AXIS"
              color="black"
              style="margin-top:20px;"
            ></v-radio>
            </div>
            <div class="eleTitle">
              <h4>AXIS</h4>
            </div>
            <div class="eleImg">
              <img :src="require('/src/assets/axis.jpg')" alt="SBI">
            </div>
           </div>
           <div class="child">
            <div>
               <v-radio
              label=""
              value="Bank of Baroda"
              color="black"
              style="margin-top:20px;"
            ></v-radio>
            </div>
            <div class="eleTitle">
              <h4>Bank Of Baroda</h4>
            </div>
            <div class="eleImg">
              <img :src="require('/src/assets/bank_of_baroda.jpg')" alt="SBI">
            </div>
           </div>
           <div class="child">
            <div>
               <v-radio
              label=""
              value="HDFC"
              color="black"
              style="margin-top:20px;"
            ></v-radio>
            </div>
            <div class="eleTitle">
              <h4>HDFC</h4>
            </div>
            <div class="eleImg">
              <img :src="require('/src/assets/hdfc.jpg')" alt="SBI">
            </div>
           </div>
           <div class="child">
            <div>
               <v-radio
              label=""
              value="ICICI"
              color="black"
              style="margin-top:20px;"
            ></v-radio>
            </div>
            <div class="eleTitle">
              <h4>ICICI</h4>
            </div>
            <div class="eleImg">
              <img :src="require('/src/assets/icici.jpg')" alt="SBI">
            </div>
           </div>
           <div class="child">
            <div>
               <v-radio
              label=""
              value="Kotak"
              color="black"
              style="margin-top:20px;"
            ></v-radio>
            </div>
            <div class="eleTitle">
              <h4>Kotak Mahindra</h4>
            </div>
            <div class="eleImg">
              <img :src="require('/src/assets/kotak.png')" alt="SBI">
            </div>
           </div>
           <div class="child">
            <div>
               <v-radio
              label=""
              value="PNB"
              color="black"
              style="margin-top:20px;"
            ></v-radio>
            </div>
            <div class="eleTitle">
              <h4>PNB</h4>
            </div>
            <div class="eleImg">
              <img :src="require('/src/assets/pnb.png')" alt="SBI">
            </div>
           </div>
           <div class="child">
            <div>
               <v-radio
              label=""
              value="YES Bank"
              color="black"
              style="margin-top:20px;"
            ></v-radio>
            </div>
            <div class="eleTitle">
              <h4>Yes Bank</h4>
            </div>
            <div class="eleImg">
              <img :src="require('/src/assets/yes_bank.jpg')" alt="SBI">
            </div>
           </div>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="dark"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="dark"
            text
            @click="dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
    </div>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      //this will store the bank customer has chosen
      bank:'',
      dialog: false,
      banks:[{"bank":"SBI","image":"/src/assets/sbi.jpg"},
      {"bank":"AXIS Bank","image":"/src/assets/axis.jpg"},
      {"bank":"Bank Of Baroda","image":"/src/assets/bank_of_baroda.jpg"},
      {"bank":"HFDC","image":"/src/assets/hdfc.jpg"},
      {"bank":"ICICI","image":"/src/assets/icici.jpg"},
      {"bank":"Kotak Mahindra Bank","image":"/src/assets/kotak.png"},
      {"bank":"PNB","image":"/src/assets/pnb.png"},
      {"bank":"Yes Bank","image":"/src/assets/yes_bank.jpg"},]
    }
  },
     methods:{
    stateChange(){
      //modify function later to set the state checked only if a bank is selected
      this.active=!this.active;
      this.dialog=!this.dialog
    }
  }
}
</script>

<style scoped>
#container{
    margin-top:3%;
    margin-bottom:5%;
  width:700px;
  background-color:white;
  border-radius: 7px;
  padding-left:1.75%;
  padding-right:0.75%;
}
.v-application--wrap {
  min-height: unset;
}
 .v-application--wrap {
    min-height: 10vh !important;
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
  font-size:28px;
}
.eleTitle{
  margin-top:20px;
  margin-left:10px;
}
.eleTitle h4{
  font-weight:500;
  font-style:normal;
  font-size:17px;
}
.child{
  display:grid;
  height:62px;
  grid-template-columns: 30px auto 80px;
  margin-top:2%;
  margin-bottom:2%;
}
.eleImg img{
  width:60px;
  height:60px;

}
</style>