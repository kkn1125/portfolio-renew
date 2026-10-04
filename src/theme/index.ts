import { createTheme, PaletteMode } from "@mui/material";
import { getPalette } from "./palette";

const display = '"Sora", "SUIT Variable", sans-serif';
const body = '"SUIT Variable", sans-serif';

export function createAppTheme(mode: PaletteMode) {
  const printPalette = getPalette("light");
  return createTheme({
    palette: getPalette(mode),
    typography: {
      fontFamily: body,
      h1: {
        fontFamily: display,
        fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
        fontWeight: 650,
        lineHeight: 1.25,
        letterSpacing: "-.035em",
      },
      h2: {
        fontFamily: display,
        fontSize: "clamp(1.7rem, 2.5vw, 2.35rem)",
        fontWeight: 600,
        lineHeight: 1.35,
        letterSpacing: "-.025em",
      },
      h3: {
        fontFamily: display,
        fontSize: "clamp(1.15rem, 1.5vw, 1.5rem)",
        fontWeight: 600,
        lineHeight: 1.5,
        letterSpacing: "-.02em",
      },
      body1: { fontSize: "1rem", lineHeight: 1.85 },
      body2: { fontSize: ".875rem", lineHeight: 1.75 },
      subtitle1: { fontSize: "1rem", fontWeight: 600, lineHeight: 1.6 },
      caption: { fontSize: ".8125rem", lineHeight: 1.65 },
      button: {
        fontSize: ".9375rem",
        fontWeight: 600,
        lineHeight: 1.5,
        textTransform: "none",
      },
    },
    shape: { borderRadius: 8 },
    transitions: { duration: { shortest: 150, short: 180, standard: 220 } },
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          ":root": {
            "--bg": theme.palette.background.default,
            "--surface": theme.palette.background.paper,
            "--surface-muted": theme.palette.background.highlight,
            "--ink": theme.palette.text.primary,
            "--muted": theme.palette.text.secondary,
            "--rule": theme.palette.divider,
            "--accent": theme.palette.accent.main,
            "--accent-soft": theme.palette.accent.light,
            "--on-accent": theme.palette.accent.contrastText,
            colorScheme: theme.palette.mode,
          },
          body: { backgroundColor: theme.palette.background.default },
          "@media print": {
            ":root": {
              "--bg": printPalette.background.paper,
              "--surface": printPalette.background.paper,
              "--ink": printPalette.text.primary,
              "--muted": printPalette.text.secondary,
              "--rule": printPalette.divider,
              "--accent": printPalette.accent.main,
              "--on-accent": printPalette.accent.contrastText,
              colorScheme: "light",
            },
            body: {
              backgroundColor: printPalette.background.paper,
              color: printPalette.text.primary,
            },
          },
        }),
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { minHeight: 44, padding: "10px 18px", borderRadius: 8 },
          outlined: { borderColor: "var(--rule)" },
        },
      },
      MuiIconButton: {
        styleOverrides: { root: { minWidth: 44, minHeight: 44 } },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            minHeight: 48,
            minWidth: 0,
            padding: "12px 16px",
            textTransform: "none",
            fontWeight: 600,
            color: "var(--muted)",
          },
        },
      },
      MuiTabs: { styleOverrides: { indicator: { height: 2 } } },
      MuiMenu: {
        styleOverrides: {
          paper: { borderRadius: 12, boxShadow: "0 10px 36px #00000026" },
        },
      },
      MuiMenuItem: { styleOverrides: { root: { minHeight: 48 } } },
      MuiPaginationItem: {
        styleOverrides: { root: { minWidth: 40, height: 40 } },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: { backgroundColor: "var(--surface)" },
          notchedOutline: { borderColor: "var(--rule)" },
        },
      },
    },
  });
}
