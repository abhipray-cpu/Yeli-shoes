<template>
    <div id="alternate">
  <h4>{{ first }}?<strong @click="redirectTo" >{{ second }}</strong></h4>
</div>
</template>

<script>
export default {
  props: {
    first:String,
    second:String,
    redirect:String //pass in the route for the page you want to redirect to
  },
  methods:{
    redirectTo(){
      this.$router.push({
        name:`${this.redirect}`
      })
    }
  }
}
</script>
<style scoped>
#alternate{
  width:100vw;
  margin-top:4vh;
}
#alternate h4{
  font-style:italic;
  font-weight: 400;
  cursor:pointer;
  text-align: center;
}
#alternate h4 strong{
  text-decoration: underline;
  cursor:pointer;
}
</style>