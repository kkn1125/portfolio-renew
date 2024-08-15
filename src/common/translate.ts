const translate: Record<string, string> = {};
export default new Proxy(translate, {
  get(target, p, receiver) {
    switch (p) {
      case "javascript":
        return "JavaScript";
      default:
        return p;
    }
  },
});
