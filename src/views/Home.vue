<template>
  <div class="home">
    <video-search @search="loadVideos"></video-search>
    <div class="video-container">
      <video-list :videos="videos"></video-list>
      <video-player :video="video"></video-player>
    </div>
  </div>
</template>

<script>
import { youtubeService } from '../services/youtube.service.js';
import { eventBus } from '../services/eventBus.service.js';
import videoList from '../components/video-list.vue';
import videoSearch from '../components/video-search.vue';
import videoPlayer from '../components/video-player.vue';
export default {
  name: 'Home',
  created() {
    this.$store.dispatch({ type: 'loadVideos' })
    eventBus.$on('playVideo', video => {
      this.$store.commit({ type: 'setVideo', video })
    })
  },
  computed: {
    videos() {
      return this.$store.getters.videos
    },
    video() {
      return this.$store.getters.video
    }
  },
  methods: {
    loadVideos(keywords) {
      this.$store.dispatch({ type: 'loadVideos', keywords })
    }
  },
  components: {
    videoList,
    videoSearch,
    videoPlayer
  }
}
</script>

<style lang="scss">
.video-container {
  width:100%;
  display: flex;
  justify-content: space-evenly;
}
@media only screen and (max-width: 720px) {
  .video-container {
    
    flex-direction: column-reverse;
  }
  .player {
    width: 90vw;
    margin: 0 auto;
  }
}
</style>
