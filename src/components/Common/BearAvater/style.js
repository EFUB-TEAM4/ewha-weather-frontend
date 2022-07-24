import styled from 'styled-components';

const StyledRoot = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BearAvaterSection = styled.div`
  img {
    width: 100%;
    height: 100%;
    // width: 31.9rem;
    // height: 31.9rem;
    border-radius: 0.6rem;
  }
`;

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
  width: 4rem;
  height: 2.4rem;

  background-color: ${props => props.color};
  position: absolute;
  left: 1.3rem;
  top: 1.3rem;
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  font-size: ${({ theme: { font } }) => font.size.semiSmall};
  color: ${({ theme: { color } }) => color.greenDarker};
`;

const Cancel = styled.button`
  position: absolute;
  border-radius: 0.6rem;

  top: 1.6rem;
  left: 1.6rem;
  z-index: 100;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme: { color } }) => color.white};
`;

export {
  StyledRoot,
  BearAvaterSection,
  SkyImg,
  SchoolImg,
  WeatherImg,
  BearImg,
  Options,
  Cancel,
};
