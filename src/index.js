import React from 'react';
import ReactDOM from 'react-dom';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';

ReactDOM.render(
  <RenderAfterNavermapsLoaded ncpClientId={process.env.REACT_APP_MAP_CLIENT_ID}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </RenderAfterNavermapsLoaded>,
  document.getElementById('root')
);
