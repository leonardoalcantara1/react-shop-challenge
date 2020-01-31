import React from 'react';
import withTheme from '../../Theme';
import Logo from '../../atoms/Logo';
import { Container } from './styles';

const Footer = ({ theme }: any) => <Container>
  <Logo height={70} />
  <Logo height={70} color={theme.colors.primary} className="out" />
</Container>;

export default withTheme(Footer);
