<template>
<div id="baap">
      <v-app>
    <div @click="valueChange">
      <v-badge :content="messages"
        :value="messages"
        color="blue"
        overlap>
<div id="price" v-bind:style="{backgroundColor:color}">
  <h2>{{text}}</h2>
</div>
      </v-badge>
    </div>
  </v-app>
</div>
</template>

<script>
export default {
    props:['text','color'],
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
div
{
    padding:1.75%;
    margin:1.75%;
}
#price{
  width: 116px;
height: 40px;

border-radius: 10px;}
#price h2{

    text-align: center;
  position: absolute;
width: 99px;
height: 22px;
top: 12px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: white;
}
#baap{
 width:110px;
 height: 25px;
 margin-bottom: 20px;
}
</style>