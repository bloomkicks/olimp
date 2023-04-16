type TextColors = {
  default: string;
  bold: string;
  variable: string;
  result: string;
};

type CodeColors = {
  default: string;
  variable: string;
  function: string;
  value: string;
  keywords: string;
  comment: string;
};

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      text: TextColors;
      code: CodeColors;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette: {
      text?: TextColors;
      code?: CodeColors;
    };
  }
}
