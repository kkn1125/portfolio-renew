import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

// 문제-해결-이유-성과
// 경력 근거: miraen_cardtalk_socket: 2025-11~12 기능 변경. 2026년 수정은 사용자 확인에 따라 운영 항목으로 분리.
export const onflouCardtalk = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/onflou/cardtalk",
  title: "미래엔 엠티처 카드톡 구축",
  description: [
    "교사와 학생이 함께 참여하는 4종 교육 게임의 실시간 멀티플레이 서버 구축",
    "백엔드 구현부터 상태 관리, 운영 로그·지표와 부하 테스트 구성까지 담당",
  ],
  team: Team.Backend,
  company: Company.Onflou,
  roles: [Role.Backend, Role.Server],
  skills: [
    Skill("typescript"),
    Skill("socketio"),
    Skill("nodejs"),
    Skill("redis"),
    Skill("grafana"),
    Skill("prometheus"),
    Skill("k6"),
    Skill("docker"),
    Skill("ecr"),
  ],
  start: new Date(2025, 10),
  end: new Date(2025, 11),
  works: [
    new Work(
      "4종 교육 게임의 실시간 서버 구현",
      "Node.js·Socket.IO 기반으로 참여자·팀의 입장, 재접속, 점수와 종료 흐름을 구현하고 게임 결과 API를 연결",
    ),
    new Work(
      "동시 요청을 고려한 게임 상태 관리",
      "Redis 분산락·Lua 스크립트를 사용해 게임 진행 상태를 처리하고, 게임별 저장·만료 규칙을 구현",
    ),
    new Work(
      "분산 로그 조회와 부하 테스트 구성",
      "서버별 로그를 Loki·Grafana로 통합하고 Prometheus 지표를 연결하고 테스트 봇·게임 시나리오와 결과 보고서를 작성",
    ),
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "게임 서버가 이중화되어 같은 상황의 로그가 서버별로 분산됨",
      processes: [
      "서버별 로그를 Loki에 수집하고 Grafana에서 함께 조회하도록 구성",
      "지표 대시보드와 게임 진행 시나리오를 연결해 부하 테스트 기록 작성",
    ],
      solves: [
      "분산된 로그와 실시간 서버 지표를 함께 확인할 수 있는 운영 환경 구성",
    ],
    }),
  ],
  images: null,
});
