import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider as Provider } from "@mui/material/styles";

const heroFontFam = "Manrope, sans-serif";
const headingFontFam = "Inter, sans-serif";
const bodyFontFam = "Roboto, sans-serif";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: heroFontFam,
      // fontSize: "40px",
      fontSize: "2.86rem",
      fontWeight: 800,
      lineHeight: 1.365,
    },
    h2: {
      fontFamily: headingFontFam,
      // fontSize: "28px",
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: headingFontFam,
      // fontSize: "20px",
      fontSize: "1.44rem",
      fontWeight: 600,
      lineHeight: 1.21,
      textTransform: "uppercase",
    },
    h4: {
      fontFamily: headingFontFam,
      // fontSize: "20px",
      fontSize: "1.44rem",
      fontWeight: 300,
      lineHeight: 1.21,
    },
    subtitle1: {
      fontFamily: bodyFontFam,
      // fontSize: "24px",
      fontSize: "1.72rem",
      fontWeight: 300,
      lineHeight: 1.17,
    },
    body1: {
      fontFamily: bodyFontFam,
      // fontSize: "16px",
      fontSize: "1.14rem",
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
      "var-red": "#AE3E3E",
      "var-blue": "#074FA5",
      "var-green": "#1D9938",
    },
    code: {
      default: "#FFFFFF",
      variable: "#B9D4FD",
      function: "#F0FDA3",
      value: "#92E277",
      keyword: "#D0B8FF",
      comment: "#B7FFF2",
    },
    background: {
      default: "#FFFFFF",
      paper: "#777777",
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: { opacity: 0.8 },
      },
    },
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
