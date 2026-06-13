import { PaletteMode } from "@mui/material";

const accent = {
  main: "#e69e45",
  light: "#f0b872",
  dark: "#c9822e",
  contrastText: "#ffffff",
};

export function getPalette(mode: PaletteMode) {
  const isLight = mode === "light";

  return {
    mode,
    primary: {
      main: isLight ? "#2f394a" : "#a8b4c8",
      light: isLight ? "#5e687a" : "#c5ced9",
      dark: isLight ? "#1a2230" : "#7a8799",
      contrastText: "#ffffff",
    },
    secondary: {
      main: isLight ? "#815a72" : "#b892a8",
      light: isLight ? "#a37d94" : "#d4b3c4",
      dark: isLight ? "#5c3f52" : "#8a6a7d",
      contrastText: "#ffffff",
    },
    accent,
    success: { main: "#53813c" },
    info: { main: "#0081b8" },
    warning: { main: "#ee9176" },
    error: { main: "#c44f6b" },
    impact: {
      main: isLight ? "#56565610" : "#ffffff08",
    },
    background: {
      default: isLight ? "#f7f8fa" : "#0f1117",
      paper: isLight ? "#ffffff" : "#1a1d27",
      highlight: isLight ? "#f5f5f5" : "#252836",
    },
    text: {
      primary: isLight ? "#514438" : "#e8e6e3",
      secondary: isLight ? "#6b6560" : "#a8a4a0",
    },
    divider: isLight ? "#e4e4e7" : "#2e3340",
  };
}
