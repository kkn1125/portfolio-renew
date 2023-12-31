import ProjectModel from "@/model/ProjectModel";
import { basePath, MODE } from "./global";

export const format = (time, form) =>
  form.replace(/YYYY|MM|dd|HH|mm|ss|SSS|AP/g, ($1) => {
    const base = new Date(time);
    const year = base.getFullYear();
    const month = base.getMonth() + 1;
    const day = base.getDate();
    const hour = base.getHours();
    const minute = base.getMinutes();
    const second = base.getSeconds();
    const millisecond = base.getMilliseconds();
    const isOver = hour > 12;

    switch ($1) {
      case "YYYY":
        return year.toString().padStart(4, "0");
      case "MM":
        return month.toString().padStart(2, "0");
      case "dd":
        return day.toString().padStart(2, "0");
      case "HH":
        return hour.toString().padStart(2, "0");
      case "mm":
        return minute.toString().padStart(2, "0");
      case "ss":
        return second.toString().padStart(2, "0");
      case "SSS":
        return millisecond.toString().padStart(3, "0");
      case "AP":
        return isOver ? "PM" : "AM";
      default:
        return $1;
    }
  });
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
export const revertOriginPathname = (pathname) =>
  basePath + pathname.replace("/", "");
export const extractTime = (time) => format(time, "YYYY. MM.");
export const responsiveImagePath = (base, path) =>
  path.startsWith("http")
    ? path
    : path.startsWith("data:")
    ? path
    : (MODE ? "" : "/portfolio-renew") +
      "/images/" +
      base +
      (path.startsWith("/") ? path : "/" + path);
/**
 *
 * @param {ProjectModel} a
 * @param {ProjectModel} b
 * @returns
 */
export const sortImportantList = (a, b) => {
  // If 'start' values are equal, sort by 'listOpen' in descending order
  if (a.important < b.important) return 1;
  if (a.important > b.important) return -1;

  return 0;
};
export const sortShowList = (a, b) => {
  // If 'start' values are equal, sort by 'listOpen' in descending order
  if (a.listOpen < b.listOpen) return 1;
  if (a.listOpen > b.listOpen) return -1;

  return 0;
};
export const sortList = (a, b) => {
  // Sort by 'start' in descending order
  if (a.start < b.start) return 1;
  if (a.start > b.start) return -1;
  return 0;
};
export const ditConvert = (text) => text.replace(/\@\:\-\>/g, "→");
