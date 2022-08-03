import axios from 'axios';

const serverAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: { 'Access-Control-Allow-Origin': '*' },
  withCredentials: false,
});

const privateAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  /* headers: {
    'Access-Control-Allow-Origin': `${process.env.REACT_APP_SERVER_URL}`,},
  withCredentials: true, */
});

// "https://api.imgur.com/3"
const ImgurAxios = axios.create({
  baseURL: `${process.env.REACT_APP_IMGUR_URL}`,
});

export { serverAxios, privateAxios, ImgurAxios };
