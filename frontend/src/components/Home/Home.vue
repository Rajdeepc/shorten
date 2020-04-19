<template>
  <div>
    <Navbar></Navbar>
    <div id="dashbaord" class="pd20">
      <b-container>
        <Dashboard></Dashboard>
      </b-container>
    </div>
    <div id="features" class="pd20">
      <b-container>
        <Features></Features>
      </b-container>
    </div>
     <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../../common-components/NavBar.vue";
import Dashboard from "../Dashboard/Dashboard";
import Features from "../Features/Features";
import Footer from "../../common-components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Dashboard,
    Features,
    Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dashbaord {
  background: #1a1a22;
}
#features {
  background: #f9f9f9;
  color: #111;
}
.pd20 {
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  height: auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
