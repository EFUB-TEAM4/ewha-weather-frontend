/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomCalendar } from 'components';
import { User, WhiteLeft } from 'assets';
import {
  StyledRoot,
  DesktopHeader,
  LogoutButton,
  MobileHeader,
  BackButton,
  UserWrapper,
  UserTextWrapper,
  UserIcon,
  NameText,
  EmailText,
  MobileFooter,
} from './style';

function MyPage() {
  const navigate = useNavigate();
  return (
    <StyledRoot>
      <DesktopHeader>
        <LogoutButton>로그아웃</LogoutButton>
      </DesktopHeader>
      <MobileHeader>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <BackButton src={WhiteLeft} alt="BackButton" />
        </button>
      </MobileHeader>
      <UserWrapper>
        <UserIcon src={User} alt="UserIcon" />
        <UserTextWrapper>
          <NameText>이름</NameText>
          <EmailText>이메일</EmailText>
        </UserTextWrapper>
      </UserWrapper>
      <CustomCalendar />
      <MobileFooter>
        <LogoutButton>로그아웃</LogoutButton>
      </MobileFooter>
    </StyledRoot>
  );
}

export default MyPage;
