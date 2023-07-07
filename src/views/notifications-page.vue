<template>
    <div id="container-notifications">
        <!--loop through notification-->
    <the-notification></the-notification>
    <the-notification></the-notification>
    <the-notification></the-notification>
    <the-notification></the-notification>
    <the-notification></the-notification>
    <the-notification></the-notification>
</div>
</template>


<script>
import TheNotification from '../components/notifications/the-notification.vue'
export default {
    components:{
        'the-notification':TheNotification
    },
      mounted(){
     window.scrollTo(0,0);
  }
}
</script>

<style scoped>
@media only screen and (min-width:900px){
    #container-notifications{
        width:80%;
        padding-left:16%;
    }
    
}
@media only screen and (max-width:480px){
    #container-notifications{
        width:100vw;
    }
    
}
</style>