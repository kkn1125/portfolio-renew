import { isClosed, menuPanel } from "../util/global";

export default class UI {
  constructor() {
    const handleClick = (/** @type {MouseEvent} */ e) => {
      /** @type {HTMLElement} */
      const target = e.target;

      if (target.closest("#menu-panel-exit-btn")) {
        if (isClosed()) {
          this.openMenuPanel();
        } else {
          this.closeMenuPanel();
        }
      }

      if (target.closest("#menu")) {
        if (isClosed()) {
          this.openMenuPanel();
        } else {
          this.closeMenuPanel();
        }
      }

      // if (target.closest("#gnb-menu") && target.classList.contains("item")) {
      //   manager.navigator.to(`/${target.innerText.toLowerCase()}`);
      // }
    };

    const handleKyedown = (e) => {
      const key = e.key;

      if (key === "Escape") {
        if (!isClosed()) {
          menuPanel().classList.remove("open");
          menuPanel().classList.add("close");
        }
      }
    };

    window.addEventListener("keydown", handleKyedown);
    window.addEventListener("click", handleClick);
  }

  openMenuPanel() {
    menuPanel().classList.add("open");
    menuPanel().classList.remove("close");
  }
  closeMenuPanel() {
    menuPanel().classList.remove("open");
    menuPanel().classList.add("close");
  }
}
