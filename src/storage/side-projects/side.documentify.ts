import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const sideDocumentify = new ProjectModel({
  cover: getResource("documentify", "docu01.png"),
  github: "https://github.com/kkn1125/mkDocumentifyJS",
  demoSites: ["https://kkn1125.github.io/mkDocumentifyJS"],
  relations: null,
  path: "/side/documentify",
  title: "Documentify",
  description: [
    "JavaScript 주석을 분석해 API 문서 페이지를 생성하는 도구",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend],
  skills: [Skill("javascript")],
  start: new Date(2021, 9),
  end: new Date(2021, 10),
  works: [
    new Work(
      "주석 파싱과 정의 간 참조 연결",
      "로컬 파일의 JSDoc 주석을 필터링·직렬화해 변수·메서드 문서를 생성하고 참조 정의 링크를 자동 연결",
    ),
    new Work(
      "문서 탐색과 내보내기",
      "검색·문서 안내 기능과 단일·분할 파일·ZIP 저장을 제공",
    ),
  ],
  isSideProject: true,
  issues: null,
  images: null,
});
