<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand to="/">Url Shortener</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-button-group v-show="!isLoggedIn">
        <b-button to="/registration" variant="primary">Sign In</b-button>
      </b-button-group>

      <b-button-group v-show="isLoggedIn">
        <b-button to="/profile" variant="primary">My Profile</b-button>
        <b-button to="/" variant="danger" @click="logOut">Log Out</b-button>
      </b-button-group>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: false
    };
  },
  mounted(){
    this.changeNavButtons();
  },
  watch: {
    $route: "changeNavButtons"
  },
  methods: {
    changeNavButtons() {
      const userData = JSON.parse(sessionStorage.getItem("user"));
      if (userData && userData.authToken) {
        this.isLoggedIn = true;
      }
    },
    logOut() {
      sessionStorage.removeItem("user");
      this.isLoggedIn = false;
    }
  }
};
</script>

<style scoped>
</style>