import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const sideSolitaire = new ProjectModel({
  cover:
    "https://github.com/kkn1125/new-solitaire/assets/71887242/d49cf751-3b1c-4607-9c2d-09670005691e",
  github: "https://github.com/kkn1125/new-solitaire",
  demoSites: ["https://kkn1125.github.io/new-solitaire"],
  relations: null,
  path: "/side/solitaire",
  title: "Solitaire",
  description: [
    "카드 이동·수집·자동 완성 규칙을 직접 구현한 솔리테어 게임",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend],
  skills: [Skill("typescript"), Skill("sass"), Skill("vite")],
  start: new Date(2023, 5),
  end: new Date(2023, 5),
  works: [
    new Work(
      "카드 상태와 이동 규칙 구현",
      "색상 교차·내림차순과 선택 가능한 카드 묶음을 검사하고, 수집·다음 카드 공개·자동 완성과 이동 애니메이션을 연결",
    ),
  ],
  isSideProject: true,
  issues: null,
  images: null,
});
