import axios from 'axios';

const serverAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export default serverAxios;
