/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */

import React from 'react';
import Carousel from 'components/Common/Carousel';
import theme from 'styles/theme';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const setting = {
  width: '75%',
  padding: '1.5rem',
  backgroundColor: theme.color.white,
};
function TempReport() {
  return <Carousel data={data} type="time" slideCount={4} setting={setting} />;
}

export default TempReport;
