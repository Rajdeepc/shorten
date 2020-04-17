<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand to = '/'>Url Shortener</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-button-group>
        <b-button to = '/registration' variant="outline-primary">Sign In</b-button>
        <b-button to = '/registration' variant="outline-primary">Sign Up</b-button>
      </b-button-group>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
</style>