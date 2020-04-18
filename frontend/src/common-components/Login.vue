<template>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-form-group
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
      <b-form-input id="input-2" v-model="form.password" required placeholder="Enter Password"></b-form-input>
    </b-form-group>
    <div class="btn-container">
    <b-button type="submit" variant="outline-primary">Submit</b-button>
    <b-button type="reset" variant="outline-danger">Reset</b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  }
};
</script>

<style scoped>
.registration-wrapper .form-control {
  background: transparent;
  border-color: transparent;
  border-bottom-color: #42663b;
  border-radius: 0px;
  padding-left: 0px;
}
.registration-wrapper .form-control:focus {
  background: transparent;
  border-color: transparent;
  color: #fff;
  box-shadow: none;
}
</style>