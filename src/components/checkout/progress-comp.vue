<template>
  <div id="container">
  <div>
    <div class="circle" :class="circle1 === true ? 'active' : 'passive'"></div>
    <h3 class="text">Address</h3>
  </div>
  <div class="line" :class="line1 === true ? animaton_mode === 'forward'?'activate_forward':'activate_backward' : 'passive'"></div>
  <div>
    <div class="circle" :class="circle2 === true ? 'active' : 'passive'"></div>
    <h3 class="text">Contact Details</h3>
  </div>
  <div class="line" :class="line2 === true ? animaton_mode === 'forward'?'activate_forward':'activate_backward' : 'passive'"></div>   
  <div>
    <div class="circle" :class="circle3 === true ? 'active' : 'passive'"></div>
    <h3 class="text">Payment</h3>
  </div>
  </div>
</template>

<script>
//need to add transition animations while going from one phase to another phase
export default {
  //these will decide whether the dynamic class will be active or passive
mounted(){
console.log(this.circle1);
console.log(this.line1);
console.log(this.circle2);
console.log(this.circle3);
console.log(this.line2);
},
computed:{
     circle1(){
      return this.$store.getters['user/get_circle1'];
    },
    line1(){
      return this.$store.getters['user/get_line1'];
    },
    circle2(){
      return this.$store.getters['user/get_circle2'];
    },
    line2(){
      return this.$store.getters['user/get_line2'];
    },
    circle3(){
      return this.$store.getters['user/get_circle3'];
    },
    animaton_mode(){
      return this.$store.getters['user/get_animationMode'];
    }
}
}

</script>

<style scoped>
#container{
  display: grid;
  grid-template-columns: 20px 150px 20px 150px 20px;
  margin-top:.5%;
}
.circle{
 width:20px;
 height:20px;
 border-radius: 100px;
 background-color:black;
 margin-top:0px;
}
.line{
  margin-top:8px;
  width:150px;
  height:3px;
  background-color:black;
}
.text{
  font-weight:400;
  font-style:normal;
  font-size:15px;
  margin-top:6px;
}
.active{
  animation: animation_forward;
 animation-fill-mode: forwards;
 animation-duration: 0.75s;

}
.passive{
  background-color:rgb(141, 141, 141);
}
.activate_forward
{
  animation:animation_forward;
  animation-fill-mode: forwards;
  animation-duration: 0.75s;

}
.activate_backward
{
animation:animation_backward;
  animation-fill-mode: forwards;
  animation-duration: 0.75s;
}
@keyframes animation_forward{
0%{
  background-color:rgb(141, 141, 141);
}
25%{background-color:rgb(110, 110, 110);}
50%{background-color:rgb(90, 90, 90);}
75%{background-color:rgb(30, 29, 29);}
100%{
  background-color:black;
}
}
@keyframes animation_backward{
0%{
  background-color:black;
}
25%{background-color:rgb(30, 29, 29);}
50%{background-color:rgb(90, 90, 90);}
75%{background-color:rgb(110, 110, 110);}
100%{
  background-color:rgb(141, 141, 141);
}
}

</style>