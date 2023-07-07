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
  width:fit-content;
  height:fit-content;
  padding-left:5%;
}
</style>