/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */

import React, { useEffect, useState } from 'react';
import Carousel from 'components/Common/Carousel';

const setting = {
  width: '100%',
  padding: '1.5rem 0',
  backgroundColor: 'transparent',
};
function PCPollReport({ data }) {
  return <Carousel data={data} type="vote" slideCount={3} setting={setting} />;
}

export default PCPollReport;
