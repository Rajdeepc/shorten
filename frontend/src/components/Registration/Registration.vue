<template>
  <div class="signup-box">
      <b-row>
        <b-col sm="6">
          <div class="image-box">
            <h5> URL SHORTENER</h5>
          </div>
        </b-col>
        <b-col sm="6">
          <div class="registration-box">
            <b-tabs content-class="mt-3">
              <b-tab title="Sign Up" active>
                <SignUp></SignUp>
              </b-tab>
              <b-tab title="Login">
                <Login></Login>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import SignUp from '../../common-components/SignUp';
import Login from '../../common-components/Login';

export default {
  name: "Registration",
  data: function(){
        return {
        }
    },
  components:{
    SignUp,
    Login
  }
};
</script>

<style>
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
    border-color: transparent;
}
.nav-link {
    color: #fff;
}
.signup-box {
  margin: 0 auto;
  width: 800px;
  position: absolute;
  top: 50%;
  margin-top: -250px;
  left: 0;
  right: 0;
  -webkit-box-shadow: 10px -5px 52px 20px rgba(21, 21, 28, 1);
  -moz-box-shadow: 10px -5px 52px 20px rgba(21, 21, 28, 1);
  box-shadow: 10px -5px 52px 20px rgba(21, 21, 28, 1);
}
.registration-box, .image-box{
 padding: 20px 40px;
}
.registration-box{
  background: #23222D;
}
.image-box{
  background: #1A1A23;
  text-align: center;
}
.image-box h5 {
    letter-spacing: 8.4px;
    font-weight: 100;
}
.nav-tabs{
      margin-bottom: 30px;
  border-bottom: 0px;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    background-color: transparent;
    border-color: transparent;
    border-bottom-color: #42663B;
    color: #fff;
}
</style>