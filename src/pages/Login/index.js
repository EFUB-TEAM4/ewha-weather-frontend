/* eslint-disable import/no-unresolved */
import React from "react";
import { RecSun } from "assets";
import { StyledRoot, Text } from "./style";

function Login() {
  return (
    <StyledRoot>
      <Text>Login</Text>
      <img src={RecSun} alt="RecSunny" />
    </StyledRoot>
  );
}

export default Login;
