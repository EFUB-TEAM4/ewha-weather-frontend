/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { CloseShare } from 'assets';
import {
  StyledRoot,
  Background,
  ModalContainer,
  Close,
  Content,
} from './style';

function ShareModal({ handle, children, ...rest }) {
  return (
    <StyledRoot>
      <Background onClick={handle} />
      <ModalContainer {...rest}>
        <Close onClick={handle} src={CloseShare} />
        <Content>{children}</Content>
      </ModalContainer>
    </StyledRoot>
  );
}

export default ShareModal;
