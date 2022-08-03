/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-unresolved */
import React from 'react';
import AppRouter from 'AppRouter';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  );
}

export default App;
