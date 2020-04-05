const KEY = 'AIzaSyDgE4Y-tyaTRAD-6hQW-nTSO547pkald3c';
import axios from 'axios'
export const youtubeService = {
    getVideos
}

async function getVideos(keywords = 'BB king') {
    try {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${KEY}&q=${keywords}`)
        let videos = res.data.items.map(item => {
            return {
                id: item.id.videoId,
                title: item.snippet.title,
                desc: item.snippet.description,
                imgs: item.snippet.thumbnails
            }
        })
        console.log(res)
        return videos
    } catch (err) {
        console.log('err', err)
    }
}

