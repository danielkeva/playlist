<template>
  <section>
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
</style>