import React from 'react';
import styled from 'styled-components';

function ClothRec() {
  return (
    <StyledRoot>
      <Title>오늘의 추천 옷차림</Title>
      <Content>
        <p>얇은 셔츠 / 후드티</p>
        <p>청바지</p>
      </Content>
    </StyledRoot>
  );
}

export default ClothRec;

const StyledRoot = styled.div`
  position: relative;
  font-family: 'Cafe24Ssurround';
  font-size: ${({ theme: { font } }) => font.size.semiSmall};
  font-weight: ${({ theme: { font } }) => font.weight.Bold};
  color: ${({ theme: { color } }) => color.white};
  z-index: 100;
  left: 8.7rem;
  top: 5.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;


const Title=styled.p`
padding-bottom: 5.7rem;
`;

const Content=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    padding: 0.3rem 0;
  }

`;
