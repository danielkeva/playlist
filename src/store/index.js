import Vue from 'vue'
import Vuex from 'vuex'
import { youtubeService } from '../services/youtube.service.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: []
  },
  getters: {
    videos(state) {
      return state.videos
    }
  },
  mutations: {
    setVideos(state, { videos }) {
      state.videos = videos
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
