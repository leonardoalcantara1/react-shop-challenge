import styled from 'styled-components';
import withTheme from '../Theme';

export const InternWrapper = withTheme((styled.div`
  padding: ${({ theme }) => theme.spacing * 2}px 0;
  overflow: hidden;
  padding-top: calc(60px + (${({ theme }) => theme.spacing * 2}px));
  display: flex;
  justify-content: center;
  .wrapper {
    width: 100%;
    max-width: ${({ theme }) => theme.utilArea}px;
  }
`));