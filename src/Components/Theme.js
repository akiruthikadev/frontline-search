import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0e4711ff" },
    secondary: {
      main: "#0277BD",
    },
    background: {
      // full dark background
      paper: "#cecfcfff", // card background
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});

export default theme;
