/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deviceBreakPoints } from 'constants/deviceInfo';
import { GetVotes } from 'apis/Vote.apis';
import { PCPollReport, MobilePollReport } from './PollReport';
import { StyledRoot, Button, VoteSection } from './style';
import { TitleSection, Title } from '../style';

function Vote({ width }) {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await GetVotes();
    setData(response);
  };

  useEffect(() => {
    getData();
    // console.log('Vote', data);
  }, []);

  return (
    <StyledRoot>
      <TitleSection>
        <div>
          <Title>오늘의 옷차림이 고민될 때,</Title>
          <Title>벗들에게 물어봐!</Title>
        </div>
        <Link to="vote">
          <Button>+</Button>
        </Link>
      </TitleSection>

      {data && (
        <VoteSection>
          {width <= deviceBreakPoints.mobile ? (
            <MobilePollReport data={data} />
          ) : (
            <PCPollReport data={data} />
          )}
        </VoteSection>
      )}
    </StyledRoot>
  );
}

export default Vote;
