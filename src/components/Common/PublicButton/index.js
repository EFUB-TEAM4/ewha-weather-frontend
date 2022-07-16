/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledRoot, Text } from './style';

function PublicButton({ text, onClick, isDisabled }) {
  return (
    <StyledRoot onClick={onClick} disabled={isDisabled}>
      <Text>{text}</Text>
    </StyledRoot>
  );
}

PublicButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.number.isRequired,
};

export default PublicButton;
