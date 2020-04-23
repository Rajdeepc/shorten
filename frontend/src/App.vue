<template>
  <div id="app">
     <Navbar/>
        <div class="main-container">
        <router-view></router-view>
        </div>
     <Footer/>
  </div>
</template>

<script>
import Navbar from "./common-components/NavBar";
import Footer from "./common-components/Footer";

export default {
  name: 'app',
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #fff;
  width:100%;
  height:100vh;
}
.main-container{
  min-height: calc(100vh - 106px);
}
</style>
