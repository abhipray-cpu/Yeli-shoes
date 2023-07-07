<template>
 
    <div id="containerC" >
        <v-app>
      <v-skeleton-loader
      :loading="loading"
      type="card"
      class="item"
      :max-width="400"
      :max-height="300"
      >
      </v-skeleton-loader>
    </v-app>
    </div>

</template>

<script>
export default {

  data(){
    return{
      loading:true,
    }
  }
}
</script>

<style scoped >
::v-deep .v-application--wrap {
    min-height: fit-content;
  }
  #containerC{
      width:400px;
      height:300px;
  }
.item{
  margin-left:5%;
  margin-right:5%;
}
</style>