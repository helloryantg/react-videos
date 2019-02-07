import axios from 'axios';

const KEY = 'AIzaSyCH9tSNIrWD7V-DkSj7dDzpDraZwN9F3Sw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});