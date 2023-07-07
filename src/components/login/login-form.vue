<template>
    <div id="form">
     <v-text-field
            label="Email"
            outlined
            autofocus
             :rules="emailRules"
            v-model="email"
          ></v-text-field>
          <v-text-field
            label="Password"
            outlined
            :append-icon="value ? 'visibility' : 'visibility_off'"
            @click:append="() => (value = !value)"
           :type="value ? 'password' : 'text'"
            v-model="password"
          ></v-text-field>
      <div id="forgotPassword">
        <h4 @click="passwordForget">forgotten your password?</h4>
      </div>
      <div id="terms">
        <h4>By Logging in you Agree to <strong @click="policyListener">Privacy Policy</strong>  and <strong @click="termsListener">Terms of User</strong></h4>
      </div>
      <v-btn
  elevation="3" 
  dark
  x-large
  class="submit"
  @click="login">Sign IN</v-btn>
    </div>
</template>

<script>
export default {
  data(){
    return{
      email:'',
      password:'',
       emailRules:[],
       value: String,
    }
  },
  methods:{ 
    login(){
      //need to add some validation Logic in here
      this.$store.dispatch('user/login',{
       email:this.email,
       password:this.password
      })
    },
  passwordForget(){
    console.log('redirect to password forget page')
  },
   policyListener(){
      console.log('pop up the policy dialog')
    },
    termsListener(){
      console.log('pop up the terms dialog')
    }},
    watch: {
        email: function (mail) { // e_Mail is the exact name used in v-model
            if (mail !== '') {
                this.emailRules = [ v => (v.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) || 'Invalid Email address']
            } else if (mail === '') {
                this.emailRules = []
            }
        }
    },
  

}
</script>
<style scoped>
@media only screen and (min-width:900px){
  #form{
    margin-left:34%;
    margin-top:1.5%;
  }
  .v-text-field{
    width:480px;
  }
  #forgotPassword h4{
    text-align:center;
    font-style:italic;
    text-decoration:underline;
    font-weight: 400;
  }
  #terms h4{
    font-style:italic;
    font-weight: 400;
    cursor:pointer;
  }
  #terms h4 strong{
    text-decoration: underline;
    cursor:pointer;
  }
  .submit{
    margin-top:2%;
    margin-left:41%;
  }
}
@media only screen and (max-width:480px){
  #form{
    margin-left:4vw;
    margin-right:4vw;
    width:92vw;
    margin-top:4.5%;
  }
  .v-text-field{
    width:92vw;
  }
  #forgotPassword h4{
    text-align:end;
    font-style:italic;
    text-decoration:underline;
    font-weight: 400;
    margin-top:-14px;
  }
  #terms h4{
    font-style:italic;
    font-weight: 400;
    cursor:pointer;
    margin-top:14px;
  }
  #terms h4 strong{
    text-decoration: underline;
    cursor:pointer;
  }
  .submit{
    margin-top:4vh;
    margin-left:34%;
  }
}
</style>