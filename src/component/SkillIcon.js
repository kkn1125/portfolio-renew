import icons from "@/icons";

export default (skillName) =>
  `<div class="text-center" title="${skillName}">
    <span class="d-inline-flex skill-icon ">${
      icons[skillName.replace(/[\s\-\_]+/g, "")]
    }</span>
    <br />
    <span class="d-inline-block title-to-content" title="${skillName}"></span>
  </div>`;
