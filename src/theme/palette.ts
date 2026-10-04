import { PaletteMode } from "@mui/material";

export function getPalette(mode: PaletteMode) {
  const light = mode === "light";
  const accent = {
    main: light ? "#1F6656" : "#8ACBB5",
    light: light ? "#E1EDE7" : "#284338",
    dark: light ? "#164C40" : "#B2DECE",
    contrastText: light ? "#FFFFFF" : "#131D1A",
  };
  return {
    mode,
    primary: accent,
    secondary: { ...accent, main: light ? "#56655F" : "#B2C0B8" },
    accent,
    success: { main: light ? "#1F6656" : "#8ACBB5" },
    info: { main: light ? "#365D79" : "#A3C5DD" },
    warning: { main: light ? "#80521D" : "#E7C18E" },
    error: { main: light ? "#A03838" : "#F0A6A6" },
    impact: { ...accent, main: light ? "#E1EDE7" : "#284338" },
    background: {
      default: light ? "#F4F6F5" : "#131D1A",
      paper: light ? "#FFFFFF" : "#1B2823",
      highlight: light ? "#E9EEEB" : "#26372F",
    },
    text: {
      primary: light ? "#172422" : "#E8EFEB",
      secondary: light ? "#56655F" : "#B2C0B8",
    },
    divider: light ? "#D5DDD9" : "#3B5147",
  };
}
