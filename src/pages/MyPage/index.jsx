/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentUser } from 'apis/User.apis';
import { useInput, usePrivateAxios, logout } from 'hooks';
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
  const [userData, setUserData] = useState({});
  const privateAxios = usePrivateAxios();
  const getUser = async () => {
    const response = await currentUser(privateAxios);
    setUserData(response);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <StyledRoot>
      <DesktopHeader>
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
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
              placeholder={userData.fullName}
              value={useInput.value}
              disabled={isEditMode}
              onChange={useInput.onChange}
            />
            <EmailText>{userData.email}</EmailText>
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
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
      </MobileFooter>
    </StyledRoot>
  );
}

export default MyPage;
