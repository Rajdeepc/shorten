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

    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
      <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
      <b-form-input id="input-2" v-model="form.password" required placeholder="Enter password"></b-form-input>
    </b-form-group>
    <div class="btn-container">
      <b-button type="submit" variant="outline-success">Join Us</b-button>
      <b-button type="reset" variant="outline-primary">I'm already a member</b-button>
    </div>
  </b-form>
</template>


<script>
export default {
  name: "SignUp",
  data: function() {
    return {
      form: {
        email: "",
        name: "",
        password: ""
      }
    };
  },
  onSubmit(evt) {
    evt.preventDefault();
    alert(JSON.stringify(this.form));
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
.registration-wrapper .btn-container button {
  margin-right: 15px;
}
</style>