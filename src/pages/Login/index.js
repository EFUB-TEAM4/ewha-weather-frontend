/* eslint-disable import/no-unresolved */
import React from 'react';
import { LoginBear, GoogleBtn } from 'assets';
// import { OAuthLogin as handleLoginBtn } from 'utils';
import { createOAuthUri } from 'utils';
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
  // const { loginUrl } = useGoogle();
  return (
    <StyledRoot>
      <Header>
        <img src={LoginBear} alt="LoginBear" />
      </Header>
      <Article>
        <BtnSection>
          <LoginBtn href={createOAuthUri}>
            <img src={GoogleBtn} alt="GoogleBtn" />
            <span>구글 계정으로 로그인</span>

            {/* <div id="SignIn" /> */}
          </LoginBtn>
        </BtnSection>

        <CheckSection>
          <LoginLabel htmlFor="KeepLoggedIn">
            <LoginCheck
              id="KeepLoggedIn"
              type="checkbox"
              name="KeepLoggedIn"
              value="false"
              checked
            />
            로그인 상태 유지
          </LoginLabel>
        </CheckSection>
      </Article>
    </StyledRoot>
  );
}

export default Login;
