import { basePath } from "./global";

export const valueConvert = (value) => value ?? "";
export const valueConvertToObject = (value) => value ?? {};
export const valueConvertToFunction = (value) => value ?? (() => {});
export const objectValueConvert = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [
      k,
      k.includes("Load")
        ? valueConvertToFunction(v)
        : k.includes("props")
        ? valueConvertToObject(v)
        : valueConvert(v),
    ])
  );
export const convertOriginPathname = (pathname) =>
  pathname.replace(basePath, "/");
