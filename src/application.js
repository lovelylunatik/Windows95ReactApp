import React from "react";
import "./index.css";
import WindowsStartBar from "./windowsstartbar";
import theme from "react95/dist/themes/candy";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import ClickableIcons from "./clickableicons";

const GlobalStyles = createGlobalStyle`
  
  ${styleReset}
`;

function Application() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <WindowsStartBar />
        <ClickableIcons />
      </ThemeProvider>
    </React.StrictMode>
  );
}
export default Application;
