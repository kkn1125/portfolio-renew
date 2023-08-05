export default [
  {
    header: "name",
    body: "김경남",
  },
  {
    header: "age",
    body: `${
      new Date().getFullYear() - 1993 + (new Date().getMonth() < 11 ? -1 : 0)
    }`,
  },
  {
    header: "email",
    body: `<a href="mailto:chaplet01@gmail.com">chaplet01@gmail.com</a>`,
  },
  {
    header: "blog",
    body: `<a href="https://kkn1125.github.io/" target="_blank">https://kkn1125.github.io/</a>`,
  },
];
