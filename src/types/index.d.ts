export declare global {}

declare module "@mui/material/styles/createPalette" {
  // interface Palette {
  // background: {
  //   highlight: PaletteColor;
  // };
  // }

  // interface PaletteOptions {
  // highlight: PaletteOptions["primary"];
  // }

  interface TypeBackground {
    highlight: string;
  }
}

// Extend color prop on components
declare module "@mui/material/Button" {
  // export interface ButtonPropsColorOverrides {
  //   highlight: true;
  // }
}
