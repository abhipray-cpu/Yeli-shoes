<template>
 <v-app>
   <div id="container">
     <v-skeleton-loader
      :loading="loading"
      type="image"
      class="image"
      :max-width="450"
      :max-height="500">
      </v-skeleton-loader>
      <v-skeleton-loader
      :loading="loading"
      type="image"
      class="image"
      :max-width="450"
      :max-height="500"
       v-for="i in 4"
      :key="i"
      >
      </v-skeleton-loader>
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
::v-deep .v-application--wrap {
    min-height: fit-content;
  }
#container{
  width:100%;
  height:fit-content;
  display:grid;
  grid-template-columns: repeat(2,auto);
  padding-left:5%;
  grid-gap:30px;
}
.image{
  margin-left:2%;
  margin-right:2%;
  margin-top:2%;
  margin-bottom:2%;
}
</style>