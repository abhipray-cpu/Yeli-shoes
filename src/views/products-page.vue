<template>
  <div id="container-prod">
    <!--this will be one of the component that will be composed of two components-->
   <row-1 :data="shoeData"></row-1>
    <!--this will be another comonent-->
 
   <row-2 :data="shoesSuggestion"></row-2>
  </div>
</template>

<script>
import Row1 from '../components/details/row-1.vue'
import Row2 from '../components/details/row-2.vue'
import { collection, query, where, getDocs , limit} from "firebase/firestore";
import {db} from '/src/firebase.js'
export default {
  components: {
   'row-1':Row1,
    'row-2':Row2,
  },
  computed:{
shoeData(){
  return this.shoe_data;
},
shoesSuggestion(){
  return this.suggestions;
}
  },
  data(){
  return {
    shoe_data:'',
    suggestions:[]
  }
  },
  async mounted(){
     window.scrollTo(0,0);
  // getting the shoe details
  const q = query(collection(db, "shoes"), where("_id.$oid", "==", this.$route.params['id']), limit(1));
  this.$store.commit({type: 'shoes/setLoader',
            value: false})
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
   this.shoe_data=doc.data();
   });
  // ######################################################################################################
  // getting the suggested shoes
  const q2 = query(collection(db, "shoes"), where("brand", "==", this.$route.params['brand']),
  where("type", "==", this.$route.params['type']),
   limit(12));
  const querySnapshot2 = await getDocs(q2);
  querySnapshot2.forEach((doc) => {
  this.suggestions.push(doc.data())
   });
   this.$store.commit({type: 'shoes/setLoader',
            value: true})
  },

}
</script>

<style scoped>

</style>
