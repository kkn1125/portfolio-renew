import Navigator from "./navigator";
import Router from "./router";
import UI from "./ui";

const router = new Router();
const navigator = new Navigator();
const ui = new UI();

export { router, navigator, ui };

export default class Manager {
  router = router;
  navigator = navigator;
  ui = ui;
}
