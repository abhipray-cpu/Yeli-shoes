<template>
    <img :src="require(`${image}`)" alt="Adidas Advertisemnt"
    @click="advertiseRedirect('pass in an id in here')">
</template>

<script>

export default {
    //pass in the image src as prop to this 
    props : {'image' : {type : String}},
    methods:{
        advertiseRedirect(redirectTo){
           console.log(`Redirect to ${redirectTo}`);
           this.$router.push({
               name:'Search_results'
           })
        }
    }
}
</script>

<style>
img{
    cursor: pointer;
}
</style>