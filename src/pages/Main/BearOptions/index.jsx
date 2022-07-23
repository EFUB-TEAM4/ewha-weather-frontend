/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import { colors } from 'styles/styleOptions';

import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

// 곰돌이 아바타 로컬에 저장하는 함수 : canvas
function onSaveAs(uri, filename) {
  console.log('onSaveAs');
  const link = document.createElement('a');
  link.href = uri;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 곰돌이 아바타 캡쳐하는 함수 : 곰돌이 아바타 로컬 저장 버튼 클릭 :canvas
function getLocalImgBtn() {
  window.scrollTo(0, 0);
  const date = new Date(); // 현재 시간 이용해 파일명 지정
  html2canvas(document.getElementById('BearAvater')).then(canvas => {
    onSaveAs(canvas.toDataURL('image/png'), `${date}_BearAvater.png`);
  });
}

// sns 공유기능

function getShareBtn() {
  console.log('getShareBtn');
}

function getClothBtn() {
  console.log('getCloth');
}


const onDownloadBtn = () => {
  console.log("onDownload")
  domtoimage
    .toBlob(document.getElementById('BearAvater'))
    .then((blob) => {
      saveAs(blob, 'card.png');
    });
};



function BearOptions() {
  return (
    <StyledRoot>
      <OverBear />
      <Options onClick={onDownloadBtn} color={colors.greenDarker}>
        {' '}
        저장
      </Options>
      <Options onClick={getShareBtn} color={colors.blue}>
        {' '}
        공유
      </Options>
      <Options onClick={getClothBtn} color={colors.greenLighter}>
        {' '}
        착장
      </Options>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  button {
    left: 1.3rem;
  }
  button:nth-child(2) {
    top: 5.5rem;
  }
  button:nth-child(3) {
    top: 10.2rem;
  }
  button:nth-child(4) {
    top: 14.8rem;
  }
`;

const OverBear = styled.div`
  width: 31.9rem;
  height: 31.9rem;
  background-color: ${({ theme: { color } }) => color.yellowDark};
  // gitcolor:black;
  position: absolute;
  border-radius: 0.6rem;
  opacity: 0.6;
`;
const Options = styled.button`
  z-index: 100;
  border-radius: 0.6rem;
  width: 5.2rem;
  height: 3.2rem;
  background-color: ${props => props.color};
  position: absolute;
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  font-size: ${({ theme: { font } }) => font.size.micro};
  color: ${({ theme: { color } }) => color.white};
`;

export default BearOptions;
