/* eslint-disable import/no-unresolved */
import React from "react";
import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

function App() {
  return <StyledRoot>App</StyledRoot>;
}

export default App;

const StyledRoot = styled.div`
  color: ${({ theme: { color } }) => color.red};
  font-family: "Noto Sans";
  font-size: ${({ theme: { font } }) => font.size.large};
  font-weight: ${({ theme: { font } }) => font.weight.light};
  ${applyMediaQuery("mobile")} {
    color: ${({ theme: { color } }) => color.greenDarkest};
  }
`;
