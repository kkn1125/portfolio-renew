import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";

export const sideDocumentify = new ProjectModel({
  cover: getResource("documentify", "docu01.png"),
  github: "https://github.com/kkn1125/mkDocumentifyJS",
  demoSites: ["https://kkn1125.github.io/mkDocumentifyJS"],
  relations: null,
  path: "/side/documentify",
  title: "Documentify",
  description: [
    "JSDoc 방식의 주석을 분석하고 자동으로 문서화 페이지를 제작해주는 기능",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend],
  skills: [Skill("javascript")],
  start: new Date(2021, 9),
  end: new Date(2021, 10),
  works: [
    "로컬 디렉토리 자바스크립트 파일 주석 분석",
    "단일/분할 방식 저장 기능 구현",
    "채팅봇 기능 구현",
    "검색창 구현 및 MDN 검색창 디자인 참조",
    "자바스크립트 파일 읽기 및 주석 필터링 기능 개발",
    "분류된 주석 직렬화 및 데이터 추출 알고리즘 제작",
    "@reference 분석 후 연관 정의로 이동하는 링크 자동 첨부",
    "변수 및 메서드 파일별 자동 문서화",
    "zip 저장 지원",
  ],
  isSideProject: true,
  issues: null,
  images: null,
});
