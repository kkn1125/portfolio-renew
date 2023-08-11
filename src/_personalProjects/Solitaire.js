// https://github.com/kkn1125/new-solitaire
import ProjectModel from "../model/ProjectModel";
import { MONTH, URL } from "../util/global";

const Solitaire = new ProjectModel();
Solitaire.title = "Solitaire";
Solitaire.desc = "솔리테어 게임";
Solitaire.team = "개인";
Solitaire.role = ["frontend"];
Solitaire.mainSkills = ["TypeScript"];
Solitaire.skills = ["Scss", "JavaScript", "Vite"];
Solitaire.start = new Date(2023, MONTH(6));
Solitaire.end = new Date(2023, MONTH(6));
Solitaire.inProgress = false;
Solitaire.listOpen = true;
Solitaire.list = [
  {
    header: "카드 덱 셔플 기능 개발",
    body: ``,
  },
  {
    header: "카드 매치 알고리즘",
    body: ``,
  },
  {
    header: "카드 자동 완성 감지",
    body: ``,
  },
  {
    header: "카드 자동완성",
    body: ``,
  },
];
Solitaire.links = [URL("demo", "https://kkn1125.github.io/new-solitaire/")];
Solitaire.github = "https://github.com/kkn1125/new-solitaire";
Solitaire.name = "solitaire";
Solitaire.path = "/solitaire";
Solitaire.cover =
  "https://github.com/kkn1125/new-solitaire/assets/71887242/d49cf751-3b1c-4607-9c2d-09670005691e";

export default Solitaire;
