<template>
 
    <div id="container" :style="dimensions">
        <v-app>
      <v-skeleton-loader
      :loading="loading"
      type="card"
      class="item"
      >
      </v-skeleton-loader>
    </v-app>
    </div>

</template>

<script>
export default {
    props:{
        width:{
            type:String,
            default: '400px'
        },
        height:{
            type:String,
            default: '300px'
        },
        marginLeft:{
            type:String,
            default: '0'
        },
        marginRight:{
            type:String,
            default: '0'
        },
    },
  data(){
    return{
      loading:true,
      dimensions:{
        width:`${this.width}px`,
        height:`${this.height}px`,
        marginLeft:`${this.marginLeft}%`,
        marginRight:`${this.marginRight}%`,
      }
    }
  }
}
</script>

<style scoped >
@media only screen and (min-width:900px){
  ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
  #container{
      width:400px;
      height:300px;
      margin-left:.75%;
        margin-right:.75%;
  }
.item{
  margin-left:3%;
  margin-right:3%;
}
}
@media only screen and (max-width:480px){
  ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
  #container{
      width:350px;
      height:250px;
        margin-top:20px;
  }
.item{
  margin-left:1%;
  margin-right:1%;
}
}
</style>