/* eslint-disable import/no-unresolved */
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { applyMediaQuery } from './mediaQuery';

const GlobalStyle = createGlobalStyle`

  ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
  #root, body, html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;

     /* font-size 1em = 10px on default browser settings */
    font-size: 62.5%;
    // font-family: 'Apple SD Gothic Neo',sans-serif;
    // font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    font-family: 'Noto Sans Display', 'AppleSDGothicNeo', 'Noto Sans KR',sans-serif;
  }
   * {
  
    box-sizing: border-box;
    ::-webkit-scrollbar {
      //
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    &:hover::-webkit-scrollbar-thumb {
      background-color: #bfbfbf;
      border-radius: 18px;
    }
  }
    img{
    background-color: transparent;
  }
    a{
    margin:0;
    padding:0;
    text-decoration: none;
  }

    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            /*fill: #f2f3f4;*/
        }
    }
    .pc-tablet-only {
        display: block;
       ${applyMediaQuery('mobile')} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
     ${applyMediaQuery('tablet')}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
       ${applyMediaQuery('mobile')} {
            display: block;
        }
    }
`;

export default GlobalStyle;
