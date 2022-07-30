import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';

const darkMode = {
  background: '#27243a',
  darkColor: '#12111a',
  textColor: '#f9f6f7',
  accentColor: '#4e827b',
  borderColor: '#7f8598',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={darkMode}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
