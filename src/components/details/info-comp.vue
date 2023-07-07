<template>
    <div id="info">
        <h1>{{title}}</h1>
        <!---this field is absent in the data-->
        <h4>Women's Road Running Shoes</h4>
        <h4 style="margin-top:3.75%">₹{{price}}<span id="discountPrice">₹11,495</span></h4>
        <h4 style="margin-top:3.75%">incl. of taxes and duties <span id="offer">19% off</span></h4>
      </div>
</template>
<script>
export default {
  props:['title','price']
}
</script>
<style scoped>
#info h1{
  font-weight: 400;
  font-style:normal;
  margin-left:-1.3%;
  margin-bottom:0.76%;
}
#info h4{
  font-weight: 200;
  font-style:normal;
  margin-top:0.95%;
}
#discountPrice {
  color:rgb(100, 98, 98);
  text-decoration: line-through;
  margin-left:2.15%;
}
#offer{
  color:rgb(4, 179, 4);
 margin-left:2.15%; 
}
</style>