/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top:1.2rem ;
`;

const StyledSlider = styled(Slider)`
  width: ${props => props.width};
  padding: ${props => props.padding};
  display: block;

  .slick-list {
    background-color: ${props => props.backgroundColor || 'transparent'};
    border-radius: 0.6rem;
  }

  .slick-next,
  .slick-prev {
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    border: none;
    z-index: 99 !important;

    // top: 40%;
  }

  .slick-prev {
    left: -4rem;
  }

  .slick-next {
    right: -4rem;
  }
`;

export { StyledRoot, StyledSlider };
