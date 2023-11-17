import ProjectModel from "../model/ProjectModel";
import { MONTH, FORM_URL, FORM_IMAGE } from "../util/global";

const GamePang = new ProjectModel();

GamePang.important = true;
GamePang.title = "GamePang";
GamePang.desc = "같은 동물을 매치하여 점수를 얻는 2D 게임 모방";
GamePang.team = "개인";
GamePang.role = ["frontend"];
GamePang.mainSkills = ["typescript"];
GamePang.skills = ["cordova"];
GamePang.start = new Date(2023, MONTH(9));
GamePang.end = new Date(2023, MONTH(9));
GamePang.inProgress = false;
GamePang.listOpen = true;
GamePang.list = [
  {
    header: "애니메이션 동작 비동기 처리",
    body: ``,
  },
  {
    header: "게임 규칙 및 아이템 사용 규격 설정",
    body: ``,
  },
  {
    header: "동물 매치 검증 및 다음 턴 매치 가능한 동물 찾는 알고리즘 개발",
    body: ``,
  },
  {
    header: "캔버스 레이어 분할로 렌더링 최적화",
    body: ``,
  },
  {
    header: "아이템 사용 시 체이닝 계산 로직 개발",
    body: ``,
  },
  {
    header: "힌트 기능 및 매치 가능한 블럭 하이라이트 알고리즘 개발",
    body: ``,
  },
  {
    header: "퀘스트 기능 개발",
    body: ``,
  },
  {
    header: "퀘스트 완료 항목 큐에 담아 순차적 처리하는 로직 구현",
    body: ``,
  },
  {
    header: "게임 완료 및 새 게임 기능 구현",
    body: ``,
  },
  {
    header: "cordova를 이용한 모바일 버전 빌드 및 앱 배포 테스트",
    body: ``,
  },
];
GamePang.troubleshooting = [
  {
    problem: "애니메이션 비동기 수행",
    resolve: ["애니메이션 비동기 수행 시 클릭 방지"],
    process: [
      "blocking 배열 생성 후 애니메이션 작업이 있는 부분에서 숫자 0을 넣어 전역에서 blocking배열에 데이터 값이 있을 경우 작동 되지 않도록 관리",
    ],
    result: ["애니메이션 중에 클릭 또는 아이템 사용 등 방지"],
  },
];
GamePang.links = [FORM_URL("demo", "https://kkn1125.github.io/game-pang/")];
GamePang.github = "https://github.com/kkn1125/game-pang";
GamePang.name = "game-pang";
GamePang.path = "/game-pang";
GamePang.cover = "/gamepang01.png";
GamePang.images = [
  FORM_IMAGE(
    "게임 플레이",
    "https://github.com/kkn1125/portfolio-renew/assets/71887242/2f1eca26-9dfb-4e49-9ef0-9241b059b085"
  ),
  FORM_IMAGE("데스크탑 게임 이미지", "/gamepang02.png"),
  FORM_IMAGE(
    "모바일 반응형",
    "https://github.com/kkn1125/portfolio-renew/assets/71887242/51135e41-9052-4433-9b0f-39e4bb3d829d"
  ),
];

export default GamePang;
