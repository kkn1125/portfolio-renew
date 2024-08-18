import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";

export const sideTreeParser = new ProjectModel({
  path: "/side/tree-parser",
  cover: getResource("treeparser", "tree01.png"),
  github: "https://github.com/kkn1125/treeparser",
  demoSites: ["https://kkn1125.github.io/treeparser"],
  title: "Tree Parser",
  description: ["파일 디렉토리 시각화 도구"],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend],
  skills: [Skill("javascript")],
  start: new Date(2022, 3),
  end: new Date(2022, 3),
  works: [
    "들여쓰기 단위로 텍스트 파싱",
    "파이프라인 방식으로 텍스트 전처리기 제작",
    "전처리된 텍스트를 브랜치, 들여쓰기 단계, 그룹으로 판별하여 데이터 변환",
    "데모 사이트 제작 및 실시간 입/출력 및 사이즈, 이모지 추가 여부, 띄어쓰기 조절 패널 추가",
    "출력된 결과물 텍스트 또는 HTML 유형 복사 기능 추가",
  ],
  isSideProject: true,
});
