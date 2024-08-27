import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { Issue } from "@models/issue";
import { ProjectModel } from "@models/project.model";

export const sideGamepang = new ProjectModel({
  cover: getResource("game-pang", "gamepang01.png"),
  github: "https://github.com/kkn1125/game-pang",
  demoSites: ["https://kkn1125.github.io/game-pang"],
  relations: null,
  path: "/side/gamepang",
  title: "GamePang",
  description: ["같은 동물 이미지를 매치시켜 점수를 얻는 2D 게임 모방"],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend],
  skills: [Skill("typescript")],
  start: new Date(2023, 8),
  end: new Date(2023, 8),
  works: [
    "애니메이션 동작 비동기 처리",
    "동물 블럭 제거 시 떨어지는 동작 구현",
    "동물 블럭 떨어진 후 매칭 시 자동 제거 알고리즘 제작",
    "게임 규칙 및 아이템 사용 규격 설정",
    "캔버스 레이어 분할하여 렌더링 최적화",
    "아이템 사용 시 게임 규칙 체이닝 연산 구현",
    "힌트 기능 및 매치 가능 블럭 하이라이트 알고리즘 제작",
    "퀘스트 기능 개발",
    "퀘스트 완료 항목 큐에 담아 순차적 처리",
    "게임 완료 처리 및 새 게임 기능 구현",
    "cordova를 이용한 안드로이드 APK 빌드 및 배포",
  ],
  isSideProject: true,
  issues: [
    new Issue({
      problem: "애니메이션 비동기 처리",
      processes: [
        "애니메이션 비동기 수행 시 클릭 방지",
        "Promise를 변수에 할당하면서 resolve함수를 반환 전 시점에 변수로 저장",
        "Promise를 반환시킬때 Pending하는 특성을 활용해서 애니메이션 및 데이터 처리 완료되는 시점에 resolve함수 호출",
      ],
      solves: ["애니메이션 병렬처리 및 후순위 단계 처리에 대한 이해도 향상"],
    }),
  ],
  images: null,
});
