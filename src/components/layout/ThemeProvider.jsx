import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as Provider,
} from "@mui/material/styles";

const heroFontFam = "Manrope, sans-serif";
const headingFontFam = "Inter, sans-serif";
const bodyFontFam = "Roboto, sans-serif";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: heroFontFam,
      fontSize: "40px",
      fontWeight: 800,
      lineHeight: 1.365,
    },
    h2: {
      fontFamily: headingFontFam,
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: headingFontFam,
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: 1.21,
      textTransform: "uppercase",
    },
    h4: {
      fontFamily: headingFontFam,
      fontSize: "20px",
      fontWeight: 300,
      lineHeight: 1.21,
    },
    subtitle1: {
      fontFamily: bodyFontFam,
      fontSize: "24px",
      fontWeight: 300,
      lineHeight: 1.17,
    },
    body1: {
      fontFamily: bodyFontFam,
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.21,
    },
  },
  palette: {
    primary: {
      main: "#074FA5",
    },
    text: {
      default: "#000000",
      highlight: "#CF7A16",
      variable: "#074FA5",
      result: "#AE3E3E",
      keyword: "#A06CDF",
    },
    code: {
      default: "#FFFFFF",
      variable: "#BBD6FF",
      function: "#F2FFA5",
      value: "#92FF77",
      keyword: "#D7B8FF",
      comment: "#B7FFF2",
    },
    background: {
      default: "#FFFFFF",
      paper: "#777777",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {},
      },
    },
  },
});

const ThemeProvider = ({ children }) => {
  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
};

export default ThemeProvider;