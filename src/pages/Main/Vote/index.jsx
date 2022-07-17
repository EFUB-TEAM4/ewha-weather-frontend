import React from 'react';
import { StyledRoot, Button } from './style';
import { Title, TitleSection, ContentSection } from '../style';

function handleBtnClick(){
  console.log("Vote handleBtnclick")
}


function Vote() {
  return (
    <StyledRoot>
      <TitleSection>
        <div>
          <Title>오늘의 옷차림이 고민될 때,</Title>
          <Title>벗들에게 물어봐!</Title>
        </div>
        <Button onClick={handleBtnClick}>+</Button>
      </TitleSection>
      <ContentSection>콘텐츠</ContentSection>
    </StyledRoot>
  );
}

export default Vote;
