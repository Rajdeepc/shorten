<template>
  <div class="url-shortner-wrapper" v-show="!isUrlShortenedSuccess">
    <div class="url-not-shortened">
      <div>
        <h2>Paste the URL to be shortened</h2>
      </div>
      <b-input-group class="mt-3">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button variant="info">Shrink</b-button>
        </b-input-group-append>
      </b-input-group>
      <p>
        ShortURL.at is a free tool to shorten a URL or reduce a link.
        Use our URL Shortener to create a shortened link making it easy to remember.
      </p>
    </div>

    <!-- urlshortened show this component -->
    <div class="url-not-shortened" v-show="isUrlShortenedSuccess">
      <div>
        <h2>Copy the URL</h2>
      </div>
      <b-input-group class="mt-3">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button variant="info">Copy</b-button>
        </b-input-group-append>
      </b-input-group>
      <p>Long Url - {{longUrl}}</p>
       <!-- share component -->
       <ShareComponent url=""/>
    </div>
  </div>
</template>
<script>
import ShareComponent from '../../common-components/ShareComponent';

export default {
  name: "Dashboard",
  components:{
    ShareComponent,
  },
  data(){
    return {
      isUrlShortenedSuccess: false,
      longUrl: '',
    }
  }
};
</script>