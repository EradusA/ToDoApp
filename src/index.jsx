import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@emotion/react';

import "./styles.css";
import theme from "./theme";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">
      <App />
    </div>
    </ThemeProvider>
  </StrictMode>,
);
