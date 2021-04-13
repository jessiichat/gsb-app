<template>

    <main>
        <section class="flex">
            <div id="contenuHaut">
                <p id="date"> 01 février 2021 </p>
                <h1> Bonjour Marie </h1>
            </div>
            <a href="addUser.html" class="btn cta">Ajouter un rapport </a>
            <input type="search" aria-label="Rechercher des rapports" placeholder="Rechercher des rapports">
        </section>

        <section class="listContainer">
            <div class="listContainerHeader">
                <h2>Liste des rapports</h2>
                <hr>
            </div>
            <div class="listContainerBody">
                <ul>
                    <li class="flex">
                        <img src="./assets/images/file.svg" alt="Image représentant un dossier">
                        <h3>John Doe</h3>
                        <p>
                            <strong>2456</strong>
                        </p>
                        <p>01/02/2021</p>
                        <a href="rapportDetails.html">
                            <img src="./assets/images/arrow.svg" alt="Chevron vers la droite">
                        </a>
                    </li>
                    <hr>
                </ul>
            </div>
        </section>
    </main>

</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    connect: async function(){
        await fetch('http://localhost:90/gsb/rapport', {
            method: 'GET',
            headers:{
            "Content-type": "application/json"
            },
        })
        .then(response => response.json()
        .then((data) => {
            console.log(data);
            data.Search.forEach(rapport => {
                console.log(rapport);
                rapports.insertAdjacentHTML('beforeend', `
                <li> 
                    ${rapport} 
                </li>
                `);
            });
        }))
        .catch((e) => {
            console.log(e);
        });
    }
  }
}
</script>

<style>
    @import 'layout.css';
    @import 'layout-responsive.css';
</style>