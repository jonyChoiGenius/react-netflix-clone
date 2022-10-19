import axios from "axios";

// 같은 요청을 여러번 반복하기 위해 baseURL, Prams, Fetch(requests.js)를 나누어 저장

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: "ko-KR",
  },
});

export default instance;
