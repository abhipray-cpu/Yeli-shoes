<template>
  <vue-app>
    <login-header></login-header>
    <login-motto></login-motto>
   <signup-form></signup-form>
   <the-alternate
   first="Already have an account"
   second="SignIn"
   redirect="Login"
  ></the-alternate>
  <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
        color="purple"
      ></v-progress-circular>
    </v-overlay>

    
  </vue-app>
</template>

<script>
import LoginHeader from '../components/login/login-header.vue'
import LoginText from '../components/login/login-motto.vue'
import SignupForm from '../components/signup/signup-form.vue'
import TheAlternate from '../components/login/login-alternate.vue'
export default {
   components:{'login-header':LoginHeader,
  'login-motto':LoginText,
  'signup-form':SignupForm,
  'the-alternate':TheAlternate
  
  },
  computed:{
    overlay(){
      return this.$store.getters['user/getLoading'];
    }
  }
}
</script>
