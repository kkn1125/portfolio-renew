import { basicCovers, MySkillSet } from "../util/global";
import { format } from "../util/tool";

export default class BaseModel {
  /** @type {string} */
  title = "";
  /** @type {string} */
  desc = "";
  /** @type {string} */
  team = "";
  /** @type {string[]} */
  role = [];
  /** @type {Date} */
  start = new Date();
  /** @type {Date} */
  end = new Date();
  /** @type {boolean} */
  inProgress = false;
  /** @type {boolean} */
  listOpen = false;
  /** @type {boolean} */
  visible = true;
  /** @type {string[]} */
  list = [];
  /** @type {string[]} */
  skills = [];
  /** @type {string[]} */
  mainSkills = [];

  /* portfolio page properties */
  /** @type {string} - portfolio page route name */
  name = "";
  /** @type {string} - portfolio page route path */
  path = "";
  /** @type {string} - portfolio cover image path */
  cover = basicCovers[Math.floor(Math.random() * basicCovers.length)];
  /** @type {string} */
  author = "kimson";

  /** @type {string[]} */
  links = [];
  /** @type {string} */
  github = "";

  set links(values) {
    if (values instanceof Array) {
      this.links = values;
      for (const val of values) {
        MySkillSet.add(val);
      }
    } else if (typeof values === "object") {
      this.links.push(values);
      MySkillSet.add(values);
    }
  }

  set skills(values) {
    if (values instanceof Array) {
      this.skills = values;
      for (const val of values) {
        MySkillSet.add(val);
      }
    } else if (typeof values === "object") {
      this.skills.push(values);
      MySkillSet.add(values);
    }
  }

  set mainSkills(values) {
    if (values instanceof Array) {
      this.mainSkills = values;
      for (const val of values) {
        MySkillSet.add(val);
      }
    } else if (typeof values === "object") {
      this.mainSkills.push(values);
      MySkillSet.add(values);
    }
  }

  /**
   * @param {string[]} value
   */
  set list(value) {
    if (value instanceof Array) {
      this.list = value;
    } else if (typeof value === "object") {
      this.list.push(value);
    }
  }
}
new BaseModel().role;
