import routes from "@/routes/index.js";
import { isClosed, menuPanel } from "@/util/global.js";
import Manager from "@/core/manager.js";

const manager = new Manager();
window.manager = manager;

manager.router.setPages(routes);

export { Manager };
export default manager;
