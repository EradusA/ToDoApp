import { createTheme } from "@mui/material/styles";
import { red, blue, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: grey[700],
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: "2rem",
    },
  },
});

export default theme;
