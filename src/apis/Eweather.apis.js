import { serverAxios } from './index';

const PREFIX_URL = '/api/v1/eweathers';

export const GetCurrentWeather = async () => {
  try {
    const {
      data: {
        body: { eweather },
      },
    } = await serverAxios.get(`${PREFIX_URL}/current`);

    return eweather;
  } catch (err) {
    return err;
  }
};

export const GetForecastWeather = async () => {
  try {
    const {
      data: {
        body: { forecast },
      },
    } = await serverAxios.get(`${PREFIX_URL}/forecast`);

    return forecast;
  } catch (err) {
    return err;
  }
};
