import Vue from 'vue'
import Vuex from 'vuex'
import { youtubeService } from '../services/youtube.service.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [],
    video: {
      url: 'https://www.youtube.com/embed/Y57kLy1vV1c',
      title: 'B B King Best Songs - B B King Greatest Hits',
      desc: 'B B King Best Songs - B B King Greatest Hits Full Album'
    }
  },
  getters: {
    videos(state) {
      return state.videos
    },
    video(state) {
      return state.video
    }
  },
  mutations: {
    setVideos(state, { videos }) {
      state.videos = videos
    },
    setVideo(state, {video}){
      let vid = {
        url: `https://www.youtube.com/embed/${video.id}`,
        title: video.title,
        desc: video.desc
      }
      state.video = vid
    }
  },
  actions: {
    async loadVideos(context, { keywords }) {
      const videos = await youtubeService.getVideos(keywords)
      context.commit({ type: 'setVideos', videos })
    }
  },
  modules: {
  }
})
