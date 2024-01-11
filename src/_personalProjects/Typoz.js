import ProjectModel from "../model/ProjectModel";
import { MONTH, FORM_URL, FORM_IMAGE } from "../util/global";

const Typoz = new ProjectModel();
Typoz.important = true;
Typoz.title = "Typoz";
Typoz.desc = "한글 분해, 재조합 기능이 있는 타이핑 효과 라이브러리";
Typoz.team = "개인";
Typoz.role = ["frontend"];
Typoz.mainSkills = ["TypeScript"];
Typoz.skills = ["gulp", "webpack"];
Typoz.start = new Date(2023, MONTH(12));
Typoz.end = new Date(2023, MONTH(12));
Typoz.inProgress = false;
Typoz.listOpen = true;
Typoz.list = [
  {
    header: "제작 - 테스트 - 검증 과정을 통해 기능 제작",
    body: ``,
  },
  {
    header: "한글 자모 분해 및 제조합 기능 구현",
    body: ``,
  },
  {
    header: "빌더 패턴을 이용한 타이핑 사용자화",
    body: ``,
  },
  {
    header: "umd, esm, cjs 다중 빌드를 통해 각 작업 환경에 대응",
    body: ``,
  },
  {
    header: "npm 모듈 등록",
    body: ``,
  },
  {
    header: "docs 페이지 제작",
    body: ``,
  },
  {
    header: "비동기 처리를 통해 타이핑 애니메이션 처리",
    body: ``,
  },
  {
    header: "라이브러리 CDN 제공",
    body: ``,
  },
  {
    header: "리액트에서 활용 가능하도록 typoz용 컴포넌트 제작 및 docs 추가",
    body: ``,
  },
];
Typoz.links = [
  FORM_URL("demo", "https://anyrequest.github.io/typoz/"),
  FORM_URL("npm", "https://www.npmjs.com/package/typoz?activeTab=readme"),
];
Typoz.github = "https://github.com/AnyRequest/typoz";
Typoz.name = "typoz";
Typoz.path = "/typoz";
Typoz.cover = "/typoz.png";
Typoz.images = [FORM_IMAGE("랜딩 페이지", "anyrequest.github.io_typoz_.png")];

export default Typoz;
