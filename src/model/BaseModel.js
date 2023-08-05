import { format } from "../util/tool";

export default class BaseModel {
  #title = "";
  #desc = "";
  #team = "";
  #role = [];
  #start = new Date();
  #end = new Date();
  #inProgress = false;
  #listOpen = false;
  #list = [];

  constructor() {
    for (const key of Object.keys(this)) {
      Object.defineProperty(this, key, {
        set(value) {
          if (key === "list" || key === "role") {
            if (value instanceof Array) {
              this.#list = value;
            } else if (typeof value === "object") {
              this.#list.push(value);
            }
          } else {
            this[key] = value;
          }
        },
        get() {
          return this[key];
        },
      });
    }
  }
}
