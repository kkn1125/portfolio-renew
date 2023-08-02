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
export const revertOriginPathname = (pathname) =>
  basePath + pathname.replace("/", "");
export const extractTime = (time) =>
  `${time.getFullYear()}. ${time.getMonth() + 1}`;

export const renderProjectList = (
  item
) => `<div class="text-title-1 text-center d-flex justify-content-between">
  <span class="d-inline-flex gap-1 align-items-center">
    <span>${item.title}</span>
    <span class="tag">${extractTime(item.start)} ~ ${
  item.inProgress ? "진행 중" : extractTime(item.end)
}</span>
  </span>
  <span>
    <span class="tag tag-gray">${item.team}</span>
    ${item.role
      .split(",")
      .map((role) => `<span class="tag tag-secondary">${role.trim()}</span>`)
      .join(" ")}
    <button class="btn btn-${
      item.listOpen ? "gray" : "info"
    } list-toggle btn-small" data-title="${item.title}">${
  item.listOpen ? "닫기" : "펼치기"
}</button>
  </span>
</div>
${item.desc ? `<div class="blockquote">${item.desc}</div>` : ``}
<div class="divider-1"></div>
<div class="d-flex flex-column list-gap-2 list ${
  item.listOpen ? "list-open" : "list-close"
}">
${item.list
  .map(
    (line) => `<div class="list-item dense">
<span class="header">${line.header}</span>
<span class="body">${line.body}</span>
</div>`
  )
  .join("")}
</div>`;
export const renderWorkExprienceList = (
  item
) => `<div class="text-title-1 text-center d-flex justify-content-between">
  <span class="d-inline-flex gap-1 align-items-center">
    <span>${item.title}</span>
    <span class="tag">${extractTime(item.start)} ~ ${
  item.inProgress ? "재직 중" : extractTime(item.end)
}</span>
  </span>
  <span>
    <span class="tag tag-gray">${item.team}</span>
    <span class="tag tag-secondary">${item.role}</span>
    <button class="btn btn-${
      item.listOpen ? "gray" : "info"
    } list-toggle btn-small" data-title="${item.title}">${
  item.listOpen ? "닫기" : "펼치기"
}</button>
  </span>
</div>
${item.desc ? `<div class="blockquote">${item.desc}</div>` : ``}
<div class="divider-1"></div>
<div class="d-flex flex-column list-gap-2 list ${
  item.listOpen ? "list-open" : "list-close"
}">
${item.list
  .map(
    (line) => `<div class="list-item dense">
<span class="header">${line.header}</span>
<span class="body">${line.body}</span>
</div>`
  )
  .join("")}
</div>`;

/**
 *
 * @param {any} list
 * @param {'project'|'work'} type
 * @returns
 */
export const renderDataList = (list, type = "project") =>
  list
    .map(type === "project" ? renderProjectList : renderWorkExprienceList)
    .join(`<div class="divider-2"></div>`);
