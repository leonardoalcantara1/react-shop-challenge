import styled from 'styled-components';
import withTheme from '../../Theme';

export const Container = withTheme((styled.section`
  width: 100%;
  position: relative;
  z-index: 0;
  ${({ theme }) => {
    const primary = theme.colors.primary;
    const secondary = '#f8ae39';
    return `
      background: ${primary};
      background: -moz-linear-gradient(-45deg, ${primary} 0%, ${secondary} 100%);
      background: -webkit-linear-gradient(-45deg, ${primary} 0%, ${secondary} 100%);
      background: linear-gradient(135deg, ${primary} 0%, ${secondary} 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${primary}', endColorstr='${secondary}',GradientType=1 );
    `;
  }}

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px ${({ theme }) => theme.spacing * 2}px ${({ theme }) => theme.spacing * 2}px;
  overflow: hidden;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: ${({ theme }) => theme.utilArea}px;
  }

  img {
    width: 50%;
    max-width: 500px;
    margin-bottom: -20%;
    @media (max-width: ${({ theme }) => theme.media.md}px) {
      max-width: 450px;
      margin-bottom: -30%;
    }
    @media (max-width: ${({ theme }) => theme.media.sm}px) {
      width: 55%;
      margin-bottom: -10%;
      margin-left: -27%;
    }
  }
`));

export const ProductInfo = withTheme((styled.div`
  margin-left: ${({ theme }) => theme.spacing * 2}px;
  flex: 1;
  .title {
    font-size: 2em;
    margin-bottom: ${({ theme }) => theme.spacing}px;
    @media (max-width: ${({ theme }) => theme.media.md}px) {
      font-size: 1.5em;
    }
  }
  p {
    margin-bottom: ${({ theme }) => theme.spacing * 2}px;
    @media (max-width: ${({ theme }) => theme.media.sm}px) {
      display: none;
    }
  }
`));