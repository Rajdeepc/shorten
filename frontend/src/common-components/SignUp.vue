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

    <b-button type="submit" variant="outline-success">Join Us</b-button>
    <b-button type="reset" variant="outline-primary" >I'm already a memeber</b-button>
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
        evt.preventDefault()
        alert(JSON.stringify(this.form))
  },
};
</script>
<style>
.form-control{
    background: transparent;
    border-color: transparent;
    border-bottom-color: #42663B;
    border-radius: 0px;
    padding-left: 0px;
}
.form-control:focus{
        background: transparent;
    border-color: transparent;
        color: #fff;
        box-shadow: none;
}
</style>