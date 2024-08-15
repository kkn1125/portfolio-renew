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
    success: { main: "#294d46" },
    info: { main: "#56889a" },
    warning: { main: "#ffc069" },
    error: { main: "#bd717d" },
    background: { default: "#4b4453", paper: "#b0a8b9" },
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
