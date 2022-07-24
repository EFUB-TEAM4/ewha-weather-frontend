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
  width: 40.57rem;
  height: 40.042rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${applyMediaQuery('mobile')} {
    width: 26.9rem;
    height: 26.5rem;
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
  top: 2.9rem;
  right: 3.167rem;
  width: 3.62rem;
  height: 3.62rem;
  cursor: pointer;
  ${applyMediaQuery('mobile')} {
    width: 2.4rem;
    height: 2.4rem;
    top:2.0rem;
    right:2.1rem;
  }
`;

const Content = styled.div`
  position: absolute;

  left: 3.167rem;
  top: 3.318rem;

  ${applyMediaQuery('mobile')} {
    top:2.2rem;
    left: 2.2rem;
  }
`;

export { StyledRoot, Background, ModalContainer, Close, Content };
