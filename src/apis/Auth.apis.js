/* eslint-disable import/prefer-default-export */

import { privateAxios } from './index';

const PREFIX_URL = '/api/v1/auths';

// /api/v1/auths/refresh
export const getRefreshToken = async () => {
  try {
    const response = await privateAxios.get(`${PREFIX_URL}/refresh`);
    // console.log('getRefresh 요청', PREFIX_URL, response);
    return response;
  } catch (err) {
    return err;
  }
};
