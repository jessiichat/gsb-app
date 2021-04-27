<template>
  <nav class="flex">
    <logo></logo>

    <ul class="flex">
        <li>
            <a href="visiteurs.html">Visiteurs</a>
        </li>
        <li>
            <a href="redacteurs.html">Rédacteurs</a>
        </li>
        <li>
            <a href="chercheurs.html">Chercheurs</a>
        </li>
        <li>
            <a href="addRapport.html">Ajout Rapport</a>
        </li>
        <li>
            <router-link class="nav-link" to="/rapports">Rapports</router-link>
        </li>
        <li>
            
            <router-link v-if="getLogin === null || getLogin === 'null'" class="btn" id="signInButton" to="/login">Connexion</router-link>
            <router-link v-else class="btn" id="signOutButton" to="/" v-on:click="logout()"> Déconnexion</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
import logo from './logo.vue';

export default{
    name: 'navbar',
    components: {
        logo
    },
    data() {
        //user: this.getLogin();
    },
  //props:['user'],
    methods: {
        logout(){
            this.$store.dispatch('setLogin', null)
        },
    },
    computed: {
        getLogin: function() {
            return this.$store.getters.getLoginFromStore
        }
    }
}



</script>

<style scoped>
    nav {
    height: 10vh;
    width: 90%;
    margin: auto;
    }

    nav a {
        color: white;
    }
</style>
