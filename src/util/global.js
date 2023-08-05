export const APP = () => document.querySelector("#app");
export const MAIN = () => document.querySelector("#main");
export const basePath = import.meta.env.DEV ? "/" : "/portfolio-renew/";

/* classes variables */
export const histories = [];
export const pages = [];
export const currentPage = {
  index: 0,
  page: null,
};

export const convertToPageTemplate = (content, props) =>
  content
    .replace('<script type="module" src="/@vite/client"></script>', "")
    .replace(/(\$\{[A-Za-z0-9-_]+\})/gm, ($1, $2) => {
      const variable = $2.replace(/\$|\{|\}/g, "");
      const hasProperty = Object.entries(props)
        .map(([k, v]) => k)
        .includes(variable);
      return hasProperty ? props[$2.replace(/\$|\{|\}/g, "")] : $2;
    });

export const BRAND = import.meta.env.VITE_BRAND;
export const YEAR = import.meta.env.VITE_YEAR;
export const menuPanel = () => document.querySelector("#menu-panel");
export const dataList = (title) =>
  document.querySelector(`[data-title='${title}']`);
export const isClosed = () => menuPanel().classList.contains("close");
export const GNB_MENU = () => document.querySelector("#gnb-menu");
export const textTitle = (
  title,
  size,
  center,
  usedeco = true
) => `<div class="text-title-${size || 1} ${
  usedeco ? `text-title-dash-${center ? "both" : "end"}` : ""
} text-capitalize${center ? " text-center" : ""}">
<span>${title}</span>
${
  !usedeco || center
    ? ""
    : `<span class="text-title-deco-end text-title-deco-circle"></span>`
}</div>`;

export const MENU_LIST = [
  {
    name: "resume",
    path: "/",
  },
  // {
  //   name: "resume",
  //   path: "/resume",
  // },
  {
    name: "portfolio",
    path: "/portfolio",
  },
  {
    name: "about",
    path: "/about",
  },
];

export const PROFILE_IMG = import.meta.env.VITE_PROFILE_IMAGE;
export const MONTH = (month) => month - 1;
export const RESPONSIVE = "lg";
