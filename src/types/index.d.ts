export {};

declare module "@mui/material/styles" {
  interface Palette {
    impact: PaletteColor;
    accent: PaletteColor;
  }

  interface PaletteOptions {
    impact?: PaletteOptions["primary"];
    accent?: PaletteOptions["primary"];
  }

  interface TypeBackground {
    highlight: string;
  }
}

declare module "@mui/material/Button" {
  export interface ButtonPropsColorOverrides {
    impact: true;
  }
}
