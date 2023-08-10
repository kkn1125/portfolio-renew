import _404 from "../templates/404";
import About from "../templates/About";
import Home from "../templates/Home";
import Portfolio from "../templates/Portfolio";
import PortfolioPage from "../templates/PortfolioPage";
import Resume from "../templates/Resume";
import _personalProjects from "../_personalProjects";
import _projects from "../_projects";

export default [
  { name: "resume", path: "/", page: Resume },
  { name: "portfolio", path: "/portfolio", page: Portfolio },
  ..._projects.map((prj) => ({
    name: prj.name,
    path: "/portfolio" + prj.path,
    page: PortfolioPage,
  })),
  ..._personalProjects.map((prj) => ({
    name: prj.name,
    path: "/portfolio" + prj.path,
    page: PortfolioPage,
  })),
  { name: "about", path: "/about", page: About },
  { name: "404", path: "/404", page: _404 },
];
