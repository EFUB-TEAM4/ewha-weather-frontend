/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { colors } from 'styles/styleOptions';
import BearOptions from 'pages/Main/BearOptions';
import { School, SkyDark, Snow, Bear, MoreBtn, CancelBtn } from 'assets';

import {
  StyledRoot,
  Options,
  BearAvaterSection,
  SkyImg,
  SchoolImg,
  WeatherImg,
  BearImg,
  Cancel,
} from './style';

/* const urls=[
  "https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/bear/sky/3night.png",
  "https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/bear/season/summer.png",
  "https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/bear/tmp/23.png"
]


function loadImg(){
  const container=document.getElementById("BearAvater");
urls.map((url)=>{

  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext('2d');
  
  // 새로운 이미지 객체를 만듬
  const img = new Image();

  img.crossOrigin = "anonymous"; // 핵심

  img.src = `${url}?timestamp=" + (new Date().getTime())`;
  img.onload = function(){
    ctx.drawImage(img, 0, 0);
  }
ctx.globalCompositeOperation = "source-over";
container.appendChild(canvas)

 
})


} 




function drawCanvas() {

  const urlsArray=[
    "https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/bear/sky/3night.png",
    "https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/bear/season/summer.png",
    "https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/bear/tmp/23.png"
  ]

  const urlscanvas = [];
  const container=document.getElementById("BearAvater");
  const canvas=document.createElement("canvas");
  const context = canvas.getContext("2d");
  container.appendChild(canvas);
  let loadCount = 0;
  for (let i = 0; i < urlsArray.length; i++) {
    const img = new Image();
    img.crossOrigin = "anonymous"; // 핵심
    img.src =urlsArray[i];
    
    console.log(img)
    urlscanvas.push(img);

    img.onload = function() {
       if(++loadCount === urlsArray.length) {
          for(let j=0; j < urlsArray.length; j++) {
             context.drawImage(urlscanvas[j], 0, 0);
          }
       }
    };
  }
}; */

function BearAvater({ showOptions }) {
  const [bearOption, setBearOption] = useState(false);

  console.log(bearOption);
  return (
    <StyledRoot>
      <BearAvaterSection id="BearAvater">
        <SkyImg src={SkyDark} alt="sky" />
        <SchoolImg src={School} alt="school" />
        <WeatherImg src={Snow} alt="snow" crossorigin="anonymous" />
        <BearImg src={Bear} alt="bear" crossorigin="anonymous" />
      </BearAvaterSection>

      {showOptions && (
        <>
          {!bearOption && (
            <Options
              onClick={() => setBearOption(!bearOption)}
              color={colors.white}
            >
              <img src={MoreBtn} alt="more Options" />
            </Options>
          )}
          {bearOption && (
            <>
              <Cancel onClick={() => setBearOption(!bearOption)}>
                <img src={CancelBtn} alt="closeBearOption" />
              </Cancel>
              <BearOptions />
            </>
          )}
        </>
      )}
    </StyledRoot>
  );
}

export default BearAvater;
