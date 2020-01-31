import styled from 'styled-components';
import withTheme from '../../Theme';

export const Container: any = withTheme(styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(40px + (${({ theme }) => theme.spacing * 2}px));
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing * 2}px;

  background: ${({ scroll, theme }: any) => scroll > 0 ? theme.colors.paper : 'transparent'};

  transition: 0.5s;

  & > svg {
    transform: translateY(-3px);
  }

  & > a {
    color: ${({ theme }) => theme.colors.contrast};
    position: relative;

    .badge {
      width: 14px;
      height: 14px;
      background: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.paper};
      font-size: 0.4em;
      font-weight: bold;
      border-radius: 100%;
      position: absolute;
      right: 7px;
      top: 7px;
      
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        transform: translateY(-1px);
      }
    }
  }

  .border {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: ${({ scroll }: any) => scroll > 0 ? '100%' : '0'};
    transition: 1s;
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
  }
`);