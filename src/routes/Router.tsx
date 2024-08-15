import { DEPLOY_PATH } from "@common/variables";
import Layout from "@components/templates/Layout";
import About from "@pages/About";
import Home from "@pages/Home";
import Portfolio from "@pages/Portfolio";
import PortfolioDetail from "@pages/PortfolioDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={DEPLOY_PATH} element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="portfolio">
          <Route index element={<Portfolio />} />
          <Route path=":title" element={<PortfolioDetail />} />
        </Route>
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
