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

  const getData = async () => {
    const response = await GetForecastWeather();
    setData(response);
  };
  useEffect(() => {
    getData();
    // console.log('forecast', data);
  }, []);

  return (
    data && (
      <Carousel data={data} type="time" slideCount={4} setting={setting} />
    )
  );
}

export default TempReport;
