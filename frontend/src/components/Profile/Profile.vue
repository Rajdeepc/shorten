<template>
  <div>
    <b-container>
      <b-table striped hover :items="myProfileData"></b-table>
    </b-container>
  </div>
</template>

<script>
import Service from "../../utils/api";


export default {
  name: "Profile",
  data() {
    return {
      myProfileData: [],
      email:''
    };
  },
  mounted(){
    const sessionData = JSON.parse(sessionStorage.getItem('user'))
    if(sessionData && sessionData.emailId && sessionData.authToken){
        this.email = sessionData.emailId
        this.getMyProfileData(this.email)
    }
  },
  methods:{
      getMyProfileData(emailId){
          Service.getMyProfileData(emailId)
          .then(response => {
              this.myProfileData = response.profileData
          }).catch((e) => {
              throw e
          })
      }
  }
};
</script>

<style>
</style>