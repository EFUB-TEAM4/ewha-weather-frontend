/* eslint-disable import/no-unresolved */
import { ImgurAxios } from 'apis';

const PREFIX_URL = '/image';

export default async function uploadImgur(data) {
  try {
    const response = await ImgurAxios.post(
      `${PREFIX_URL}`,
      data,

      {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
          'content-type': 'multipart/form-data',
        },
      },
    );

    return response;
  } catch (error) {
    return error;
  }
}
