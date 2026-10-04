import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const sideGamepang = new ProjectModel({
  cover: getResource("game-pang", "gamepang01.png"),
  github: "https://github.com/kkn1125/game-pang",
  demoSites: ["https://kkn1125.github.io/game-pang"],
  relations: null,
  path: "/side/gamepang",
  title: "GamePang",
  description: [
    "같은 블록을 매칭해 제거하는 2D 퍼즐 게임",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend],
  skills: [Skill("typescript")],
  start: new Date(2023, 8),
  end: new Date(2023, 8),
  works: [
    new Work(
      "연쇄 매칭과 애니메이션 순서 제어",
      "블록 제거·낙하·재매칭을 Promise 완료 시점에 연결하고 애니메이션 중 입력을 제한해 데이터 처리와 화면 동작 순서를 맞춤",
    ),
    new Work(
      "게임 규칙·렌더링과 앱 빌드",
      "아이템·힌트·퀘스트 규칙과 Canvas 레이어 렌더링을 구현하고 Cordova로 Android APK를 빌드·배포",
    ),
  ],
  // works: [
  //   "애니메이션 동작 비동기 처리",
  //   "동물 블럭 제거 시 떨어지는 동작 구현",
  //   "동물 블럭 떨어진 후 매칭 시 자동 제거 알고리즘 제작",
  //   "게임 규칙 및 아이템 사용 규격 설정",
  //   "캔버스 레이어 분할하여 렌더링 최적화",
  //   "아이템 사용 시 게임 규칙 체이닝 연산 구현",
  //   "힌트 기능 및 매치 가능 블럭 하이라이트 알고리즘 제작",
  //   "퀘스트 기능 개발",
  //   "퀘스트 완료 항목 큐에 담아 순차적 처리",
  //   "게임 완료 처리 및 새 게임 기능 구현",
  //   "cordova를 이용한 안드로이드 APK 빌드 및 배포",
  // ],
  isSideProject: true,
  issues: [
    new Issue({
      problem: "블록 이동 중 추가 입력과 후속 매칭이 진행되면 화면·데이터 처리 순서가 엇갈림",
      processes: [
      "애니메이션 중 입력 제한",
      "Promise를 애니메이션·데이터 처리 완료 시점에 해제",
    ],
      solves: [
      "애니메이션 이후 후속 단계를 수행하는 순서 제어 구현",
    ],
    }),
  ],
  images: [
    {
      src: getResource("game-pang", "gamepang01.png"),
      alt: "GamePang 메인 화면",
    },
    {
      src: getResource("game-pang", "gamepang02.png"),
      alt: "GamePang 게임 플레이",
    },
  ],
});
