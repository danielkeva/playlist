<template>
  <div class="video-preview">
    <img :src="video.imgs.default.url" />
    <div class="video-title">{{video.title}}</div>
    <button @click="playVideo">Play</button>
  </div>
</template>

<script>
import { eventBus } from '../services/eventBus.service.js';
export default {
  props: {
    video: Object,
    required: true
  },
  methods: {
    playVideo() {
      eventBus.$emit('playVideo', this.video);
    }
  }
}
</script>

<style lang="scss">
.video-preview {
  display: flex;
  border: 2px solid rgba(114, 114, 114, 0.66);
  border-radius: 6px;
  padding: 10px;
  align-items: center;
  margin-bottom: 20px;
  img {
    margin-right: 10px;
  }
  .video-title {
    max-width: 250px;
    margin-right: 10px;
    /* text-align: center; */
  }
  button {
    align-self: flex-start;
    border: 1px solid rgb(70, 112, 205);
    color: rgb(70, 112, 205);
    background: none;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    &:hover {
      color: #fff;
      background-color: rgb(70, 112, 205);
    }
  }
}
</style>