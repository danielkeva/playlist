<template>
  <div class="video-preview">
    <img :src="video.imgs.medium.url" />
    <div>{{video.title}}</div>
    <button @click="playVideo">Play</button>
  </div>
</template>

<script>
import {eventBus} from '../services/eventBus.service.js';
export default {
  props: {
    video: Object,
    required: true
  },
  methods:{
    playVideo(){
      eventBus.$emit('playVideo', this.video);
    }
  }
}
</script>

<style>
</style>