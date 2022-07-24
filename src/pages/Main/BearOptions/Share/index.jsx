/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import { Local, Twitter, Kakao, Insta } from 'assets';
import { ShareModal, BearAvater } from 'components';

function Share({ handle }) {
  return (
    <ShareModal handle={handle}>
      <Title>오늘의 이화 날씨 공유하기</Title>
      <Content>
        <BearAvater showOptions={false} className="BearAvater" />
        <Weather>
          <p>지금 이화는 20°C, 강수 확률은 10%입니다.</p>
          <p>오늘 최고 기온은 20°C,최저 기온은 20°C일 예정이에요!</p>
        </Weather>
      </Content>
      <SNSSection>
        <button type="button">
          <img src={Kakao} alt="KakaoShare" />
        </button>
        <button type="button">
          <img src={Twitter} alt="KakaoShare" />
        </button>
        <button type="button">
          <img src={Insta} alt="KakaoShare" />
        </button>
        <button type="button">
          <img src={Local} alt="KakaoShare" />
        </button>
      </SNSSection>
    </ShareModal>
  );
}

export default Share;

const Title = styled.p`
  padding-top: 4.1rem;
  font-family: 'Cafe24Ssurround';
  font-size: ${({ theme: { font } }) => font.size.semiMedium};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  color: ${({ theme: { color } }) => color.greenDarker};
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2.3rem 9.7rem;
  border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greenLightest};

  section {
    width: 8.6rem;
    height: 8.6rem;
  }
`;

const Weather = styled.div`
  font-family: 'Cafe24SsurroundAir';
  font-size: 1rem;
  font-weight: ${({ theme: { font } }) => font.weight.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1.9rem;
  p:nth-child(1) {
    padding-bottom: 1rem;
  }
`;

const SNSSection = styled.div`
  padding: 2.3rem 0 2.9rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 35rem;
`;
