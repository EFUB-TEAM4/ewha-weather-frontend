import axios from 'axios';

const serverAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

// "https://api.imgur.com/3"
const ImgurAxios = axios.create({
  baseURL: `${process.env.REACT_APP_IMGUR_URL}`,
});

export { serverAxios, ImgurAxios };
