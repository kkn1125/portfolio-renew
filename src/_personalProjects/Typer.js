import ProjectModel from "../model/ProjectModel";
import { MONTH, FORM_URL, FORM_IMAGE } from "../util/global";

const Typer = new ProjectModel();
Typer.title = "Typer";
Typer.desc = "한글과 특수문자 타자 효과";
Typer.team = "개인";
Typer.role = ["frontend"];
Typer.mainSkills = ["javascript"];
Typer.skills = [];
Typer.start = new Date(2021, MONTH(10));
Typer.end = new Date(2021, MONTH(11));
Typer.inProgress = false;
Typer.listOpen = false;
Typer.list = [
  {
    header: "한글을 자음, 모음, 받침을 분해하는 알고리즘 개발",
    body: ``,
  },
  {
    header: "분해된 한글을 재결합하는 알고리즘 개발",
    body: ``,
  },
  {
    header: "한글과 영문, 특수문자를 분류하여 분해하는 기능 개발",
    body: ``,
  },
  {
    header:
      "한글을 타이핑하는 효과를 극대화하기 위해 속도비율을 랜덤하게 적용하는 기능 추가",
    body: ``,
  },
  {
    header: "타이핑이 완성되는 속도 제어 기능 추가",
    body: ``,
  },
  {
    header:
      "타이핑 작성 후 다시 한 글자 씩 지우는 효과와 작성된 글을 모두 삭제하는 방식으로 분류하여 제작",
    body: ``,
  },
  {
    header: "버전 관리 및 업데이트 내역 작성",
    body: ``,
  },
];
Typer.links = [FORM_URL("demo", "https://kkn1125.github.io/typer/")];
Typer.github = "https://github.com/kkn1125/typer";
Typer.name = "typer";
Typer.path = "/typer";
Typer.cover = "/typer01.png";
Typer.images = [
  FORM_IMAGE("전체 문서 페이지", "typer01.png"),
  FORM_IMAGE("업데이트 내역 markdown → html", "typer02.png"),
];

export default Typer;
