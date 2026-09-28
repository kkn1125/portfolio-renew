import Footer from "@components/organisms/Footer";
import Header from "@components/organisms/Header";
import { Paper, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Stack
      id="wrapper"
      component={Paper}
      sx={{
        height: "inherit",
        borderRadius: "none"
      }}>
      {/* 상단 메뉴 */}
      <Header />

      {/* 본문 */}
      <Stack
        id="layout"
        sx={{
          flex: 1,
          overflow: "hidden",
          height: "inherit"
        }}>
        <Outlet />
      </Stack>

      {/* 하단 텍스트 */}
      <Footer />
    </Stack>
  );
}

export default Layout;
