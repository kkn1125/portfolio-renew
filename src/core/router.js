import Default from "../layout/Default";
import {
  APP,
  currentPage,
  GNB_MENU,
  histories,
  MAIN,
  pages,
} from "../util/global";
import { convertOriginPathname, objectValueConvert } from "../util/tool";
import _personalProjects from "../_personalProjects";
import _projects from "../_projects";

export default class Router {
  firstPage = false;
  constructor() {
    this.renderBase();

    (function () {
      var pushState = history.pushState;
      var replaceState = history.replaceState;

      history.pushState = function (e) {
        pushState.apply(history, arguments);
        window.dispatchEvent(new CustomEvent("pushstate"));
        window.dispatchEvent(
          new CustomEvent("pagechange", {
            detail: {
              path: convertOriginPathname(location.pathname),
              props: history.state || {},
            },
          })
        );
      };

      history.replaceState = function (e) {
        replaceState.apply(history, arguments);
        window.dispatchEvent(new CustomEvent("replacestate"));
        window.dispatchEvent(
          new CustomEvent("pagechange", {
            detail: {
              path: convertOriginPathname(location.pathname),
              props: history.state || {},
            },
          })
        );
      };

      window.addEventListener("popstate", function (e) {
        window.dispatchEvent(
          new CustomEvent("pagechange", {
            detail: {
              path: convertOriginPathname(location.pathname),
              props: history.state || {},
            },
          })
        );
      });
    })();

    /* 첫 시작 제어 */
    window.addEventListener("load", (e) => {
      // console.log(2, e, convertOriginPathname(location.pathname));
      histories.push(convertOriginPathname(location.pathname));
      this.#changeCurrentPage(convertOriginPathname(location.pathname), {});
      // console.log("current history", histories);
    });
    // /* 뒤로가기 제어 */
    // window.addEventListener("popstate", (e) => {
    //   console.log(2, e);
    // });
    // /* 해시 제어 */
    // window.addEventListener("hashchange", (e) => {
    //   console.log(2, e);
    // });
    /* 페이지 이동 제어 */
    window.addEventListener("pagechange", ({ detail }) => {
      // console.log("page change", detail);
      const { path, props } = detail;
      // console.trace(props.stopPropagation);
      if (!props?.stopPropagation) {
        histories.push(convertOriginPathname(location.pathname));
      }
      this.#changeCurrentPage(path, props);
      // console.log("current history", histories);
    });
  }

  #changeCurrentPage(path, props) {
    const changePage = pages.findIndex((page) => page.path === path);
    currentPage.index = changePage;
    currentPage.page = pages[changePage];
    const projects = [..._projects, ..._personalProjects];
    const project = projects.find(
      (project) => project.name === currentPage.page.name
    );
    this.render(Object.assign(props, { page: currentPage.page, project }));
  }

  #pageForm({ name, path, page, props, preLoad, afterLoad }) {
    const _page = objectValueConvert({
      name,
      path,
      page,
      props,
      preLoad,
      afterLoad,
    });
    return _page;
  }

  setPage(page) {
    if (!this.firstPage) {
      this.firstPage = true;
      currentPage.index = 0;
      currentPage.page = page;
    }
    pages.push(this.#pageForm(page));
  }

  setPages(_pages) {
    for (let page of _pages) {
      this.setPage(page);
    }
  }

  renderBase(props = {}) {
    // ${element({ ...gProps, ...props })}
    this.#clearApp();
    this.#insertApp(Default(props));
  }

  render(props = {}) {
    console.log(pages.map((page) => page.path));

    try {
      setTimeout(() => {
        try {
          const menuItems = GNB_MENU().querySelectorAll(".item");
          if (menuItems.length > 0) {
            const list = Array.from(menuItems);
            list.forEach((item) => {
              item.classList.remove("current");
            });
            const foundPage = list.find((item) =>
              item.innerText.match(new RegExp(currentPage.page.name, "gi"))
            );
            if (foundPage) {
              foundPage.classList.add("current");
            }
          }
        } catch (error) {}
      }, 0);
      if (currentPage.page) {
        this.#clearMain();
        this.#insertMain(currentPage.page.page(props));
      } else {
        this.#clearMain();
        this.#insertMain(
          pages.find((page) => page.name === "404")?.page(props)
        );
        throw new Error("페이지가 없습니다.");
      }
    } catch (err) {
      console.debug(`안내: ${err.message}`);
      console.trace(err);
    }
  }

  #clearApp() {
    APP().innerHTML = "";
  }

  #insertApp(page) {
    const docu = new DOMParser().parseFromString(page(), "text/html");
    APP().append(...Array.from(docu.body.children));
  }

  #clearMain() {
    MAIN().innerHTML = "";
  }

  #insertMain(page) {
    const docu = new DOMParser().parseFromString(page, "text/html");

    MAIN().append(...Array.from(docu.body.children));
  }
}
