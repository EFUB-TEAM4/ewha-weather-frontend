/* eslint-disable import/no-unresolved */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import theme from 'styles/theme';
import GlobalFonts from 'styles/styleOptions/fonts/fonts';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global-style';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalFonts />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </Suspense>
  </RecoilRoot>,
);
