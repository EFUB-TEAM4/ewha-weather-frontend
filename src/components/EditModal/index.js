/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledRoot,
  ModalWrapper,
  ButtonWrapper,
  CancelButton,
  DeleteButton,
  Text,
} from './style';

function EditModal({ ctext1, ctext2, btext1, btext2, onClick1, onClick2 }) {
  return (
    <StyledRoot>
      <ModalWrapper>
        <Text>
          {ctext1}
          <br />
          {ctext2}
        </Text>
        <ButtonWrapper>
          <CancelButton onClick={onClick1}>{btext1}</CancelButton>
          <DeleteButton onClick={onClick2}>{btext2}</DeleteButton>
        </ButtonWrapper>
      </ModalWrapper>
    </StyledRoot>
  );
}

EditModal.propTypes = {
  ctext1: PropTypes.string.isRequired,
  ctext2: PropTypes.string.isRequired,
  btext1: PropTypes.string.isRequired,
  btext2: PropTypes.string.isRequired,
  onClick1: PropTypes.func.isRequired,
  onClick2: PropTypes.func.isRequired,
};

export default EditModal;
