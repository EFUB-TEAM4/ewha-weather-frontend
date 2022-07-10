/* eslint-disable import/no-unresolved */
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { applyMediaQuery } from "./mediaQuery";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@500;600&family=Noto+Sans:wght@500;700&display=swap');

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
    font-family: 'Noto Sans', sans-serif;
    font-family: 'Noto Sans Display', sans-serif;
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
       ${applyMediaQuery("mobile")} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
     ${applyMediaQuery("tablet")}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
       ${applyMediaQuery("mobile")} {
            display: block;
        }
    }
`;

export default GlobalStyle;
