<template>
 <v-app>
   <div id="containerDesktop">
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
   <div id="containerMobile">
    <v-skeleton-loader
    :loading="loading"
    type="image"
    class="image"
    :max-width="480"
    :max-height="500">
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
@media only screen and (min-width:900px){
  #containerDesktop{
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
  #continerMobile{
    display:none;
  }
}
@media only screen and (max-width:480px){
  #containerDesktop{
    display:none;
  }
  #containerMobile{
    width:100vw;
    height:500px;
  }
  .image{
    width:100vw;
    height:500px !important; 
  }

}
</style>