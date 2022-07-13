/* eslint-disable import/no-unresolved */
import React from "react";
import { RecSun } from "assets";
import { StyledRoot, Text } from "./style";

function Main() {
  return (
    <StyledRoot>
      <Text>Main</Text>
      <img src={RecSun} alt="RecSunny" />
    </StyledRoot>
  );
}

export default Main;
