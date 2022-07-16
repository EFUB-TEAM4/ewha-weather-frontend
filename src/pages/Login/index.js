/* eslint-disable import/no-unresolved */
import React from 'react';
import { LoginBear, GoogleBtn } from 'assets';
import {
  StyledRoot,
  Header,
  BtnSection,
  Article,
  LoginBtn,
  CheckSection,
  LoginLabel,
  LoginCheck,
} from './style';

function Login() {
  return (
    <StyledRoot>
      <Header>
        <img src={LoginBear} alt="LoginBear" />
      </Header>
      <Article>
        <BtnSection>
          <LoginBtn>
            <img src={GoogleBtn} alt="GoogleBtn" />
            <span>구글 계정으로 로그인</span>
          </LoginBtn>
        </BtnSection>

        <CheckSection>
          <LoginLabel htmlFor="KeepLoggedIn">
            <LoginCheck
              id="KeepLoggedIn"
              type="checkbox"
              name="KeepLoggedIn"
              value="false"
            />
            로그인 상태 유지
          </LoginLabel>
        </CheckSection>
      </Article>
    </StyledRoot>
  );
}

export default Login;
