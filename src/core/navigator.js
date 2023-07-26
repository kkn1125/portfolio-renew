export default class Navigator {
  to(path) {
    history.pushState({}, "", path);
    window.dispatchEvent(new HashChangeEvent("pagechange", { name: "test" }));
  }

  back(num = 1) {
    if (currentPage.index - 1 < 0) {
      /* 더 이상 페이지 없음 */
      return;
    }

    currentPage.index = currentPage.index - 1;
    currentPage.page = pages[currentPage.index - 1];
  }

  forward(num = 1) {
    if (currentPage.index + 1 > pages.length) {
      /* 더 이상 페이지 없음 */
      return;
    }

    currentPage.index = currentPage.index + 1;
    currentPage.page = pages[currentPage.index + 1];
  }
}
