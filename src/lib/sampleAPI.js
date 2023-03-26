const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

export const videoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=${API_KEY}`