<template>
      <navbar></navbar>
      <router-view v-bind:user="user"></router-view>
      <footerApp></footerApp>

</template>

<script>
import navbar from '@/components/navbar'
import footerApp from '@/components/footer'

export default {
  name: 'App',
  components: {
    navbar,
    footerApp
  },
  data(){
    return{
        user: null
    }
  },
  mounted(){
      this.user = localStorage.getItem('username')
  }
}
</script>

<style>
#app {  
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
