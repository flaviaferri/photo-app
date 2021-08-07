import { Global, css } from "@emotion/react";
import "reset-css";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@emotion/react";
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/700.css";

const style = css`
  html {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 10px;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={style} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
