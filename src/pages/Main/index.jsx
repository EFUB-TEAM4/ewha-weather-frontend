/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { IsEwha } from 'utils';
import LoginState from 'state/loginState';
import currentUser from 'apis/User.apis';
import { HeaderIcon as UserIcon } from 'components';
import { useWindowWidth, useQueryString, usePrivateAxios } from 'hooks';
import Weather from './Weather';
import Vote from './Vote';
import { StyledRoot, MainRoot, MainContainer } from './style';

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const navigation = useNavigate();
  const token = useQueryString('token') || localStorage.getItem('token');
  const width = useWindowWidth();
  const privateAxios = usePrivateAxios(token);

  const validateUser = async () => {
    const { email } = await currentUser(privateAxios);

    if (IsEwha(email)) {
      setIsLoggedIn(true);
      navigation('/');
    } else {
      localStorage.clear('token');
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      validateUser();
    } else {
      localStorage.clear('token');
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <StyledRoot>
      <UserIcon />
      <MainRoot>
        <MainContainer>
          <Weather />
          <Vote width={width} />
        </MainContainer>
      </MainRoot>
    </StyledRoot>
  );
}

export default Main;
