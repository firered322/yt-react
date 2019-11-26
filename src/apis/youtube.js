import axios from "axios";

const KEY = "AIzaSyBGzohujyDwin8Hl80kRpzvrxhYVP5EpgU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
