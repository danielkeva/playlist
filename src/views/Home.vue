<template>
  <div class="home">
    <video-search @search="loadVideos"></video-search>
    <video-list :videos="videos"></video-list>
  </div>
</template>

<script>
import { youtubeService } from '../services/youtube.service.js'
import videoList from '../components/video-list.vue'
import videoSearch from '../components/video-search.vue'
export default {
  name: 'Home',
  created() {
    this.$store.dispatch({ type: 'loadVideos' })
  },
  computed: {
    videos() {
     return this.$store.getters.videos
    }
  },
  methods: {
    loadVideos(keywords) {
      this.$store.dispatch({ type: 'loadVideos', keywords })
    }
  },
  components: {
    videoList,
    videoSearch
  }
}
</script>
