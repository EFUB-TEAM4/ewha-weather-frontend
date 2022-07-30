/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { MobilePollCard } from 'components';
import { StyledRoot } from './style';

function MobilePollReport({ data }) {
  return (
    <StyledRoot>
      {data.map((d, idx) => (
        <MobilePollCard data={d} key={idx} />
      ))}
    </StyledRoot>
  );
}

export default MobilePollReport;
