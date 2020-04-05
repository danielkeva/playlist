<template>
  <section class="video-player">
    <iframe :src="video.url" frameborder="0" width="420" height="345"></iframe>
    <p class="video-title">{{video.title}}</p>
  </section>
</template>

<script>
export default {
  props: {
    video: Object,
    required: true
  },
};
</script>
<style lang="scss">
.video-player {
  align-self: center;
}
</style>