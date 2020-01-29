import styled from 'styled-components';
import withTheme from '../../Theme';

export const Container = withTheme((styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing * 4}px;
  svg:not(.out) {
    z-index: 2;
  }
  .out {
    position: absolute;
    z-index: 1;
    transform: translate(10px, 5px);  
  }
`));