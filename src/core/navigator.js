import { histories } from "../util/global";
import { convertOriginPathname } from "../util/tool";

export default class Navigator {
  index = 0;
  to(path, props = {}) {
    if (convertOriginPathname(location.pathname) === path) return;
    history.pushState(props, "", path);
  }

  back(num = 1) {
    console.log(this.index);
    if (this.index - 1 < 0) {
      console.log("페이지 없음");
      /* 더 이상 페이지 없음 */
      return;
    }

    this.to(histories[this.index - 1], { stopPropagation: true });
    console.log(histories[this.index - 1]);
    this.index = this.index - 1;
  }

  forward(num = 1) {
    console.log(this.index);
    if (this.index + 1 > histories.length - 1) {
      console.log("페이지 없음");
      /* 더 이상 페이지 없음 */
      return;
    }

    this.to(histories[this.index + 1], { stopPropagation: true });
    console.log(histories[this.index + 1]);
    this.index = this.index + 1;
  }
}
