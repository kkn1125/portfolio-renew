import { PaletteMode } from "@mui/material";

export function getPalette(mode: PaletteMode) {
  const light = mode === "light";
  const accent = {
    main: light ? "#4A53B8" : "#B1B8FF",
    light: light ? "#EDEEF9" : "#30334F",
    dark: light ? "#363D91" : "#D0D4FF",
    contrastText: light ? "#FFFFFF" : "#17181C",
  };
  return {
    mode,
    primary: accent,
    secondary: { ...accent, main: light ? "#64666E" : "#B4B5BE" },
    accent,
    success: { main: light ? "#237459" : "#94CFB6" },
    info: { main: light ? "#365D79" : "#A3C5DD" },
    warning: { main: light ? "#80521D" : "#E7C18E" },
    error: { main: light ? "#A03838" : "#F0A6A6" },
    impact: { ...accent, main: light ? "#EDEEF9" : "#30334F" },
    background: {
      default: light ? "#FAFAFA" : "#17181C",
      paper: light ? "#FFFFFF" : "#222329",
      highlight: light ? "#F0F0F3" : "#2B2D35",
    },
    text: {
      primary: light ? "#202126" : "#F2F2F5",
      secondary: light ? "#64666E" : "#B4B5BE",
    },
    divider: light ? "#DEDFE5" : "#41434D",
  };
}
