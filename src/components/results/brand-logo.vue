
<template>
  <v-app>
   <div @click="valueChange">
      <v-badge
        :content="messages"
        :value="messages"
        color="blue"
        overlap
      >
        <img :src="image" :alt="name">
        <h4>{{name}}</h4>
      </v-badge>
</div>
  </v-app>
</template>
<script>

  export default {
    props:{
      image:String,
      name:String
    },
    data () {
      return {
        messages: "",
      }
    },
    methods:{
      valueChange(){
       
        if(this.messages == "")
        {
          this.messages = "✓";
        }
        else
        {
          this.messages = "";
        }

      }
    }
  }
</script>

<style scoped>
img{
  width:70px;
  height:70px;
}
h4{
  margin-top:1.5%;
}
div{
  margin-top:13px;
  margin-bottom:13px;
  margin-left:10px;
  margin-right:10px;
  width:80px;
  height:100px;
}
</style>