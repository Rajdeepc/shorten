<template>
  <b-form @submit="onSubmit">
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

    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
      <b-form-input id="input-2" v-model="form.username" required placeholder="Enter name"></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
      <b-form-input id="input-2" v-model="form.password" type="password" required placeholder="Enter password"></b-form-input>
    </b-form-group>
    <div class="btn-container">
      <b-button type="submit" variant="outline-success">Join Us</b-button>
      <b-button type="reset" variant="outline-primary">I'm already a member</b-button>
    </div>
  </b-form>
</template>


<script>

import Service from '../utils/api'

export default {
  name: "SignUp",
  data: function() {
    return {
      form: {
        email: "",
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
     // console.log(JSON.stringify(this.form));

      // call save api
      Service.registerUser(this.form)
      .then(response => {
        console.log("Response from sign up api" + response)
      })
      .catch(err => {
        throw err
      })

    }
  }
};
</script>
<style lang="scss">
.registration-wrapper {
  .form-control {
    background: transparent;
    border-color: transparent;
    border-bottom-color: #42663b;
    border-radius: 0px;
    padding-left: 0px;
    &:focus {
      background: transparent;
      color: #fff;
      box-shadow: none;
    }
  }
  .btn-container button {
    margin-right: 15px;
  }
}
</style>