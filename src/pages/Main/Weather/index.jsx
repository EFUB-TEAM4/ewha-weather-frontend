/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
import React from 'react';
import html2canvas from 'html2canvas';
// import { MainBear } from 'assets';
import { BearAvater } from 'components';
import uploadImgur from 'apis/Imgur/uploadImgur.api';
import TempReport from './TempReport';
import WeatherReport from './WeatherReport';
import { StyledRoot, BearSection, WeatherSection } from './style';
import { Title, ContentSection } from '../style';

// 곰돌이 아바타 로컬에 저장하는 함수
function onSaveAs(uri, filename) {
  console.log('onSaveAs');
  const link = document.createElement('a');
  link.href = uri;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 곰돌이 아바타 캡쳐하는 함수 : 곰돌이 아바타 로컬 저장 버튼 클릭
function getLocalPngBtn() {
  window.scrollTo(0, 0);
  const date = new Date(); // 현재 시간 이용해 파일명 지정
  html2canvas(document.getElementById('BearAvater')).then(canvas => {
    onSaveAs(canvas.toDataURL('image/png'), `${date}_BearAvater.png`);
  });
}

// canvas로 얻은 dataURI -> Blob으로 전환
function dataURLtoBlob(dataurl) {
  // console.log(dataurl)
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

// blob 곰돌이 -> Imgur 서버 post : 곰돌이 이미지 링크 받는 함수
async function postImgur(base64url) {
  // console.log(base64url);
  const blob = dataURLtoBlob(base64url);
  // console.log(blob);
  const formData = new FormData();
  formData.append('image', blob);

  // console.log(formData);
  const {
    data: {
      data: { link },
    },
  } = await uploadImgur(formData);
  return link;
}

function Weather() {
  // const [ImgURL, setUrl] = useState('');

  // 곰돌이 아바타 링크 받는 함수 : 곰돌이 아바타 공유 버튼 클릭
  async function postImgurBtn() {
    window.scrollTo(0, 0);

    html2canvas(document.getElementById('BearAvater')).then(async canvas => {
      const ImgUrl = await postImgur(canvas.toDataURL('image/jpg', 1.0));
      console.log(ImgUrl);
    });
  }

  /*  async function shareTwitter() {
    const sendText = '트위터 날씨공유'; // 전달할 텍스트
    console.log(sendText);
    const shareURL = `http://twitter.com/share?url=${encodeURI(
      ImgURL,
    )}&text=${sendText}`;
    window.open(shareURL, 'tweetPop', 'width=486, height=286,scrollbars=yes');
  } */

  return (
    <StyledRoot>
      <Title>오늘의 이화 날씨</Title>
      <ContentSection>
        <BearSection>
          <BearAvater showOptions />
          {/* <BearAvater showOptions={false} /> */}
        </BearSection>

        <WeatherSection>
          <WeatherReport />
          <TempReport />
        </WeatherSection>
        {/* <button type="button" onClick={postImgurBtn}>
          이미지 url 저장
        </button>
        <button type="button" onClick={getLocalPngBtn}>
          트위터 공유
        </button> */}
      </ContentSection>
    </StyledRoot>
  );
}

export default Weather;
