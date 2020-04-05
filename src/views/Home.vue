<template>
  <div class="home">
    <video-search @search="loadVideos"></video-search>
    <video-list :videos="videos"></video-list>
    <video-player :video="video"></video-player>
  </div>
</template>

<script>
import { youtubeService } from '../services/youtube.service.js';
import {eventBus} from '../services/eventBus.service.js';
import videoList from '../components/video-list.vue';
import videoSearch from '../components/video-search.vue';
import videoPlayer from '../components/video-player.vue';
export default {
  name: 'Home',
  created() {
    this.$store.dispatch({ type: 'loadVideos' })
    eventBus.$on('playVideo', video =>{
      this.$store.commit({type: 'setVideo', video })
    })
  },
  computed: {
    videos() {
     return this.$store.getters.videos
    },
    video(){
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
