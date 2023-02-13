import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';
import colors from './colors';

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;

const style = css`
  ${reset}

  * {
    &::-webkit-scrollbar {
      width: 5px;
      background-color: inherit;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      width: 5px;
      background-color: ${colors.scrollbar};
      border-radius: 10px;
    }
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.mainText};

    #root {
      background-color: ${colors.loginBackground};
      border-radius: 30px;
      width: 390px;
      min-width: 390px;
      height: 90vh;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
      color: ${colors.mainText};

      iframe {
        border: none;
      }

      a {
        color: inherit;
      }

      input[type='checkbox'] {
        display: flex;
        accent-color: ${colors.checkbox};
        width: 15px;
        height: 15px;
        margin: 0;
        cursor: pointer;
      }
    }
  }
`;
