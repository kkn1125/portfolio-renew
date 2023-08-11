import ProjectModel from "../model/ProjectModel";
import { MONTH, URL } from "../util/global";

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
Typer.listOpen = true;
Typer.list = [
  {
    header: "한글 분해 및 재조합",
    body: ``,
  },
  {
    header: "랜덤 함수를 이용한 타이핑 딜레이 효과 구현",
    body: ``,
  },
];
Typer.links = [URL("demo", "https://kkn1125.github.io/typer/")];
Typer.github = "https://github.com/kkn1125/typer";
Typer.name = "typer";
Typer.path = "/typer";
Typer.cover = "/typer01.png";
Typer.images = [["업데이트 내역 markdown → html", "typer02.png"]];

export default Typer;
