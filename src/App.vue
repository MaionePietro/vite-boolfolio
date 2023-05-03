<script >
import navbar from './components/NavBar.vue'
  export default{
    components:{
        navbar
    }
  }
</script>

<template>
    <header>
        <navbar/>
    </header>
    <main>
        <router-view></router-view> <!--qui viene visualizata la rotta -->
    </main>
    <footer>
        <h2>footer</h2>
    </footer>
</template>

<style lang="scss">

</style>
