import icons from "../assets/icons";

export default (skillName) =>
  `<div class="text-center" title="${skillName}">
    <span class="d-inline-flex skill-icon ">${icons[skillName]}</span>
    <br />
    <span class="d-inline-block title-to-content" title="${skillName}"></span>
  </div>`;
