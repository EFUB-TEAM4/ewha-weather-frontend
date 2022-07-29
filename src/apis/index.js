import axios from 'axios';

const serverAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: { 'Access-Control-Allow-Origin': '*' },
  withCredentials: false,
});

const PrivateAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: { 'Content-Type': 'application/json' },
});

// "https://api.imgur.com/3"
const ImgurAxios = axios.create({
  baseURL: `${process.env.REACT_APP_IMGUR_URL}`,
});

export { serverAxios, PrivateAxios, ImgurAxios };
