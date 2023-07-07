<template>
  <vue-app>
    <login-header></login-header>
<login-motto></login-motto>
<login-form></login-form>
<login-alternate
first="Dont have an account"
   second="Join Us"
   redirect='Signup'></login-alternate>
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
import LoginForm from '../components/login/login-form.vue'
import LoginAlternate from '../components/login/login-alternate.vue'
export default {
  components:{'login-header':LoginHeader,
  'login-motto':LoginText,
  'login-form':LoginForm,
  'login-alternate':LoginAlternate
  },
  computed:{
    overlay(){
      return this.$store.getters['user/getLoading'];
    }
  }
}
</script>

