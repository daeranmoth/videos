import axios from "axios";

const KEY = 'AIzaSyDPI132ajE1cEh1rKSxifdG3Z6kUrnTe88';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
