import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import withTheme, { GlobalStyle, ThemeProps } from './Theme';
import Header from './molecules/Header';
import Footer from './molecules/Footer';

import Home from './organisms/Home';

const MaterialTheme = (theme: ThemeProps) => createMuiTheme({
  palette: {
    primary: {
      main: theme.colors.primary
    },
    secondary: {
      main: theme.colors.secondary
    }
  }
});

const App: React.FC = ({ theme }: any) => {
  return <ThemeProvider theme={MaterialTheme(theme)}>
    <GlobalStyle />
    <Header />
    <BrowserRouter>
      <Switch>
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </ThemeProvider>
}

export default withTheme(App);
