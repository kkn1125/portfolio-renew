import ProjectModel from "../model/ProjectModel";
import { MONTH, URL } from "../util/global";

const TreeParser = new ProjectModel();
TreeParser.title = "TreeParser";
TreeParser.desc = "파일 디렉토리 도식화 도구";
TreeParser.team = "개인";
TreeParser.role = ["frontend"];
TreeParser.mainSkills = ["javascript"];
TreeParser.skills = [];
TreeParser.start = new Date(2022, MONTH(4));
TreeParser.end = new Date(2022, MONTH(4));
TreeParser.inProgress = false;
TreeParser.listOpen = true;
TreeParser.list = [
  {
    header:
      "텍스트 들여쓰기를 분석해서 자식요소 유무와 동일 위치 요소를 판별하는 알고리즘 작성",
    body: ``,
  },
  {
    header: "pipeline으로 원문 텍스트를 순차 처리",
    body: ``,
  },
];
TreeParser.links = [URL("demo", "https://kkn1125.github.io/treeparser/")];
TreeParser.github = "https://github.com/kkn1125/treeparser";
TreeParser.name = "treeparser";
TreeParser.path = "/treeparser";
TreeParser.cover = "/tree01.png";

export default TreeParser;
