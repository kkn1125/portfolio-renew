import Navigator from "./navigator";
import Router from "./router";
import UI from "./ui";

export default class Manager {
  router = new Router();
  navigator = new Navigator();
  ui = new UI();
}
