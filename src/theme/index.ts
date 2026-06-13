import { createTheme, PaletteMode } from "@mui/material";
import { getPalette } from "./palette";

export function createAppTheme(mode: PaletteMode) {
  return createTheme({
    palette: getPalette(mode),
    typography: {
      fontFamily: '"Noto Sans KR", "Raleway", sans-serif',
    },
    shape: {
      borderRadius: 8,
    },
    transitions: {
      duration: {
        shortest: 150,
        short: 200,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          body: {
            backgroundColor: theme.palette.background.default,
            transition: "background-color 0.2s ease",
          },
        }),
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  });
}
