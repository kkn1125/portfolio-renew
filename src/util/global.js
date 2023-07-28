export const APP = () => document.querySelector("#app");

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
