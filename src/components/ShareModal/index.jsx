/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { CloseModal } from 'assets';
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
        <Close onClick={handle} src={CloseModal} />
        <Content>{children}</Content>
      </ModalContainer>
    </StyledRoot>
  );
}

export default ShareModal;
