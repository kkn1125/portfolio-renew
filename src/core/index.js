import Manager from "@/core/manager.js";
import routes from "@/routes/index.js";

const manager = new Manager();
window.manager = manager;

manager.router.setPages(routes);

export { Manager };
export default manager;
