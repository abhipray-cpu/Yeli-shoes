<template>
  <v-app>
    <div>
      <div id="container">
   <div id="column1">
     <v-skeleton-loader
     :loading="loading"
      type="image"
      :width="300"
      :height="400"
     ></v-skeleton-loader>
   </div>
   <div id="column2">
    <div class="title">
       <v-skeleton-loader
      :loading="loading"
      type="text"
      :width="300"
      :height="100"
     ></v-skeleton-loader>
    </div>
     <v-skeleton-loader
      :loading="loading"
      type="text"
      :width="200"
      :height="70"
      class="price"
     ></v-skeleton-loader>
     <v-skeleton-loader
      :loading="loading"
      type="text"
      :width="800"
      :height="5"
      class="para"
     ></v-skeleton-loader>
      <v-skeleton-loader
      :loading="loading"
      type="text"
      :width="800"
      :height="5"
      class="para"
     ></v-skeleton-loader>
      <v-skeleton-loader
      :loading="loading"
      type="text"
      :width="800"
      :height="5"
      class="para"
     ></v-skeleton-loader>
      <v-skeleton-loader
      :loading="loading"
      type="text"
      :width="800"
      :height="5"
      class="para"
     ></v-skeleton-loader>
   </div>
  </div>
  <div id="buttons">
      <v-skeleton-loader 
      dark="true"
      :loading="loading"
      type="button"
      class="button"
      ></v-skeleton-loader>
        <v-skeleton-loader 
      dark="true"
      :loading="loading"
      type="button"
      class="button"
      ></v-skeleton-loader>
  </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      loading:true
    }
  }
}
</script>

<style scoped>
#container{
  width: 100%;
  height:200px;
  display:grid;
  grid-template-columns: 320px 410px;
  margin-top:5%;
  margin-bottom:5%;
}
::v-deep .v-application--wrap {
    min-height: fit-content;
  }
#column1{
  width:310px;
  height:300px;
}

#column2{
  width:fit-content;
  height:300px;
}
.title{
  margin-bottom:6px;
}
.price{
  margin-top:3px;
  margin-bottom:1px;
}
.para{
  margin-top:5px;
  margin-bottom:5px;
}
#buttons{
    display: grid;
    grid-template-columns: auto auto;
    margin-left:60%;
}
</style>