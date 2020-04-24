<template>
  <div>
    <b-container>
      <b-table striped hover :items="myProfileData" :fields="fields">
        <template v-slot:cell(shortUrl)="row">
        <span>{{row.shortUrl}}</span>
        <a :href="row.item.longUrl" target="_blank">{{ row.item.shortUrl }}</a>
      </template>
      </b-table>
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
      email:'',
      fields: [
          {
            key: 'longUrl',
            sortable: false
          },
          {
            key: 'shortUrl',
            sortable: false,
            label: 'Short Url' 
          },
          {
            key: 'clicks',
            label: 'Clicks'
          },
          {
            key:'createdAt',
            sortable:true,
            formatter: (value, key, item) => {
              return new Date(item.createdAt)
            }
          }
        ],
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
              this.myProfileData = response
          }).catch((e) => {
              throw e
          })
      }
  }
};
</script>

<style>
</style>