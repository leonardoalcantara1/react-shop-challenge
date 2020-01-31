import styled from 'styled-components';
import withTheme from '../../Theme';

export const Price = withTheme((styled.div`
  text-align: center;
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.media.md}px) {
    text-align: left;
  }
`));

export const CartRow = withTheme((styled.div`
  @media (max-width: ${({ theme }) => theme.media.md}px) {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    margin: ${({ theme }) => theme.spacing * 2}px 0;
  }
`));

export const FinalPrice = withTheme((styled.div`
  font-size: 1.3em;
  font-weight: bold;
  text-align: right;
  margin: ${({ theme }) => theme.spacing * 4}px 0;
`));