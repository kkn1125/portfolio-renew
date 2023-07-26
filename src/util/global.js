export const APP = () => document.querySelector("#app");

export const basePath = import.meta.env.DEV ? "/" : "/portfolio-renew/";

/* classes variables */
export const histories = [];
export const pages = [];
export const currentPage = {
  index: 0,
  page: null,
};
