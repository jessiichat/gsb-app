<template>
  <main class="flex" id="authentication">
        <logo></logo>
        <form @submit.prevent="connect" class="flex" action="" method="">
            <input type="text" v-model="user" aria-label="Login" placeholder="Login">
            <input type="password" v-model="password" aria-label="Mot de passe" placeholder="Mot de passe">
            <button type="submit" class="btn cta">S'authentifier</button>
        </form>
    </main>
</template>

<script>
export default {
  data(){
    return{
      login: '',
      password: '',
      error: null
    }
  },
  methods:{
    connect: async function(){
      //console.log('Connexion : ' + this.user + this.password)
      const cryptedData = window.btoa(this.login + ':' + this.password)
      await fetch('http://localhost:90/gsb/user/' + this.login.toLowerCase(), {
        method: 'GET',
        headers:{
          "Content-type": "application/json",
          "Authorization": "Basic " + cryptedData
        },
        credentials: "include"
      })
      .then((response) => {
        if(response.status === 401){
          this.error = 'Bad login or password'
          console.log('Unauthorized')
        }else{
          this.$router.push('/')
          localStorage.setItem('username', this.login)
          console.log('user connecté')
          return response.json()
        } 
      })
      .then((data) => {
        console.log(data)
      })
    }
  }
}
</script>

<style>
/* AUTHENTICATION */
#authentication {
    height: 75vh;
    flex-direction: column;
}

#authentication img {
    width: 30%;
}

#authentication form {
    width: 100%;
    height: 60%;
    flex-direction: column;
}
</style>