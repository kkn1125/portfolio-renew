import Footer from "@components/organisms/Footer";
import Header from "@components/organisms/Header";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return (
    <div id="wrapper" className="site-wrapper">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
