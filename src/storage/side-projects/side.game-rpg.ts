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
    "게임 라이브러리 없이 엔진·규칙과 멀티플레이를 구현하는 플랫폼 게임 프로젝트",
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
      "게임 유닛과 상호작용 구조 구현",
      "유닛·장비 상속 구조로 이동·인벤토리·드롭·공격·몬스터 추적 규칙을 구현",
    ),
    new Work(
      "멀티플레이 상태 전파",
      "Node.js·µWebSockets.js 서버에서 캐릭터 좌표와 방향 상태를 주기적으로 전달해 참여자 화면에 반영",
    ),
    new Work(
      "화면 표현과 위치 안내",
      "Canvas 레이어를 분리해 오브젝트와 캐릭터의 겹침을 처리하고 애니메이션·미니맵을 구현",
    ),
  ],
  isSideProject: true,
  issues: [
    new Issue({
      problem: "주변 인식은 여러 유닛에 필요하지만 추적·공격은 몬스터에만 적용되어야 함",
      processes: [
      "주변 인식을 공통 기능으로 분리",
      "몬스터에서 추적·공격 규칙을 확장",
    ],
      solves: [
      "공통 인식 기능과 몬스터 행동을 구분해 구현",
    ],
    }),
    new Issue({
      problem: "같은 레이어의 오브젝트와 캐릭터가 겹칠 때 앞뒤 관계가 표현되지 않음",
      processes: [
      "오브젝트 렌더링 레이어 분리",
      "미니맵에 축소 좌표와 표시 범위를 계산",
    ],
      solves: [
      "오브젝트의 앞뒤 관계와 미니맵의 현재 위치를 표현",
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
