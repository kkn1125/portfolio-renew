export declare global {}

declare module "@mui/material/styles/createPalette" {
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

// Extend color prop on components
declare module "@mui/material/Button" {
  export interface ButtonPropsColorOverrides {
    imapact: true;
  }
}
