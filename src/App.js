import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import palette from "./styles/base.scss";
import Wizard from "./views/Wizard";

import "./App.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: palette.primary,
    },
    secondary: {
      main: palette.secondary,
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Wizard />
      </div>
    </ThemeProvider>
  );
}
