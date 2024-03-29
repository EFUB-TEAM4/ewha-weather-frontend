/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { formatTime } from 'utils';

import { StyledRoot, Temp, Time } from './style';

function TimeCard({
  data: {
    forecastTime,
    temperature,
    iconResponseDto: { iconName, iconUrl },
  },
}) {
  return (
    <StyledRoot>
      <Time>{formatTime(forecastTime)}</Time>
      <img src={iconUrl} alt={iconName} />
      <Temp>{temperature}°</Temp>
    </StyledRoot>
  );
}

export default TimeCard;
