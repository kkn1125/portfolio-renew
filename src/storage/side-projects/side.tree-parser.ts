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
  description: ["파일 디렉토리 시각화 도구"],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend],
  skills: [Skill("javascript")],
  start: new Date(2022, 3),
  end: new Date(2022, 3),
  works: [
    new Work("들여쓰기 단위로 텍스트 파싱"),
    new Work("파이프라인 방식으로 텍스트 전처리기 제작"),
    new Work(
      "전처리된 텍스트를 브랜치, 들여쓰기 단계, 그룹으로 판별하여 데이터 변환"
    ),
    new Work(
      "데모 사이트 제작 및 실시간 입/출력 및 사이즈, 이모지 추가 여부, 띄어쓰기 조절 패널 추가"
    ),
    new Work("출력된 결과물 텍스트 또는 HTML 유형 복사 기능 추가"),
  ],
  isSideProject: true,
  issues: null,
  images: [getImage("treeparser", "tree01.png", "랜딩 페이지")],
});
