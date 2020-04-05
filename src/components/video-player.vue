<template>
  <section class="video-player">
    <iframe class="player" :src="video.url" frameborder="0" width="720" height="445"></iframe>
    <p class="video-title">{{video.title}}</p>
    <p class="video-desc">{{video.desc}}</p>
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
  p {
    max-width: 720px;
    text-align: left;
  }
  .player {
    margin-top: 50px;
  }
  .video-title {
    font-size: 1.2rem;
    font-weight: 900;
  }
}
</style>