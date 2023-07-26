import Navigator from "./navigator";
import Router from "./router";

export default class Manager {
  router = new Router();
  navigator = new Navigator();
}
