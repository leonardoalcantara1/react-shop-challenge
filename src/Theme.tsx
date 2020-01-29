import React, { createContext, ReactType } from 'react';
import { createGlobalStyle } from 'styled-components';

export interface ThemeProps {
  colors: {
    paper: string,
    contrast: string,
    primary: string,
    secondary: string
  },
  spacing: number
}

const Theme = createContext({
  colors: {
    paper: '#fff',
    contrast: '#1b1b1b',
    primary: '#fbda40',
    secondary: '#f86639'
  },
  spacing: 12,
  media: {
    lg: 1600,
    md: 1024,
    sm: 730,
    xs: 560
  },
  utilArea: 1280
});

const withTheme = (Component: ReactType) => {
  class ThemeComponent extends React.Component {
    render() {
      return (
        <Theme.Consumer>
          {
            theme => <Component {...this.props} theme={theme}>
              {this.props.children}
            </Component>
          }
        </Theme.Consumer>
      )
    }
  }
  return ThemeComponent;
}

export const GlobalStyle = withTheme(createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      &:not(.title) {
        font-family: 'Rubik', sans-serif;
      }
      &.title {
        font-family: 'Days One', sans-serif;
      }
  }
  html, body {
    background: ${({ theme }: any) => theme.colors.paper};
    overscroll-behavior: none;
  }
`);

export default withTheme;