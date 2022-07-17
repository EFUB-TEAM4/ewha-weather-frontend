/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
// import { applyMediaQuery } from 'styles/mediaQuery';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledRoot = styled.section`
  width: 98%;
  padding-top: 1.2rem;
  .slick-slider{
    height: fit-content;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: content-box;
    
  }
`;

const StyledSlider = styled(Slider)`
  .slick-prev {
   display: block;
    z-index: 1000;
    top: 1rem;
  left: 0;
  }

  .slick-next {
   display: block;
    z-index: 1000;
    top:1rem;
    right: 2rem;
  
  }


  .slick-list {
    position: relative;
left: 0px;
    display: block;
    width: 70%;
    margin:0 auto;
    overflow: hidden;
    border-radius: 0.6rem;
  }

  .slick-slide {
    //슬라이더  컨텐츠
    width: fit-content !important;
    margin: 0 1.5rem;

    /* cursor: pointer; */
  }

  .slick-dots {
    //슬라이드의 위치
    // bottom: 20px;
    // margin-top: 200px;
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme: { color } }) => color.white};
   
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

/* const StyledRoot = styled.div`
  border-radius: 0.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start; 
  width: 90%;

  padding: 1.2rem 0;

  ${applyMediaQuery('mobile')} {
    padding: 3rem 0;
  }
`; */

const LeftArrow = styled.div`
  padding-right: 1.3rem;
`;
const TempSection = styled.div`
  background-color: ${({ theme: { color } }) => color.white};
  /* overflow: hidden; */
  height: 90%;
  border-radius: 0.6rem;
`;
const RightArrow = styled.div`
  padding-left: 1.3rem;
`;

export { StyledRoot, StyledSlider, LeftArrow, TempSection, RightArrow };
