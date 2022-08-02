/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { IsEwha } from 'utils';
import LoginState from 'state/loginState';
import { currentUser } from 'apis/User.apis';
import { HeaderIcon as UserIcon } from 'components';
import { useWindowWidth, useQueryString, usePrivateAxios } from 'hooks';
import Weather from './Weather';
import Vote from './Vote';
import { StyledRoot, MainRoot, MainContainer } from './style';

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  const token = useQueryString('token');
  const width = useWindowWidth();
  const privateAxios = usePrivateAxios(token);

  const validateUser = async () => {
    const { email, fullName, id } = await currentUser(privateAxios);
    // console.log('Main Validate User', email, fullName, id);
    if (IsEwha(email)) {
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    if (token) {
      validateUser();
    } else {
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
