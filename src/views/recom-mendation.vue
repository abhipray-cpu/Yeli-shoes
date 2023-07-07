<template>
    <div id="container-recom">
        <div id="recommendationOdd">
            <img :src="require('../assets/brandLogo/advertise1.png')" alt="recommendation">
        </div>
          <div id="recommendationEven">
            <img :src="require('../assets/brandLogo/advertise2.png')" alt="recommendation">
        </div>
        <div id="recommendationOdd">
            <img :src="require('../assets/brandLogo/advertise3.png')" alt="recommendation">
        </div>
          <div id="recommendationEven">
            <img :src="require('../assets/brandLogo/advertise4.png')" alt="recommendation">
        </div>
        <div id="recommendationOdd">
            <img :src="require('../assets/brandLogo/advertise5.png')" alt="recommendation">
        </div>
          <div id="recommendationEven">
            <img :src="require('../assets/brandLogo/advertise6.png')" alt="recommendation">
        </div>
        <div id="recommendationOdd">
            <img :src="require('../assets/brandLogo/advertise7.png')" alt="recommendation">
        </div>
          <div id="recommendationEven">
            <img :src="require('../assets/brandLogo/advertise8.png')" alt="recommendation">
        </div>
        <div id="recommendationOdd">
            <img :src="require('../assets/brandLogo/advertise9.png')" alt="recommendation">
        </div>
          <div id="recommendationEven">
            <img :src="require('../assets/brandLogo/advertise10.png')" alt="recommendation">
        </div>
        <div id="recommendationOdd">
            <img :src="require('../assets/brandLogo/advertise11.png')" alt="recommendation">
        </div>
          <div id="recommendationEven">
            <img :src="require('../assets/brandLogo/advertise12.png')" alt="recommendation">
        </div>
        <div id="recommendationOdd">
            <img :src="require('../assets/brandLogo/advertise3.png')" alt="recommendation">
        </div>
          <div id="recommendationEven">
            <img :src="require('../assets/brandLogo/advertise14.png')" alt="recommendation">
        </div>

    </div>
</template>

<script>
export default {
      mounted(){
     window.scrollTo(0,0);
  }
}
</script>

<style scoped>
.recommendationOdd img,
.recommendationEven img {
    height:600px;
    width:700px;
       box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
}
</style>