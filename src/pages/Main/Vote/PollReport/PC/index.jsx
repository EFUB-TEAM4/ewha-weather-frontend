/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */

import React, { useEffect, useState } from 'react';
import Carousel from 'components/Common/Carousel';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const setting = {
  width: '100%',
  padding: '1.5rem 0',
  backgroundColor: 'transparent',
};
function PCPollReport() {
  return <Carousel data={data} type="vote" slideCount={3} setting={setting} />;
}

export default PCPollReport;
