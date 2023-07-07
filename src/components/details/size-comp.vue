<template>
    <div id="sizeContainer">
          <!--change the div active class when it is clicked-->
          <div class="sizeOptionDisabled">
             <h4>Uk 2.5</h4>
          </div>
          <div class="sizeOptionDisabled">
             <h4>Uk 3</h4>
          </div>
          <div class="sizeOptionDisabled">
             <h4>Uk4</h4>
          </div>
          <div class="sizeOptionEnabled">
             <h4>Uk 4.5</h4>
          </div>
          <div class="sizeOptionDisabled">
             <h4>Uk 5.5</h4>
          </div>
          <div class="sizeOptionDisabled">
             <h4>Uk 6</h4>
          </div>
          <div class="sizeOptionEnabled">
             <h4>Uk 6.5</h4>
          </div>
          <div class="sizeOptionDisabled">
             <h4>Uk 7</h4>
          </div>
          <div class="sizeOptionDisabled">
             <h4>Uk 7.5</h4>
          </div>
          <div class="sizeOptionDisabled">
             <h4>Uk 8</h4>
          </div>
          <div class="sizeOptionDisabled">
             <h4>Uk 8.5</h4>
          </div>
          <div class="sizeOptionEnabled">
             <h4>Uk 9</h4>
          </div>
          <div class="sizeOptionDisabled">
             <h4>Uk 9.5</h4>
          </div>
          <div class="sizeOptionEnabled">
             <h4>Uk 10</h4>
          </div>
          <div class="sizeOptionDisabled">
             <h4>Uk 10.5</h4>
          </div>
          <div class="sizeOptionEnabled">
             <h4>Uk 11</h4>
          </div>
          <div class="sizeOptionDisabled">
             <h4>Uk 11.5</h4>
          </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#sizeContainer{
  display:grid;
  grid-template-columns: repeat(3,122px);
  grid-gap:6px;
  margin-top:3.5%;
}
.sizeOptionDisabled{
  width:120px;
  height:50px;
  border-radius: 6px;
  background-color:rgb(238, 237, 237);
  border:2px solid rgb(235, 232, 232);
  text-align:center;
  backdrop-filter: blur(20px);
}
.sizeOptionDisabled h4{
  margin-top:14px;
  font-style:normal;
  font-weight:300;
  color:rgba(0,0,0,0.2);
}
.sizeOptionEnabled{
  width:120px;
  height:50px;
  border-radius: 6px;
  background-color:rgb(238, 237, 237);
  border:2px solid rgb(235, 232, 232);
  text-align:center;
  cursor: pointer;
}
.sizeOptionEnabled h4{
  margin-top:14px;
  font-style:normal;
  font-weight:300;
  color:rgba(0,0,0,1);
}
.sizeOptionEnabled:hover{
  border:1px solid black;
}
</style>