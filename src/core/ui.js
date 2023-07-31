import { dataList, isClosed, menuPanel } from "../util/global";

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

      if (
        target.closest(".list-toggle") ||
        target.classList.contains("list-toggle")
      ) {
        const divider = target.parentElement.parentElement.nextElementSibling;
        const list =
          target.parentElement.parentElement.nextElementSibling
            .nextElementSibling;
        const isOpen = list.classList.contains("list-open");
        if (isOpen) {
          this.closeList(list, target, divider);
        } else {
          this.openList(list, target, divider);
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
  openList(list, target, divider) {
    divider.classList.remove("py-0");
    target.innerText = "닫기";
    target.classList.remove("btn-info");
    target.classList.add("btn-gray");
    list.classList.add("list-open");
    list.classList.remove("list-close");
  }
  closeList(list, target, divider) {
    divider.classList.add("py-0");
    target.innerText = "펼치기";
    target.classList.add("btn-info");
    target.classList.remove("btn-gray");
    list.classList.add("list-close");
    list.classList.remove("list-open");
  }
}
