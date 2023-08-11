import ProjectModel from "../model/ProjectModel";
import { MONTH, URL } from "../util/global";

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
];
Documentify.links = [URL("demo", "https://kkn1125.github.io/mkDocumentifyJS/")];
Documentify.github = "https://github.com/kkn1125/mkDocumentifyJS";
Documentify.name = "documentify";
Documentify.path = "/documentify";
Documentify.cover = "/docu01.png";
// Documentify.images = [["업데이트 내역 markdown → html", "typer02.png"]];

export default Documentify;
