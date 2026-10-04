import Layout from "@components/templates/Layout";
import About from "@pages/About";
import Home from "@pages/Home";
import Notfound from "@pages/Notfound";
import Portfolio from "@pages/Portfolio";
import PortfolioDetail from "@pages/PortfolioDetail";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route
          path="portfolio/:company/:project"
          element={<PortfolioDetail />}
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}
