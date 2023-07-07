<template>
  <div id="container">
    <skeleton-item></skeleton-item>
    <skeleton-item></skeleton-item>
    <skeleton-item></skeleton-item>
    <skeleton-item></skeleton-item>
    <skeleton-item></skeleton-item>
    <skeleton-item></skeleton-item>
    <skeleton-item></skeleton-item>
  </div>
</template>

<script>
import SkeletonItem from './components/skeletonLoaders/orders/skeleton-item.vue'
export default {
  components:{
    'skeleton-item':SkeletonItem
  }
}
</script>

<style scoped>
#container{
  margin-top:10%;
  margin-left:10%;
}
</style>