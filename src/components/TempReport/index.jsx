/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */

import React from 'react';
import { BoxLeft, BoxRight } from 'assets';
import TimeCard from './TimeCard';
import { StyledRoot, StyledSlider } from './style';

function TempReport() {
  const settings = {
    dots: false, // 슬라이드 밑에 점 보이게
    infinite: false, // 맨 앞과 맨 뒤 연결해 무한으로 넘어가도록
    speed: 500, // 넘기는 속도
    slidesToShow: 4, // 스크린에 보여지는 슬라이드 개수
    slidesToScroll: 1, // n장씩 뒤로 넘어가게 함
    nextArrow: <SampleNexrArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <StyledRoot>
      <StyledSlider {...settings}>
        <TimeCard />
        <TimeCard />
        <TimeCard />
        <TimeCard />
        <TimeCard />
        <TimeCard />
        <TimeCard />
        <TimeCard />
        <TimeCard />
        <TimeCard />
        <TimeCard />
        <TimeCard />
      </StyledSlider>
    </StyledRoot>
  );
}

export default TempReport;

function SamplePrevArrow({ className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <img src={BoxLeft} alt="BoxLeft" />
    </button>
  );
}

function SampleNexrArrow({ className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <img src={BoxRight} alt="BoxRight" />
    </button>
  );
}
