/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import { BoxLeft, BoxRight, NormalLeft, NormalRight } from 'assets';

function TempLeftArrow({ currentSlide, slideCount, ...props }) {
  return <img src={BoxLeft} alt="BoxLeft" {...props} />;
}

function TempRightArrow({ currentSlide, slideCount, ...props }) {
  return <img src={BoxRight} alt="BoxRight" {...props} />;
}

function VoteLeftArrow({ currentSlide, slideCount, ...props }) {
  return <img src={NormalLeft} alt="NormalLeft" {...props} />;
}
function VoteRightArrow({ currentSlide, slideCount, ...props }) {
  return <img src={NormalRight} alt="NormalRight" {...props} />;
}

export { TempLeftArrow, TempRightArrow, VoteLeftArrow, VoteRightArrow };
