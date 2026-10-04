import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

// 경력 근거: db-updater: e96e18a92d, 1f589dc8a8; v2: ad0e65075e, 3ad1911135, f35947f0d4; 협력사 dbupdate: 3abc945c0c, a0f95b2072.
export const fovDbupdater = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/fov/rnd-db-updater",
  title: "데이터베이스 자동 업데이터 R&D",
  description: [
    "기획자·클라이언트 개발자가 Google Sheets·CSV/SQL 데이터를 사내 DB에 반영하는 웹 도구",
    "초기 개발 2024.05~06; 후속 v2 개선 07~09, 협력사 도구 유지보수 07~10, 실행 가이드 정리 11월",
  ],
  // description: [
  //   "사내 데이터베이스 사용이 어려운 기획자 및 유니티 클라이언트 개발자를 위해 구글 시트 데이터를 로컬 데이터베이스 업데이트 하는 서비스",
  // ],
  team: Team.Development,
  company: Company.Fov,
  roles: [Role.Backend, Role.Frontend, Role.Server],
  skills: [Skill("typescript"), Skill("express"), Skill("nest"), Skill("typeorm"), Skill("react"), Skill("mysql"), Skill("mariadb"), Skill("socketio"), Skill("docker"), Skill("java"), Skill("springboot"), Skill("mybatis")],
  start: new Date(2024, 4),
  end: new Date(2024, 5),
  works: [
    new Work(
      "변경 검토와 선택 갱신이 가능한 DB 도구 개발",
      "DB 메타데이터와 시트 헤더·타입을 비교해 신규·변경 행을 분류하고 선택한 데이터만 갱신하고 자동 공백 제거가 비교를 오작동시키는 조건을 수정",
    ),
    new Work(
      "여러 사용자의 갱신 이력 공유",
      "동기화 이력을 저장하고 SSE에서 Socket.IO 알림으로 전환해 다른 사용자에게 변경을 전달하고 연결 종료와 본인 제외 알림 조건을 보완",
    ),
    new Work(
      "현장 실행 환경과 협력사 제공 도구 유지보수",
      "Docker·NAS·Windows 실행 환경과 사용 가이드를 구성하고, 제공받은 Java 도구의 설정 변환·예외 처리·SQL 호환 오류를 수정",
    ),
  ],
  // works: [
  //   "구글 시트와 로컬 데이터베이스 컬럼 검증",
  //   "구글 시트 엑셀 파일 변환 및 데이터 검증",
  //   "로컬 데이터베이스 비교 후 새로운 데이터 및 수정 데이터 건수 산정",
  //   "로컬 데이터베이스 테이블 선택 및 웹에서 행 데이터 미리보기 기능 제작",
  //   "사용자 구글 시트 데이터 동기화 시 다른 사용자에게 동기화 목록 알림 브로드캐스트",
  //   "실시간 알림을 위해 웹소켓을 추가하여 다른 개발자가 업데이트 시 동기화 내역 및 해당 내역 일괄 적용 기능 제작",
  //   "팀원 사용 후 피드백 반영하여 유지보수",
  //   "기존 개발자 데이터베이스 동기화 작업을 간소화하여 개발시간 30% 단축",
  // ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "시트와 DB의 컬럼·타입·순서가 달라 데이터를 그대로 갱신하기 어려움",
      processes: [
      "DB 메타데이터를 읽어 시트 헤더·타입을 매핑하고 유효한 행 확인",
      "신규·변경 행을 구분해 미리 보여주고 선택한 목록만 갱신",
      "원본 셀 값의 자동 공백 제거로 발생하는 비교 오류 수정",
    ],
      solves: [
      "반영할 변경을 검토하고 선택할 수 있는 데이터 갱신 흐름 구현",
    ],
    }),
  ],
  images: null,
});
