/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */

import React from 'react';
import {
  TempLeftArrow,
  TempRightArrow,
  VoteLeftArrow,
  VoteRightArrow,
} from 'constants/arrow';
import { StyledRoot, StyledSlider } from './style';
import TimeCard from '../../TempReport/TimeCard';
import PollCard from '../../PollReport/PollCard';

function Carousel({ data, type, slideCount, setting }) {
  console.log(type, data, setting);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slideCount,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: type === 'time' ? <TempRightArrow /> : <VoteRightArrow />,
    prevArrow: type === 'time' ? <TempLeftArrow /> : <VoteLeftArrow />,
  };

  return (
    <StyledRoot>
      {setting && (
        <StyledSlider
          {...settings}
          width={setting.width}
          padding={setting.padding}
          backgroundColor={setting.backgroundColor}
        >
          {type === 'time' ? data.map(d => <TimeCard data={d} />) : null}
          {type === 'vote' ? data.map(d => <PollCard data={d} />) : null}
        </StyledSlider>
      )}
    </StyledRoot>
  );
}

export default Carousel;
