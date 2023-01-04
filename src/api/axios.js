import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key: "f7af6dd17b88fdfddece4594b37e4c53",
    language: "ko-KR"
  }

})

export default instance;