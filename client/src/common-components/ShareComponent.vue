<template>
  <div class="share-components">
    <p>Share via:</p>
    <social-sharing :url="url" inline-template>
      <div class="share-comp">
        <network network="facebook">
          <i class="fa fa-fw fa-facebook"></i> Facebook
        </network>
        <network network="linkedin">
          <i class="fa fa-fw fa-linkedin"></i> LinkedIn
        </network>
        <network network="twitter">
          <i class="fa fa-fw fa-twitter"></i> Twitter
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
export default {
  name: "ShareComponent",
  props: ["url"]
};
</script>
<style lang="scss" scoped>
.share-components {
  .share-comp {
    span {
      margin-right: 10px;
      display: inline-block;
    }
  }
}
</style>