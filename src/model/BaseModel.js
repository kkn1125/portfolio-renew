import { format } from "../util/tool";

export default class BaseModel {
  title = "";
  desc = "";
  team = "";
  role = [];
  start = new Date();
  end = new Date();
  inProgress = false;
  listOpen = false;
  visible = true;
  list = [];

  /**
   * @param {any[]} value
   */
  set list(value) {
    if (value instanceof Array) {
      this.list = value;
    } else if (typeof value === "object") {
      this.list.push(value);
    }
  }
}
