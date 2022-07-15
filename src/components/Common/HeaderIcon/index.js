/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { User } from 'assets';
import {
  StyledRoot,
  ToolTipArrow,
  ToolTip,
  IconButton,
  Image,
  StyledLink,
  Line,
  LogoutButton,
} from './style';

function HeaderIcon() {
  const [isClicked, setIsClicked] = useState(0);

  return (
    <StyledRoot>
      <IconButton type="button" onClick={() => setIsClicked(prev => !prev)}>
        <Image src={User} alt="HeaderIcon" />
      </IconButton>
      {isClicked ? (
        <div>
          <ToolTipArrow />
          <ToolTip>
            <StyledLink to="/MyPage">마이페이지</StyledLink>
            <Line />
            <LogoutButton>로그아웃</LogoutButton>
          </ToolTip>
        </div>
      ) : null}
    </StyledRoot>
  );
}

export default HeaderIcon;
