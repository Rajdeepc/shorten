<template>
  <b-form @submit="onSubmit">
    <b-form-group
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
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
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    //  console.log(JSON.stringify(this.form));
    }
  }
};
</script>
