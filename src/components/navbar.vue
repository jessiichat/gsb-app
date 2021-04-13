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
            <a href="#" class="btn" id="signOutButton"> Déconnexion </a>
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
