<template>
 <v-app>
   <!--integrate this with the real prod--->
    <div id="container">
    <v-skeleton-loader
    width="400px"
    height="300px"
    type="card"
    :loading="loading"
    v-for="i in 13"
    :key="i"
    class="item"
    ></v-skeleton-loader>
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
  margin-top:2%;
  padding-left:3%;
  display:grid;
  grid-template-columns:repeat(13,auto);
  overflow-x:auto;
}
#container::-webkit-scrollbar{
  display:none;
}
.item{
  margin-left:20px;
  margin-right:30px;
}
</style>