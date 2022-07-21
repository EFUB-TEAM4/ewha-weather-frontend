/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

const StyledRoot = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalWrapper = styled.div`
  width: 35rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme: { color } }) => color.white};
`;

const ButtonWrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CancelButton = styled.button`
  background-color: ${({ theme: { color } }) => color.white};
  width: 14rem;
  height: 5rem;
  border-radius: 0.5rem;
  border: 0.15rem solid ${({ theme: { color } }) => color.greenDarker};
  font-family: 'Noto Sans';
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  font-size: ${({ theme: { font } }) => font.size.micro};
  color: ${({ theme: { color } }) => color.greenDarker};
`;

const DeleteButton = styled.button`
  background-color: ${({ theme: { color } }) => color.greenDarker};
  width: 14rem;
  height: 5rem;
  border-radius: 0.5rem;
  font-family: 'Noto Sans';
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  font-size: ${({ theme: { font } }) => font.size.micro};
  color: ${({ theme: { color } }) => color.white};
`;

const Text = styled.p`
  font-family: 'Noto Sans';
  line-height: 200%;
  color: ${({ theme: { color } }) => color.greenDarker};
  font-size: ${({ theme: { font } }) => font.size.micro};
`;

export {
  StyledRoot,
  ModalWrapper,
  ButtonWrapper,
  CancelButton,
  DeleteButton,
  Text,
};
