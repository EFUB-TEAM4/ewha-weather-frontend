import styled from 'styled-components';

const StyledRoot = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BearAvaterSection = styled.div``;

const SkyImg = styled.img``;

const SchoolImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`;

const WeatherImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`;

const BearImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`;

const Options = styled.button`
  z-index: 100;
  border-radius: 0.6rem;
  width: 5.2rem;
  height: 3.2rem;
  background-color: ${props => props.color};
  position: absolute;
  left: 1.3rem;
  top: 1.3rem;
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  font-size: ${({ theme: { font } }) => font.size.semiSmall};
  color: ${({ theme: { color } }) => color.white};
`;

const CancelBtn = styled.button`
  position: absolute;
  top: 1.3rem;
  left: 1.3rem;
  z-index: 100;

  img {
    width: 2.4rem !important;
    height: 2.4rem !important;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export {
  StyledRoot,
  BearAvaterSection,
  SkyImg,
  SchoolImg,
  WeatherImg,
  BearImg,
  Options,
  CancelBtn,
};
