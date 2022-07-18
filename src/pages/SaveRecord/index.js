/* eslint-disable import/no-unresolved */
import React from 'react';
import { RecSun } from 'assets';
import { useParams } from 'react-router-dom';
import { StyledRoot, Text } from './style';

function SaveRecord() {
  const params = useParams();
  return (
    <StyledRoot>
      <Text>SaveRecord</Text>
      {params.date}
      <img src={RecSun} alt="RecSunny" />
    </StyledRoot>
  );
}

export default SaveRecord;
