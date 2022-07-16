/* eslint-disable import/no-unresolved */
import React from "react";
import { RecSun } from "assets";
import { StyledRoot, Text } from "./style";

function Login() {
  return (
    <StyledRoot>
      {/* 로그인 */}
      <Text>Login</Text>
      <img src={RecSun} alt="RecSunny" />
    </StyledRoot>
  );
}

export default Login;
