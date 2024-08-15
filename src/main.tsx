import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./routes/Router.tsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#a77ce4" },
    secondary: { main: "#815a72" },
    success: { main: "#53813c" },
    info: { main: "#0081b8" },
    warning: { main: "#ee9176" },
    error: { main: "#c44f6b" },
  },
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <RecoilRoot>
        {/* <StrictMode> */}
        <Router />
        {/* </StrictMode> */}
      </RecoilRoot>
    </BrowserRouter>
  </ThemeProvider>
);
