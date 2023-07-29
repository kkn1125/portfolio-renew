import _404 from "../templates/404";
import About from "../templates/About";
import Home from "../templates/Home";
import Portfolio from "../templates/Portfolio";
import Resume from "../templates/Resume";

export default [
  { name: "resume", path: "/", page: Resume },
  // { name: "resume", path: "/resume", page: Resume },
  { name: "portfolio", path: "/portfolio", page: Portfolio },
  { name: "about", path: "/about", page: About },
  { name: "404", path: "/404", page: _404 },
];
