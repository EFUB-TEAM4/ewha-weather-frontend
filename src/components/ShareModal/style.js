/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  // position: absolute;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { color } }) => color.greyDarkest};
  opacity: 0.3;
  animation: modal-bg-show 0.3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.3;
    }
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 1rem;
  background-color: ${({ theme: { color } }) => color.white};
  min-height: 30.5rem;
  min-width: 54.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${applyMediaQuery('mobile')} {
    min-height: 35rem;
    min-width: 35rem;
  }
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 0.3;
      margin-top: 0;
    }
  }
`;

const Close = styled.img`
  z-index: 1000;
  position: absolute;
  top: 1.7rem;
  right: 1.7rem;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // top: 4.1rem;
  top: 0rem;
`;

export { StyledRoot, Background, ModalContainer, Close, Content };
