import ProjectModel from "../model/ProjectModel";
import { MONTH, FORM_URL } from "../util/global";

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
TreeParser.listOpen = false;
TreeParser.list = [
  {
    header: "들여쓰기 단위로 텍스트 파싱",
    body: ``,
  },
  {
    header: "파이프라인 방식으로 텍스트 전처리기 개발",
    body: ``,
  },
  {
    header:
      "전처리된 텍스트를 브랜치, 들여쓰기 단계, 그룹으로 판별하여 데이터 정제",
    body: ``,
  },
  {
    header: "정제된 데이터 브랜치로 나누어 계층으로 출력하는 알고리즘 개발",
    body: ``,
  },
  {
    header: "실시간 입/출력 및 사이즈, 이모지 여부, 띄어쓰기 조절 기능 추가",
    body: ``,
  },
  {
    header: "출력된 결과물 텍스트 또는 html 유형으로 복사 기능 개발",
    body: ``,
  },
];
TreeParser.links = [FORM_URL("demo", "https://kkn1125.github.io/treeparser/")];
TreeParser.github = "https://github.com/kkn1125/treeparser";
TreeParser.name = "treeparser";
TreeParser.path = "/treeparser";
TreeParser.cover = "/tree01.png";

export default TreeParser;
