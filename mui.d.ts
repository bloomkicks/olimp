import { createTheme } from "@mui/material/styles";

interface TextColors {
  default: string;
  bold: string;
  variable: string;
  result: string;
  highlight: string;
  "var-red": string;
  "var-blue": string;
  "var-green": string;
}

interface CodeColors {
  default: string;
  variable: string;
  function: string;
  value: string;
  keyword: string;
  comment: string;
}

declare module "@mui/material/styles" {
  interface PaletteOptions {
    text: TextColors;
    code: CodeColors;
  }
}
