/* eslint-disable import/no-unresolved */
import { ImgurAxios } from 'apis';

const PREFIX_URL = '/image';

export default async function uploadImgur(data) {
  // console.log(`uploadImgur ${process.env.REACT_APP_IMGUR_URL}${PREFIX_URL}`);
  // console.log(`Client-Id ${process.env.REACT_APP_IMGUR_CLIENT_ID}`);
  // console.log('data', data); // formData는 콘솔에 찍었을 때 아무것도 안 보이는 것이 정상임
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
    // console.log('uploadImgur success', response);
    return response;
  } catch (error) {
    // console.log('uploadImgur error', error);
    return error;
  }
}
