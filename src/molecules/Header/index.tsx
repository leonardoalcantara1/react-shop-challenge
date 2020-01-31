import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconButton
} from '@material-ui/core';
import {
  ShoppingCart
} from '@material-ui/icons';

import { connect } from 'react-redux';

import withTheme from '../../Theme';
import { Container } from './styles';
import Logo from '../../atoms/Logo';

const Header = connect(({ cart }: any) => ({ cart }))(
  ({ cart }: any) => {
    const [scroll, setScroll] = useState(window.scrollY || 0);

    useEffect(() => {
      if (window) {
        window.addEventListener(
          'scroll',
          () => {
            setScroll(window.scrollY);
          }
        )
      }
    }, []);

    const cartCount = cart.length > 0
      ? cart.reduce(
        (a: any, b: any) => ({
          quantity: a.quantity + b.quantity
        })
       ).quantity : 0;

    return <Container scroll={scroll}>
      <Link to="/">
        <Logo height={44} />
      </Link>
      <IconButton component={Link} to="/cart">
        <ShoppingCart />
        {
          cart.length > 0 && (
            <div className="badge">
              <span>
                {cartCount}
              </span>
            </div>
          )
        }
      </IconButton>
      <div className="border"></div>
    </Container>
  }
);

export default withTheme(Header);