import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getImage, getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const sideGameRpg = new ProjectModel({
  cover: getResource("game-rpg", "rpg01.png"),
  github: "https://github.com/kkn1125/plat-game-template",
  demoSites: ["https://kkn1125.github.io/plat-game-template/"],
  relations: null,
  path: "/side/game-rpg",
  title: "Game RPG",
  description: [
    "플랫폼 게임 템플릿 프로젝트",
    "라이브러리에 의존하지 않고 자체 엔진 및 게임 로직을 구현",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend, Role.Backend],
  skills: [
    Skill("javascript"),
    Skill("typescript"),
    Skill("nodejs"),
    Skill("uwebsockets"),
  ],
  start: new Date(2025, 1),
  end: null,
  works: [
    new Work(
      "기본 테마 설정 및 스토리라인 구성",
      "NPC 별 성격 부여 및 스토리 작성",
      "맵 구성 다양화 및 필드 계획",
      "NPC 위치 조정"
    ),
    new Work(
      "RPG 게임을 구현하기 위한 구조 설계",
      "유닛 추가 및 확장성 고려한 상속 규칙 정립",
      "유닛 장비 착용을 위한 인벤토리 구조 설계",
      "장비 드랍 및 발사체 상호작용 설계",
      "캐릭터 움직임 구현"
    ),
    new Work(
      "애니메이션 구현",
      "애니메이션 상속 구현",
      "화면 전환 애니메이션 구현",
      "캐릭터 움직임 및 4방향 캐릭터 이미지 제작",
      "몬스터 추가에 대한 애니메이션 확장 가능 구조 계획",
      "지형지물 애니메이션 제작 및 물 지형 동적 애니메이션 구현"
    ),
    new Work(
      "캐릭터 상호작용",
      "물걸 드랍 및 줍기 기능 구현",
      "NPC 말풍선 기능 추가 구현"
    ),
    new Work("캐릭터 공격 구현", "몬스터 데미지 연산 및 피격 시스템 추가"),
    new Work("캐릭터 아이템 구현", "장비 추가 및 확장에 대한 상속 구조 설계"),
    new Work(
      "유닛 상속을 통한 고유 특성 유닛 구현",
      "맵 이동 가능한 포탈 구현",
      "사이트 이동이 가능한 포탈 구현"
    ),
    new Work(
      "NPC 유닛 움직임 구현",
      "제한된 범위 내 이동하는 패턴 구현",
      "대화 중 캐릭터 따라 바라보는 기능 구현"
    ),
    new Work(
      "멀티 플레이를 위한 소켓서버 구축",
      "유닛 이동 시 16ms마다 좌표 데이터 전송 및 전파",
      "유닛 바라보는 애니메이션 동기화"
    ),
  ],
  isSideProject: true,
  issues: [
    new Issue({
      problem: "몬스터 어그로 시스템 구현",
      processes: [
        "주변을 인식하는 유닛의 공통 기능 상속",
        "어그로는 몬스터 유닛만 고유해야하기 때문에 주변 인식 기능을 활용한 따라가기 기능 구현",
        "몬스터 주변 플레이어 근접 피격 시스템 구현",
      ],
      solves: [
        "몬스터 클래스만 어그로 및 주변 유닛 피격",
        "자연스러운 몬스터 액션 구현",
      ],
    }),
    new Issue({
      problem: "돌출 오브젝트 레이어 처리",
      processes: [
        "하나의 레이어에 오브젝트 렌더링 시 돌출 오브젝트의 입체감이 사라짐",
        "레이어 분리를 통한 돌출 오브젝트 입체감 구현",
      ],
      solves: [
        "돌출 오브젝트 레이어 분리를 통한 입체감 향상",
        "레이어 분리를 통해 캔서브 렌더링 성능 최적화",
      ],
    }),
    new Issue({
      problem: "미니맵 구현",
      processes: [
        "맵이 한정적으로 화면에 렌더링되기 때문에 미니맵 필요",
        "미니맵 구현 시 레이어 분리하여 스케일 계산을 통해 미니맵 생성",
      ],
      solves: [
        "미니맵 스케일은 맵 가로, 세로 최대값 대신 일정 스케일로 줄이되 임직이면서 미니맵 범위를 조정하도록 계산",
        "미니맵으로 인해 사용자 위치 특정 가능",
      ],
    }),
  ],
  images: [
    getImage("game-rpg", "rpg02.png", "NPC 상호작용"),
    getImage("game-rpg", "rpg03.png", "맵 전환"),
    getImage("game-rpg", "rpg04.png", "몬스터 어그로 시스템템"),
    getImage("game-rpg", "rpg05.png", "몬스터 피격 및 레벨업 시스템템"),
    getImage("game-rpg", "rpg06.png", "발사체 발사 및 상호작용"),
    getImage("game-rpg", "rpg07.png", "인벤토리 구현"),
    getImage("game-rpg", "rpg08.png", "상태창 및 스탯 향상 기능 구현"),
    getImage("game-rpg", "rpg09.png", "NPC 주변 유닛 바라보는 기능 구현"),
    getImage(
      "game-rpg",
      "rpg10.png",
      "레이어 분리를 통한 돌출 오브젝트 입체감 구현"
    ),
    getImage("game-rpg", "rpg11.png", "미니맵 구현"),
  ],
});
