<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand to = '/'>Url Shortener</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-button-group v-show="!isLoggedIn">
        <b-button to = '/registration' variant="primary">Sign In</b-button>
        <b-button to = '/registration' variant="success">Sign Up</b-button>
      </b-button-group>

      <b-button-group v-show="isLoggedIn">
        <b-button to = '/profile' variant="primary">My Profile</b-button>
        <b-button to = '/' variant="danger">Log Out</b-button>
      </b-button-group>


    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return {
      isLoggedIn: false
    }
  }
};
</script>

<style scoped>
</style>