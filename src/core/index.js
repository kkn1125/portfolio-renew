import routes from "../routes/index.js";
import Manager from "./manager.js";

const manager = new Manager();
window.manager = manager;

manager.router.setPages(routes);

export { Manager };
export default manager;
