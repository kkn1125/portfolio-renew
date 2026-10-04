import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getImage, getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const sideTreeParser = new ProjectModel({
  cover: getResource("treeparser", "tree01.png"),
  github: "https://github.com/kkn1125/treeparser",
  demoSites: ["https://kkn1125.github.io/treeparser"],
  relations: null,
  path: "/side/tree-parser",
  title: "Tree Parser",
  description: [
    "들여쓴 텍스트를 디렉토리 트리로 변환하는 웹 도구",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend],
  skills: [Skill("javascript")],
  start: new Date(2022, 3),
  end: new Date(2022, 3),
  works: [
    new Work(
      "텍스트 파싱과 트리 출력",
      "파이프라인 전처리로 들여쓰기·분기·그룹을 판별해 트리 데이터로 변환하고 실시간 미리보기와 텍스트·HTML 복사를 제공",
    ),
  ],
  isSideProject: true,
  issues: null,
  images: [getImage("treeparser", "tree01.png", "랜딩 페이지")],
});
