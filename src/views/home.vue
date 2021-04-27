<template>
  <main>
    <section class="flex">
        <div id="contenuHaut">
            <p id="date"> 01 février 2021</p>
            <h1> Bonjour {{ getLogin }} </h1>
        </div>
        <a href="addUser.html" class="btn cta">Ajouter un rapport </a>
        <input type="search" aria-label="Rechercher des rapports" placeholder="Rechercher des rapports">
    </section>
  </main>
</template>

<script>
export default {
    //props:['user']
    computed: {
            getLogin: function() {
                return this.$store.getters.getLoginFromStore
            }
    }
}
</script>

<style>
/* HOME */

main > section:first-child {
    color: white;
    align-items: flex-end;
}

.showMore {
    text-decoration: none;
    color: #474350;
}

.cardFooter {
    padding: 2em;
    text-align: center;
}
</style>