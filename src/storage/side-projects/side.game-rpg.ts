import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getExternalImage } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const sideGameRpg = new ProjectModel({
  cover:
    "https://kkn1125.github.io/blog-assets/images/blog/article/solo-2d-game-development-retrospective/advanced/world/12-town-transition-40859b18d2.png",
  github: "https://github.com/kkn1125/pixel-game",
  demoSites: ["https://kkn1125.github.io/pixel-game/"],
  relations: null,
  path: "/side/game-rpg",
  title: "2D RPG · World Studio",
  description: [
    "게임 라이브러리 없이 엔진·멀티플레이와 콘텐츠 에디터를 직접 개발한 1인 2D RPG 프로젝트",
    "타일·유닛·전투부터 NPC·퀘스트·상점 편집까지 구현하고, 게임과 서버가 공통 맵 데이터를 사용하도록 연결",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend, Role.Backend],
  skills: [
    Skill("javascript"),
    Skill("typescript"),
    Skill("nodejs"),
    Skill("uwebsockets"),
    Skill("Protobuf"),
  ],
  start: new Date(2025, 1),
  end: null,
  works: [
    new Work(
      "게임 엔진과 공통 게임 규칙 구현",
      "타일·유닛·장비 구조를 설계하고 이동·인벤토리·드롭·공격·몬스터 추적과 Canvas 레이어 렌더링을 구현",
      "타일 높이·통행 여부·계단·경사로를 이동 판정에 연결하고 클라이언트와 서버가 충돌 계산을 공통 사용하도록 구성",
    ),
    new Work(
      "입력 기반 멀티플레이와 채팅 구현",
      "Node.js·µWebSockets.js와 Protobuf로 방향키 입력을 전달하고, 서버 이동 계산·클라이언트 선행 렌더링·키 해제 시 위치 보정을 연결",
      "입력·이동 계산·상태 적용을 분리해 싱글·멀티플레이를 지원하고, 서버·구역·채널·맵별 채팅과 귓속말을 구현",
    ),
    new Work(
      "NPC·퀘스트·상점 구조 설계",
      "NPC의 대화·상점 기능과 퀘스트 진행 관리를 분리해, 같은 NPC를 퀘스트 제공자나 중간 방문 대상으로 연결",
      "퀘스트 수락·진행·보상 흐름과 멀티플레이 재접속 후 상태 복구·중복 보상 방지를 검증",
    ),
    new Work(
      "World Studio 콘텐츠 에디터 개발",
      "지형·오토타일링·오브젝트 이동과 회전·NPC·몬스터·포털 배치를 편집하고 공통 JSON 맵 원본을 게임·서버에 연결",
      "NPC 외형·대화, 퀘스트 조건·물품 제출과 지급, 상점 판매 목록·가격 편집으로 확장하고 미리보기에서 게임 렌더링·충돌 계산을 재사용",
    ),
    new Work(
      "에이전트를 활용한 게임 리소스 적용과 검증",
      "탑다운 시점·모듈·오토타일링·캐릭터 비율 기준을 정하고 에이전트로 도트 리소스를 제작·적용",
      "타일 연결·방향별 캐릭터·장비와 신체 파츠를 확인하는 테스트 페이지를 만들고 원본·내보낸 PNG와 게임·에디터 화면을 비교",
    ),
  ],
  isSideProject: true,
  issues: [
    new Issue({
      problem:
        "발사체를 몬스터 타입으로 처리하면서 개체·렌더링 대상과 주변 감지 비용이 늘어 프레임이 저하됨",
      processes: [
        "발사체를 모션 이펙트로 재분류해 화면의 비행 표현과 피격 판정을 분리",
        "발사체 속도와 목표까지의 거리로 피격 시점을 계산",
      ],
      solves: [
        "발사체로 인해 몬스터 개체가 늘어나는 구조를 없애 당시의 프레임 저하를 해결",
      ],
    }),
    new Issue({
      problem:
        "좌표를 반복 전송하는 방식에서 패킷 전송량과 서버 응답을 기다리는 동안의 이동 표현을 함께 개선해야 함",
      processes: [
        "좌표 축약·정수 전송 방식과 방향키 입력 전송 방식을 비교",
        "입력을 전달해 서버가 이동을 계산하고, 클라이언트는 위치를 먼저 계산해 렌더링한 뒤 키 해제 시 서버 좌표로 보정",
      ],
      solves: [
        "시도한 방식 중 입력 전송으로 전송량을 가장 많이 줄이고 응답 대기 중에도 이동이 이어지도록 구성",
      ],
    }),
    new Issue({
      problem:
        "NPC를 상점·퀘스트 타입으로 나누면 상점 NPC가 퀘스트 제공자나 중간 방문자가 되는 조합을 다루기 어려움",
      processes: [
        "NPC와 퀘스트를 별도로 등록하고 퀘스트 시스템이 진행 흐름과 관련 NPC를 관리하도록 분리",
        "에디터에서 NPC의 대화·상점과 퀘스트 단계별 연결을 각각 설정",
      ],
      solves: [
        "새 NPC 타입을 추가하지 않고 상점·대화·퀘스트 역할을 조합할 수 있도록 구성",
      ],
    }),
    new Issue({
      problem:
        "에디터에서 배치한 지형·오브젝트와 실제 게임의 표시 위치·충돌·맵 이동이 일치해야 함",
      processes: [
        "공통 JSON 맵 원본을 사용하고 에디터 미리보기에서 게임의 렌더링·충돌 계산을 재사용",
        "통행 검사와 게임 내 이동, 저장한 설정의 재로딩과 대표 퀘스트의 수락·진행·보상 흐름을 확인",
      ],
      solves: [
        "편집과 실행에서 같은 데이터와 계산을 사용하고 저장·이동·퀘스트 동작을 함께 검증",
      ],
    }),
  ],
  images: [
    getExternalImage(
      "https://kkn1125.github.io/blog-assets/images/blog/article/solo-2d-game-development-retrospective/advanced/world/12-town-transition-40859b18d2.png",
      "리소스를 적용한 2D RPG의 마을과 맵 전환 화면",
    ),
    getExternalImage(
      "https://kkn1125.github.io/blog-assets/images/blog/article/solo-2d-game-development-retrospective/advanced/combat/02-magic-projectile-a9dbcebb3e.png",
      "숲 전투 중 표시되는 발사체와 마법 이펙트",
    ),
    getExternalImage(
      "https://kkn1125.github.io/blog-assets/images/blog/article/solo-2d-game-development-retrospective/advanced/quests/01-quest-offer-f1d3efaac6.png",
      "NPC 대화에서 퀘스트를 수락하거나 거절하는 화면",
    ),
    getExternalImage(
      "https://kkn1125.github.io/blog-assets/images/blog/article/solo-2d-game-development-retrospective/advanced/ui/01-shop-and-inventory-22acd1ec0a.png",
      "상점 판매 목록과 아이템 정보·인벤토리",
    ),
    getExternalImage(
      "https://kkn1125.github.io/blog-assets/images/blog/article/solo-2d-game-development-retrospective/advanced/world/08-weapon-shop-layout-a1478b562f.png",
      "무기점 실내에 배치한 가구·장식과 조명",
    ),
    getExternalImage(
      "https://kkn1125.github.io/blog-assets/images/blog/article/solo-2d-game-development-retrospective/advanced/world-studio/01-tile-palette-and-map-5e05130972.png",
      "World Studio의 타일 팔레트와 맵 편집 화면",
    ),
    getExternalImage(
      "https://kkn1125.github.io/blog-assets/images/blog/article/solo-2d-game-development-retrospective/advanced/world-studio/04-object-interaction-settings-a9abef220a.png",
      "오브젝트의 기준점·충돌 영역과 상호작용 연결 설정",
    ),
    getExternalImage(
      "https://kkn1125.github.io/blog-assets/images/blog/article/solo-2d-game-development-retrospective/advanced/world-studio/09-npc-dialogue-steps-4a22a3dcae.png",
      "NPC의 상호작용 대화를 스텝별로 편집하는 화면",
    ),
    getExternalImage(
      "https://kkn1125.github.io/blog-assets/images/blog/article/solo-2d-game-development-retrospective/advanced/world-studio/03-quest-step-flow-5f05104142.png",
      "퀘스트 수락·진행·완료 단계와 경유 NPC 연결 설정",
    ),
  ],
});
