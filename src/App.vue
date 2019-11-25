<template>
<div id="app">
    <NavBar/>
    <router-view/>
    <Footer/>
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"

export default {
  components:{
    NavBar,
    Footer
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(226, 226, 226);
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


h2 {
  font-size: 20px;
  color: #868686;
}

span {
  font-size: 15px;
  color: #a8a8a8;
  
}

.icono {
  width: 40px;
}
.splashartLogo{
  width: 220px;
}


</style>
