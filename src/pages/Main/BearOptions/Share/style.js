/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const Title = styled.p`
  font-size: ${({ theme: { font } }) => font.size.semiMedium};
  font-weight: ${({ theme: { font } }) => font.weight.semiBold};
  color: ${({ theme: { color } }) => color.greenDarker};

  ${applyMediaQuery('mobile')} {
    font-size: ${({ theme: { font } }) => font.size.small};
  }
`;

const Content = styled.div`
  // border-bottom: 0.1rem solid ${({ theme: { color } }) =>
    color.greenLightest};
  padding-top: 3.016rem;
  section {
    width: 8.6rem;
    height: 8.6rem;
  }
  ${applyMediaQuery('mobile')} {
    padding-top: 2rem;
  }
`;

const ShareBtn = styled.button`
  font-size: ${({ theme: { font } }) => font.size.semiSmall};
  font-weight: ${({ theme: { font } }) => font.weight.semiBold};
  color: ${({ theme: { color } }) => color.greenDarker};
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    width: 6.033rem;
    height: 6.033rem;
  }
  ${applyMediaQuery('mobile')} {
    font-size: ${({ theme: { font } }) => font.size.micro};
    img {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export { Title, Content, ShareBtn };
