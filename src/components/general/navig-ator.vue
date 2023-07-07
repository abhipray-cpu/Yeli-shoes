<template>
    <div id="container">
    <the-header></the-header>
 </div>
</template>

<script>
import TheHeader from '../navigation/the-header.vue'
export default {
    components:{
        'the-header':TheHeader,
    }
}
</script>

<style scoped>
#container{
    margin:0;
    padding:0;
}
</style>