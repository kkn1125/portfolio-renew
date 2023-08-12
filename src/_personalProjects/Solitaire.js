// https://github.com/kkn1125/new-solitaire
import ProjectModel from "../model/ProjectModel";
import { MONTH, FORM_URL, FORM_IMAGE } from "../util/global";

const Solitaire = new ProjectModel();
Solitaire.title = "Solitaire";
Solitaire.desc =
  "솔리테어 게임을 만들게 된 목적은 현재 가지고 있는 기술과 개발 능력을 테스트하기 위함입니다. 게임의 원리를 파악하고 원하는 추가기능을 개발하며 즐기기도 했고, 출퇴근 시간 직접 게임을 해보며, 오류를 발견하고 유지보수를 해볼 수 있었던 좋은 경험이었습니다.";
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
    header: "카드 덱 랜덤 셔플 기능 개발",
    body: ``,
  },
  {
    header: "카드 색상 교차 및 숫자 내림차순 매칭",
    body: ``,
  },
  {
    header: "카드 자동 완성 가능 여부 확인 알고리즘 개발",
    body: ``,
  },
  {
    header:
      "나열된 카드 중에서 선택이 가능한 n개의 카드를 선택하는 알고리즘 개발",
    body: ``,
  },
  {
    header:
      "수집가능한 카드의 경우 자동으로 수집하고 수집된 카드가 스택 가능하면 반대로 그라운드에 올리는 기능 개발",
    body: ``,
  },
  {
    header:
      "카드를 옮기거나 수집한 후, 뒤집어진 카드 차례가 되면 자동으로 오픈하는 알고리즘 개발",
    body: ``,
  },
  {
    header: "카드 자동완성 및 애니메이션 기능",
    body: ``,
  },
  {
    header: "배경음악 추가 및 랜덤 재생, 음악 on/off",
    body: ``,
  },
  {
    header: "백그라운드 배경 이미지 추가 및 변경 기능",
    body: ``,
  },
  {
    header: "선택 카드 하이라이팅",
    body: ``,
  },
];
Solitaire.links = [
  FORM_URL("demo", "https://kkn1125.github.io/new-solitaire/"),
];
Solitaire.github = "https://github.com/kkn1125/new-solitaire";
Solitaire.name = "solitaire";
Solitaire.path = "/solitaire";
Solitaire.cover =
  "https://github.com/kkn1125/new-solitaire/assets/71887242/d49cf751-3b1c-4607-9c2d-09670005691e";
Solitaire.images = [
  FORM_IMAGE(
    "메인 페이지",
    "https://github.com/kkn1125/new-solitaire/assets/71887242/d49cf751-3b1c-4607-9c2d-09670005691e"
  ),
  // FORM_IMAGE("", ""),
];

export default Solitaire;
