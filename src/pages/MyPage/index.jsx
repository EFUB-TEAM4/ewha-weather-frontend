/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInput } from 'hooks';
import { CustomCalendar } from 'components';
import { User, WhiteLeft, WhiteNormalPencil, WhiteOutlinePencil } from 'assets';
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
  const [isEditMode, setIsEditMode] = useState(1);
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
        <div className="UserInfoWrapper">
          <UserIcon src={User} alt="UserIcon" />
          <UserTextWrapper>
            <NameText
              placeholder="이름"
              value={useInput.value}
              disabled={isEditMode}
              onChange={useInput.onChange}
            />
            <EmailText>이메일</EmailText>
          </UserTextWrapper>
        </div>
        <button
          type="button"
          className="EditButton"
          onClick={() => {
            setIsEditMode(current => !current);
          }}
        >
          {isEditMode ? (
            <img src={WhiteNormalPencil} alt="EditButton" />
          ) : (
            <img src={WhiteOutlinePencil} alt="EditButton" />
          )}
        </button>
      </UserWrapper>
      <CustomCalendar />
      <MobileFooter>
        <LogoutButton>로그아웃</LogoutButton>
      </MobileFooter>
    </StyledRoot>
  );
}

export default MyPage;
