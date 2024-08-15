import Footer from "@components/organisms/Footer";
import Header from "@components/organisms/Header";
import { Stack, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Stack height="inherit">
      {/* 상단 메뉴 */}
      <Header />

      {/* 본문 */}
      <Stack flex={1}>
        <Toolbar />
        <Outlet />
        <Toolbar />
      </Stack>

      {/* 하단 텍스트 */}
      <Footer />
    </Stack>
  );
}

export default Layout;
