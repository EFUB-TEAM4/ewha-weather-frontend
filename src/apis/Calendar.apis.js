import { serverAxios } from './index';
// import axios from 'axios';

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
export const GetDetailCalendars = async (date, id) => {
  try {
    const { data } = await serverAxios.get(
      `${PREFIX_URL}?forecastDate=${date}&userId=${id}`,
    );
    // console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};

/* eslint-disable-next-line */
export const EditCalendars = async () => {
  try {
    const { data } = await serverAxios.put(
      `${PREFIX_URL}/bbf893fa-41b4-4e2c-8de3-358ce15aac6e`,
      { description: '내용 수정' },
    );
    // console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};
