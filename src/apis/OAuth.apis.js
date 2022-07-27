/* eslint-disable import/prefer-default-export */
// import { OAuthAxios } from "./index";
import axios from 'axios';

const PREFIX_URL = 'http://ewhaweather.com/oauth2/authorization/google';

export const PostLogin = async () => {
  // console.log('Post Login api 요청', PREFIX_URL);
  try {
    const response = await axios.post(PREFIX_URL, {}, {});
    // console.log(response);
    return response;
  } catch (err) {
    return err;
  }
};
