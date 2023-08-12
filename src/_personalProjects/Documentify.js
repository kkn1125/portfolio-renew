import ProjectModel from "../model/ProjectModel";
import { MONTH, FORM_URL, FORM_IMAGE } from "../util/global";

const Documentify = new ProjectModel();
Documentify.title = "Documentify";
Documentify.desc = "한글과 특수문자 타자 효과";
Documentify.team = "개인";
Documentify.role = ["frontend"];
Documentify.mainSkills = ["javascript"];
Documentify.skills = [];
Documentify.start = new Date(2021, MONTH(10));
Documentify.end = new Date(2021, MONTH(11));
Documentify.inProgress = false;
Documentify.listOpen = true;
Documentify.list = [
  {
    header: "로컬 디렉토리의 자바스크립트 파일의 주석 분석",
    body: ``,
  },
  {
    header: "[단일/분할] 방식으로 저장 기능 구현",
    body: ``,
  },
  {
    header: "채팅봇 기능 구현",
    body: ``,
  },
  {
    header: "검색창 구현 - MDN페이지 검색 UI 참조",
    body: ``,
  },
  {
    header: "자바스크립트 파일 읽기 및 주석 필터링 기능 개발",
    body: ``,
  },
  {
    header: "분류된 주석 직렬화 및 데이터 추출 알고리즘 개발",
    body: ``,
  },
  {
    header: "추출된 데이터 reference로 이동하는 알고리즘 개발",
    body: ``,
  },
  {
    header: "주석 데이터 자동 파싱 및 문서화 알고리즘 개발",
    body: ``,
  },
  {
    header: "SPA 및 분할 페이지 작성 알집 저장 기능 개발",
    body: ``,
  },
];
Documentify.links = [
  FORM_URL("demo", "https://kkn1125.github.io/mkDocumentifyJS/"),
];
Documentify.github = "https://github.com/kkn1125/mkDocumentifyJS";
Documentify.name = "documentify";
Documentify.path = "/documentify";
Documentify.cover = "/docu01.png";
Documentify.images = [
  FORM_IMAGE("업데이트 내역 markdown → html", "docu01.png"),
];

export default Documentify;
