import Navigator from "@/core/navigator";
import Router from "@/core/router";
import UI from "@/core/ui";

const router = new Router();
const navigator = new Navigator();
const ui = new UI();

export { router, navigator, ui };

export default class Manager {
  router = router;
  navigator = navigator;
  ui = ui;
}
