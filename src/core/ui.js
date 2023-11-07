import SkillIcon from "@/component/SkillIcon";
import {
  changeSign,
  dataList,
  isClosed,
  menuPanel,
  MODE,
  RESPONSIVE,
} from "@/util/global";
import { extractTime, responsiveImagePath } from "@/util/tool";

const CLOSE_TEXT_KO = "접기";
const OPEN_TEXT_KO = "펼치기";

export default class UI {
  constructor() {
    const handleClick = (/** @type {MouseEvent} */ e) => {
      /** @type {HTMLElement} */
      const target = e.target;

      if (target.closest("#menu-panel-exit-btn")) {
        if (isClosed()) {
          this.openMenuPanel();
        } else {
          this.closeMenuPanel();
        }
      }

      if (target.closest("#menu")) {
        if (isClosed()) {
          this.openMenuPanel();
        } else {
          this.closeMenuPanel();
        }
      }

      if (
        target.closest(".list-toggle") ||
        target.classList.contains("list-toggle")
      ) {
        const divider =
          target.parentElement.parentElement.querySelector("[class^=divider");
        const list = target.parentElement.parentElement.querySelector(".list");
        const isOpen = list.classList.contains("list-open");
        if (isOpen) {
          this.closeList(list, target, divider);
        } else {
          this.openList(list, target, divider);
        }
      }

      // if (target.closest("#gnb-menu") && target.classList.contains("item")) {
      //   manager.navigator.to(`/${target.innerText.toLowerCase()}`);
      // }
    };

    const handleKeydown = (e) => {
      const key = e.key;

      if (key === "Escape") {
        if (!isClosed()) {
          menuPanel().classList.remove("open");
          menuPanel().classList.add("close");
        }
      }

      if (e.ctrlKey && e.altKey && key === "p") {
        document.body.style.overflow = "revert";
        document.getElementById("main").classList.remove("overflow-auto");
        print();
        document.body.style.overflow = "";
        document.getElementById("main").classList.add("overflow-auto");
      }
    };

    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("click", handleClick);
  }

  openMenuPanel() {
    menuPanel().classList.add("open");
    menuPanel().classList.remove("close");
  }
  closeMenuPanel() {
    menuPanel().classList.remove("open");
    menuPanel().classList.add("close");
  }
  openList(list, target, divider) {
    divider.classList.remove("py-0");
    target.innerText = CLOSE_TEXT_KO;
    target.classList.remove("btn-info");
    target.classList.add("btn-gray");
    list.classList.add("list-open");
    list.classList.remove("list-close");
  }
  closeList(list, target, divider) {
    divider.classList.add("py-0");
    target.innerText = OPEN_TEXT_KO;
    target.classList.add("btn-info");
    target.classList.remove("btn-gray");
    list.classList.add("list-close");
    list.classList.remove("list-open");
  }

  card(projects) {
    const cardList = projects
      .map(
        (project) => `
    <div class="card" data-title="${
      project.title
    }" style="--cover-path: url(${responsiveImagePath(
          project.name,
          project.cover
        )});" onclick="manager.navigator.to('${"/portfolio" + project.path}')">
        <div class="d-flex">
          <div class="tag">Project</div>
          <div class="f-bold">
            ${project.title}
          </div>
        </div>
        <div class="d-flex">
          <div class="tag">Period</div>
          <div class="tag">
            ${extractTime(project.start)} ~ ${extractTime(project.end)}
          </div>
        </div>
        <!--
        <div>${project.desc.slice(0, 20) + "..."}</div>
        -->
        <div class="d-flex overflow-auto">
          <div class="tag">Main Skills</div>
          <div class="d-flex flex-wrap" style="gap: 0.2rem;">
            ${project.mainSkills
              .map((skill) => `<div class="tag tag-success">${skill}</div>`)
              .join("")}
          </div>
        </div>
        <div class="d-flex overflow-auto">
          <div class="tag">Skills</div>
          <div class="d-flex flex-wrap" style="gap: 0.2rem;">
            ${project.skills
              .map((skill) => `<div class="tag tag-warn">${skill}</div>`)
              .join("")}
          </div>
        </div>
    </div>
    `
      )
      .join("");
    return `<div class="card-list">${cardList}</div>`;
  }

  renderProjectList({
    type,
    path,
    title,
    desc,
    team,
    role,
    mainSkills,
    skills,
    start,
    end,
    inProgress,
    listOpen,
    list,
    important,
  }) {
    const teamTags = `<span class="tag tag-gray" title="${team.trim()}">${team.trim()}</span>`;
    const roleTags = role
      .map(
        (role) =>
          `<span class="tag tag-info" title="${role.trim()}">${role.trim()}</span>`
      )
      .join(" ");
    const mainSkillsTags = mainSkills
      .map(
        (mainSkills) =>
          `<span class="tag tag-secondary" title="${mainSkills.trim()}">${mainSkills.trim()}</span>`
      )
      .join(" ");
    const skillsTags = skills
      .map(
        (skills) =>
          `<span class="tag tag-warn" title="${skills.trim()}">${skills.trim()}</span>`
      )
      .join(" ");
    const isInProgressEnd = inProgress
      ? type === "project"
        ? "진행 중"
        : "재직 중"
      : extractTime(end);
    const listItems = list
      .map(
        (
          line
        ) => `<div class="list-item dense gap-0 gap-inherit-${RESPONSIVE} list-item-noline flex-row-${RESPONSIVE} flex-column">
    <span class="header">📌 ${line.header}</span>
    <span class="body">${line.body}</span>
    </div>`
      )
      .join("");
    const btnColor = listOpen ? "gray" : "info";
    const btnText = listOpen ? CLOSE_TEXT_KO : OPEN_TEXT_KO;

    return `
  <div class="section-item">
    <div class="d-flex flex-column gap-2 justify-content-between">

      <div class="flex-0-0-80">
        <span class="d-inline-flex gap-0 gap-1-${RESPONSIVE} align-items-center"${
      important ? `title="important"` : ""
    }>
          <span class="text-title-1">${title}${important ? " 🌟" : ""}</span>
          <button title="상세 페이지" class="btn btn-info btn-outline btn-small" onclick="manager.navigator.to('/portfolio${path}')">📄 자세히</button>
        </span>

        <div class="d-flex flex-column f-bold mb-1">
          <span style="font-size: 0.85rem; line-height: 1.8;">
            프로젝트 기간 ${extractTime(start)} ~ ${isInProgressEnd}
          </span>
          <span style="font-size: 0.85rem; line-height: 1.8;">
            소속 ${teamTags}
          </span>
          <span style="font-size: 0.85rem; line-height: 1.8;">
            역할 ${roleTags}
          </span>
          <span style="font-size: 0.85rem; line-height: 1.8;">
            사용 스택 ${mainSkillsTags} ${skillsTags}
          </span>
        </div>

        ${desc ? `<div class="blockquote">${changeSign(desc)}</div>` : ``}
        <span>
          <button class="my-1 btn btn-${btnColor} list-toggle btn-small" data-title="${title}">${btnText}</button>
        </span>
      
        <div class="divider-0"></div>
        <div class="d-flex flex-column list-gap-2 list ${
          listOpen ? "list-open" : "list-close"
        }">
        ${changeSign(listItems)}
        </div>
      </div>
  
    </div>
  
  </div>
  `;
  }

  /**
   *
   * @param {any} list
   * @param {'project'|'work'} type
   * @returns
   */
  renderDataList(list, type = "project") {
    return list
      .filter((data) => data.visible)
      .map(this.renderProjectList.bind(this))
      .join(`<div class="divider-5"></div>`);
  }

  renderSkillSet(title, skills) {
    return `<div class="list-item justify-content-center align-items-center flex-wrap flex-column flex-row-${RESPONSIVE} gap-1-sm gap-5-${RESPONSIVE}">
    <div class="text-gray text-uppercase f-bold fs-2 fs-inherit-${RESPONSIVE}">
      ${title}
    </div>
    <div class="d-flex flex-1 justify-content-center justify-content-start-${RESPONSIVE} gap-3 flex-wrap">
      ${skills.map(SkillIcon).join("")}
    </div>
  </div>`;
  }
}
