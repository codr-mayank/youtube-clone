import axios from 'axios';

const KEY = 'AIzaSyD9qa-a4tb5yOw3WuHP91nJDye51ZTkKrk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
