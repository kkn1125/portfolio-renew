import Home from "../templates/Home";
import _404 from "../templates/404";
import Default from "../layout/Default";
import About from "../templates/About";

export default [
  { name: "home", path: "/", page: Default(Home, {}) },
  { name: "about", path: "/about", page: Default(About, {}) },
  { name: "404", path: "/404", page: Default(_404, {}) },
];
