<template>
  <div class="home">
    <video-list  :videos="videos"></video-list>
  </div>
</template>

<script>
import { youtubeService } from '../services/youtube.service.js'
import videoList from '../components/video-list.vue'
export default {
  name: 'Home',
  data() {
    return {
      videos: []
    }
  },
  async created() {
    let videos = await youtubeService.getVideos()
    this.videos = videos
    console.log(videos)
  },
  components: {
    videoList
  }
}
</script>
