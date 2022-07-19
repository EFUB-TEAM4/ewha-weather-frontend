/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { MobilePollCard } from 'components';
import { StyledRoot } from './style';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function MobilePollReport() {
  return (
    <StyledRoot>
      {data.map((d, idx) => (
        <MobilePollCard data={d} key={idx} />
      ))}
    </StyledRoot>
  );
}

export default MobilePollReport;
