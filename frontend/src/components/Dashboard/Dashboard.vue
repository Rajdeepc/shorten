<template>
  <div class="url-shortner-wrapper">
    <div class="url-not-shortened" v-show="!isUrlShortenedSuccess">
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
        <b-form-input v-model="shortUrl" id="shortUrlGet"></b-form-input>
        <b-input-group-append>
          <b-button variant="info" @click="copyToClip(targetElementById('shortUrlGet'))">Copy</b-button>
        </b-input-group-append>
      </b-input-group>
      <p>Long Url - {{longUrl}}</p>
      <!-- share component -->
      <div>
        <ShareComponent url />
      </div>
      <div class="premium-features text-center" v-show="!hasPremium">
        <div>
          <h2>Want More? Try Premium Features!</h2>
        </div>
        <p>Custom short links, powerful dashboard, detailed analytics, API, UTM builder, QR codes, browser extension, 50+ app integrations and support. Only $9/month.</p>
        <b-button variant="primary">Get Premium</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import ShareComponent from "../../common-components/ShareComponent";
import commonUtil from '../../utils/commonUtil';

export default {
  name: "Dashboard",
  components: {
    ShareComponent
  },
  data() {
    return {
      isUrlShortenedSuccess: true,
      longUrl: "",
      shortUrl:"hiiiii",
      hasPremium: false
    };
  },
  methods :{
    copyToClip: commonUtil.copyToClipBoard,
    targetElementById: commonUtil.targetElementById
  }
};
</script>
<style lang="scss" scoped>
.url-not-shortened {
  p {
    margin-top: 10px;
    font-size: 11px;
    color: #fafafa;
    opacity: 0.4;
  }
}
.premium-features {
  margin-top: 30px;
  background: #23222d;
  padding: 40px;
}
</style>