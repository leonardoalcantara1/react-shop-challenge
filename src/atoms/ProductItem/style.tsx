import styled from 'styled-components';
import withTheme from '../../Theme';

export const ProductName = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  font-weight: normal;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProductBrand = withTheme((styled.span`
  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`));