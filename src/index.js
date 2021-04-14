import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Default } from "./header";
import DesktopIcon from "./desktopicon";
import { MyComputerWindow } from "./mycomputerwindow";
import theme from "react95/dist/themes/candy";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";

const GlobalStyles = createGlobalStyle`
  
  ${styleReset}
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Default />
      <DesktopIcon />
      <MyComputerWindow />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
