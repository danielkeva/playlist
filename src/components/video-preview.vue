<template>
  <div class="video-preview">
    <img :src="video.imgs.medium.url" />
    <div>{{video.title}}</div>
    <button>Play</button>
  </div>
</template>

<script>
export default {
  props: {
    video: Object,
    required: true
  }
}
</script>

<style>
</style>