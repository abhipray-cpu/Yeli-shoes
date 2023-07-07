<template>
  <div id="container">
    <div id="image">
       <v-skeleton-loader
      :loading="loading"
      type="image"
      class="image"
      :max-width="220"
      :max-height="200">
      </v-skeleton-loader>
    </div>
    <div id="info">
      <div id="header">
         <v-skeleton-loader
      :loading="loading"
      type="text"
      class="image"
      :max-width="220"
      :max-height="200">
      </v-skeleton-loader>
      </div>
      <div id="info">
        <v-skeleton-loader
      :loading="loading"
      type="text"
      class="image"
      :max-width="520"
      :max-height="200">
      </v-skeleton-loader>
      <v-skeleton-loader
      :loading="loading"
      type="text"
      class="image"
      :max-width="520"
      :max-height="200">
      </v-skeleton-loader>
      
      </div>
      <div id="btns">
        <v-skeleton-loader
      :loading="loading"
      type="button"
      class="button">
      </v-skeleton-loader>
      </div>
    </div>
  </div>
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
    margin-top:15%;
  display: grid;
  grid-template-columns: 30fr 70fr;
width: 80%;
margin-left:10%;
height:280px;
}
#info{
  display:grid;
  grid-template-rows:20fr 40fr 20fr
}
#btns{
  margin-left:45%;
 
}

</style>