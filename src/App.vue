<template>
   <div id="app">
    <my-navbar class="nav"/>
    <sidebar/>
    <router-view></router-view>
  </div>
</template>

<script>
import MyNavbar from "./components/MyNavbar"
import Sidebar from "./components/Sidebar"
export default {
  name: 'App',
  components:{
   MyNavbar,
  Sidebar
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav {
  padding: 15px;
}


.nav a {
  font-weight: bold;
  color: #264463;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
