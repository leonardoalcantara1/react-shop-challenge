import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import { storeCurrentCart } from './store/cart/actions';

import withTheme, { GlobalStyle, ThemeProps } from './Theme';
import Header from './molecules/Header';
import Footer from './molecules/Footer';

import Home from './organisms/Home';
import Products from './organisms/Products';
import Cart from './organisms/Cart';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeCurrentCart());
  }, [dispatch]);

  return <ThemeProvider theme={MaterialTheme(theme)}>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:brand" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
}

export default withTheme(App);
