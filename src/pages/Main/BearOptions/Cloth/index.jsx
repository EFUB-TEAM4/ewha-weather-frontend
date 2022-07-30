/* eslint-disable import/no-unresolved */
import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { GetCurrent } from 'state/weather';
import { StyledRoot, Title, Content } from './style';

function ClothRec() {
  const {
    state,
    contents: {
      AvaterState: {
        bearResponseDto: { clothDescription },
      },
    },
  } = useRecoilValueLoadable(GetCurrent);
  const cloths = clothDescription.split('/ ');
  // console.log(cloths)
  return (
    <StyledRoot>
      <Title>오늘의 추천 옷차림</Title>
      <Content>
        {state === 'hasValue' ? (
          <div>{cloths && cloths.map(cloth => <p>{cloth}</p>)}</div>
        ) : (
          <div />
        )}
      </Content>
    </StyledRoot>
  );
}

export default ClothRec;
