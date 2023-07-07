<template>
     <div id="form">
       <v-text-field
            label="UserName"
            outlined
            autofocus
            :rules="nameRules"
            v-model="name"
          ></v-text-field>
     <v-text-field
            label="Email"
            outlined
           :rules="emailRules"
            v-model="email"
            type="email"
          ></v-text-field>
         
          <v-text-field
            label="Number"
            outlined
           :rules="numberRules"
            v-model="number"
          ></v-text-field>
          <v-text-field
            label="Password"
            outlined
            
            v-model="password"
            :append-icon="value ? 'visibility' : 'visibility_off'"
            @click:append="() => (value = !value)"
           :type="value ? 'password' : 'text'"
          ></v-text-field>
           <v-text-field
            label="Confirm Password"
            outlined
            
            v-model="confirmPassword"

            :append-icon="value ? 'visibility' : 'visibility_off'"
            @click:append="() => (value = !value)"
           :type="value ? 'password' : 'text'"
          ></v-text-field>
      <div id="terms">
        <h4>By Sigingup  you Agree to <strong @click="policyListener">Privacy Policy</strong>  and <strong @click="termsListener">Terms of User</strong></h4>
      </div>
      <v-btn
  elevation="3" 
  dark
  x-large
  @click="signup"
  class="submit">Signup</v-btn>
    </div>
</template>

<script>
export default {
  data(){
    return {
      name:'',
      email:'',
      number:'',
      password:'',
      confirmPassword:"",
      emailRules:[],
       value: String,
      nameRules: [
  v => !!v || 'Name is required',
  v => (v && v.length <= 50) || 'Name must be less than 50 characters',
],
numberRules: [
  v => !!v || 'Contact Number is required',
  v => (v && v.length != 9) || 'Number must be of 10 digits',
]
  }
  },
  methods:{
    signup(){
      //need to add some validation Logic in here
      this.$store.dispatch('user/signup',{
      email:this.email,
      password:this.password,
      name:this.name,
      number:this.number
      })
      this.email="";
      this.password="";
      this.name="";
      this.number="";
      this.confirmPassword="";
    },
    policyListener(){
      console.log('pop up the policy dialog')
    },
    termsListener(){
      console.log('pop up the terms dialog')
    }
  },
  computed:{
    loadState(){
      return this.$store.getters['user/getauth'];
    }
  },
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
    width:92vw;
    margin-left: 4vw;
    margin-right:4vw;
    margin-top:4vh;
  }
  .v-text-field{
    width:92vw;
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
    margin-top:3vh;
    margin-left:34%;
  }
}
</style>

