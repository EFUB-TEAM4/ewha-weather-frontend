/* eslint-disable import/no-unresolved */
import React from 'react';
import html2canvas from "html2canvas";
// import { MainBear } from 'assets';
import { BearAvater } from 'components';
import TempReport from './TempReport';
import WeatherReport from './WeatherReport';
import { StyledRoot, BearSection, WeatherSection } from './style';
import { Title, ContentSection } from '../style';


function onSaveAs(uri,filename){
  console.log("onSaveAs");
  const link=document.createElement("a");
  
  link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


function onCapture(){
  window.scrollTo(0, 0);
  const date=new Date();
  html2canvas(document.getElementById("BearAvater")).then(canvas=>{
    onSaveAs(canvas.toDataURL("image/png"),`${date}_BearAvater.png`)
  });
}


function handleBearToPng() {
  console.log('handleBearPng');

  onCapture();
};





function Weather() {
  return (
    <StyledRoot>
      <Title>오늘의 이화 날씨</Title>
      <ContentSection>
        <BearSection>
          <BearAvater />
          <button type="button" onClick={handleBearToPng}>
            이미지 저장
          </button>
        </BearSection>

        <WeatherSection>
          <WeatherReport />
          <TempReport />
        </WeatherSection>
      </ContentSection>
    </StyledRoot>
  );
}

export default Weather;
