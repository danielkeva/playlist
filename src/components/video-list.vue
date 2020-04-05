<template>
  <section class="video-list">
    <video-preview v-for="video in videos" :key="video.id" :video="video"></video-preview>
  </section>
</template>

<script>
import videoPreview from './video-preview.vue'
export default {
  props: {
    videos: Array,
    required: true
  },
  components: {
    videoPreview
  }
}
</script>

<style>
.video-list {
  display: flex;
  flex-direction: column;
}
</style>