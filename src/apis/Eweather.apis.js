import { serverAxios } from './index';
// import axios from 'axios';

const PREFIX_URL = '/api/v1/eweathers';

export const GetCurrentWeather = async () => {
  try {
    const {
      data: {
        body: { eweather },
      },
    } = await serverAxios.get(`${PREFIX_URL}/current`);
    // console.log(eweather);
    return eweather;
  } catch (err) {
    return err;
  }
};

export const GetForecastWeather = async () => {
  // console.log('GetForecastWeather api 요청', PREFIX_URL);
  try {
    const {
      data: {
        body: { forecast },
      },
    } = await serverAxios.get(`${PREFIX_URL}/forecast`);
    // console.log(data);
    return forecast;
  } catch (err) {
    return err;
  }
};
