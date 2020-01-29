import React, { useEffect, useState } from 'react';
import {
  IconButton
} from '@material-ui/core';
import {
  ShoppingCart
} from '@material-ui/icons';
import withTheme from '../../Theme';
import { Container } from './styles';
import Logo from '../../atoms/Logo';

const Header = ({ theme }: any) => {
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

  return <Container scroll={scroll}>
    <Logo height={44} />
    <IconButton>
      <ShoppingCart />
      <div className="badge">
        <span>10</span>
      </div>
    </IconButton>
  </Container>
}

export default withTheme(Header);