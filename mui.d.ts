interface TextColors {
  default: string;
  bold: string;
  variable: string;
  result: string;
}

interface CodeColors {
  default: string;
  variable: string;
  function: string;
  value: string;
  keywords: string;
  comment: string;
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    text?: TextColors;
    code?: CodeColors;
  }
}
