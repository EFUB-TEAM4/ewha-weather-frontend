/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { Kakao, Twitter, Link, Local } from 'assets';
import { ShareModal } from 'components';
import { PngBear, copyUrl, shareTwit, shareKakao } from 'utils';
import { useRecoilValueLoadable } from 'recoil';
import { GetCurrent } from 'state/weather';
import { Title, Content, ShareBtn } from './style';

function Share({ handle }) {
  const {
    contents: { CurrentWeather },
  } = useRecoilValueLoadable(GetCurrent);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <ShareModal handle={handle}>
      <Title>오늘의 이화 날씨 공유하기</Title>
      <Content>
        <ShareBtn
          onClick={() => {
            shareKakao(
              CurrentWeather.currentTemperature,
              CurrentWeather.rainfallPercentage,
            );
          }}
        >
          <img src={Kakao} alt="Kakao" />
          <span>카카오톡에 공유</span>
        </ShareBtn>
        <ShareBtn onClick={shareTwit}>
          <img src={Twitter} alt="Twitter" />
          <span>트위터에 공유</span>
        </ShareBtn>
        <ShareBtn onClick={copyUrl}>
          <img src={Link} alt="Link" />
          <span>링크 복사</span>
        </ShareBtn>
        <ShareBtn onClick={PngBear}>
          <img src={Local} alt="Local" />
          <span>이미지 다운로드</span>
        </ShareBtn>
      </Content>
    </ShareModal>
  );
}

export default Share;
