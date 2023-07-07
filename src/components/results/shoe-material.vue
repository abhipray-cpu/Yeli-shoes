<template>
      <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
       Material
      </v-expansion-panel-header>
      <v-expansion-panel-content>
             <div class="genderVal">
            <v-checkbox :ripple="false" color="black"></v-checkbox>
            <div class="label">Leather</div>
          </div>
          <div class="genderVal">
            <v-checkbox :ripple="false" color="black"></v-checkbox>
            <div class="label">Textile</div>
          </div>
          <div class="genderVal">
            <v-checkbox :ripple="false" color="black"></v-checkbox>
            <div class="label">Foam</div>
          </div>
          <div class="genderVal">
            <v-checkbox :ripple="false" color="black"></v-checkbox>
            <div class="label">Canvas</div>
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
  .genderVal{
    display:grid;
    grid-template-columns: 40px auto;
    padding-left:20px;
    margin-top:2px;
    margin-bottom:2px;
  }
  .label{
    margin-top:6%;
    font-size:20px;
    font-weight:500;
    font-style:normal;
  }
}
@media only screen and (max-width:480px){
  ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
  .v-app{
    width:40vw;
    overflow-x: hidden;
  }
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
.v-expansion-panel-content{
  margin-left:0px;
  padding-left:0px;
}
.genderVal{
  display:grid;
  grid-template-columns: 10vw 30vw;
  overflow-x: hidden;
  margin-top:-2px;
  margin-bottom:-2px;
  width:40vw;
  margin-left:-10px;
  padding-left:0px;
}
.gender-check{
  width: 10vw;
}
.label{
  margin-top:15px;
  font-size:20px;
  font-weight:500;
  font-style:normal;
  margin-left:-5px;
}
}
</style>