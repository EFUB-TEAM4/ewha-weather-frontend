import axios from 'axios';
import moment from 'moment';
import { serverAxios } from './index';

const PREFIX_URL = '/api/v1/calendars';

/* eslint-disable-next-line */
export const GetCalendars = async id => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}?userId=${id}`);
    // console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};
/* eslint-disable-next-line */
export const GetDetailCalendars = async id => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/${id}`);
    // console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};

export const EditCalendars = async (id, content) => {
  try {
    const { data } = await serverAxios.put(`${PREFIX_URL}/${id}`, {
      description: content,
    });
    return data;
  } catch (err) {
    return err;
  }
};

export const DeleteCalendars = async id => {
  try {
    const { data } = await serverAxios.delete(`${PREFIX_URL}/${id}`);
    return data;
  } catch (err) {
    return err;
  }
};

/* eslint-disable-next-line */
export const PostCalendars = async (Avater, CurrentWeather, text) => {
  const today = moment().format('YYYYMMDD');
  try {
    const { data } = await axios.post(
      `http://ewhaweather.com/api/v1/calendars`,
      {
        bearId: Avater.bearResponseDto.id,
        currentTemperature: CurrentWeather.currentTemperature,
        description: text,
        forecastDate: today,
        iconId: CurrentWeather.iconResponseDto.id,
        maxTemperature: CurrentWeather.maxTemperature,
        minTemperature: CurrentWeather.minTemperature,
        ptyId: Avater.ptyResponseDto.id,
        rainfallPercentage: CurrentWeather.rainfallPercentage,
        seasonId: Avater.seasonResponseDto.id,
        skyId: Avater.skyResponseDto.id,
      },
      {
        headers: { 'Access-Control-Allow-Origin': '*' },
        withCredentials: false,
      },
    );
    // console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};
