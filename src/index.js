/* eslint-disable import/no-unresolved */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Spinner } from 'assets';
import App from 'App';
import theme from 'styles/theme';
import GlobalFonts from 'styles/styleOptions/fonts/fonts';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global-style';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <Suspense fallback={<img src={Spinner} alt="Spinner" />}>
      <GlobalFonts />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Suspense>
  </RecoilRoot>,
);
