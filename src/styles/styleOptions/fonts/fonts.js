import { createGlobalStyle } from "styled-components";
/* https://noonnu.cc/font_page/670 */

const GlobalFonts = createGlobalStyle`
@font-face {
    /* Cafe24 Ssuround*/
    font-family: 'Cafe24Ssurround';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
    font-weight: 700; /* Bold*/
    font-style: normal;
}

@font-face {
        /* Cafe24 Ssuround Air*/
    font-family: 'Cafe24SsurroundAir';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24SsurroundAir.woff') format('woff');
    font-weight: 300; /*Light*/
    font-style: normal;
}
`;

export default GlobalFonts;
