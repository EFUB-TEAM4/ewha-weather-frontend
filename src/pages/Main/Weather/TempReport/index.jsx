/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */

import React, { useEffect, useState } from 'react';
import Carousel from 'components/Common/Carousel';
import theme from 'styles/theme';
import { GetForecastWeather } from 'apis/Eweather.apis';

const setting = {
  width: '75%',
  padding: '1.5rem',
  backgroundColor: theme.color.white,
};
function TempReport() {
  const [data, setData] = useState([]);

  function getSliceData(response) {
    const currHour = new Date().getHours();
    console.log(currHour);
    let slicedResponse;

    for (let i = 0; i < response.length; i++) {
      // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
      if (Number(response[i].forecastTime.substring(0, 2)) === currHour) {
        console.log('set idx', i, response[i]);
        slicedResponse = response.slice(i);
        break;
      }
    }
    return slicedResponse || response;
  }

  const getData = async () => {
    const response = await GetForecastWeather();
    const slicedData = getSliceData(response);
    setData(slicedData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    data && (
      <Carousel data={data} type="time" slideCount={4} setting={setting} />
    )
  );
}

export default TempReport;
