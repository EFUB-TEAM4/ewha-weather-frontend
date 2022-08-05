/* eslint-disable react/no-array-index-key */
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
import { TimeCard, PCPollCard } from 'components';
import { StyledRoot, StyledSlider } from './style';

function Carousel({ data, type, slideCount, setting }) {
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
          {type === 'time' &&
            data.map((d, idx) => <TimeCard data={d} key={idx} />)}
          {type === 'vote' &&
            data.map((d, idx) => <PCPollCard data={d} key={idx} />)}
        </StyledSlider>
      )}
    </StyledRoot>
  );
}

export default Carousel;
