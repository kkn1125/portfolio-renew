import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

// 문제-해결-이유-성과
export const onflouCardtalkOps = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/onflou/cardtalk-ops",
  title: "카드톡 운영",
  description: [
    "이중화된 React·API·게임 API·백오피스 운영 전담",
    "일정 조율, 추가 요청 대응, DB·CI/CD 이관 포함",
  ],
  team: Team.Backend,
  company: Company.Onflou,
  roles: [Role.Backend, Role.Server],
  skills: [
    Skill("react"),
    Skill("nodejs"),
    Skill("docker"),
    Skill("grafana"),
    Skill("prometheus"),
    Skill("mariadb"),
    Skill("redis"),
    Skill("jenkins"),
    Skill("linux"),
  ],
  start: new Date(2026, 0),
  end: null,
  works: [
    new Work(
      "이중화 운영 환경 전반 운영 담당",
      "React 프론트엔드, 백엔드 API, 게임 전용 API, 백오피스 서버 이중화 운영",
      "배포·장애 대응·모니터링 등 운영 건 전반 직접 처리",
    ),
    new Work(
      "일정 조율 및 추가 요청 대응",
      "팀·이해관계자와 직접 소통하며 일정 조율 주도",
      "운영 중 발생하는 추가 요청·변경 사항 대응",
    ),
    new Work(
      "DB 버전 업그레이드 이관",
      "개발·검증·운영 서버 DB 이관 기획 및 실행",
      "스키마 변경·데이터 호환성 검증 후 무중단 이관 완료",
    ),
    new Work(
      "CI/CD 이관 협의 및 일정 조율",
      "CI/CD 이관을 위한 협의 주도",
      "이관 일정 조율 및 배포 파이프라인 전환 지원",
    ),
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem:
        "이중화된 다중 서버(프론트·API·게임 API·백오피스) 운영 부담 및 소통 비용",
      processes: [
        "서버별 역할·배포·모니터링 체계 정리",
        "운영 이슈 직접 대응 및 추가 요청·일정 조율 프로세스 수립",
        "이중화 환경에서 장애 대응·배포 절차 정립",
      ],
      solves: [
        "다중 서버 운영 안정성 유지",
        "일정·요청 대응 체계로 개발·운영 간극 축소",
      ],
    }),
    new Issue({
      problem:
        "DB 버전 업그레이드 시 개발·검증·운영 환경 간 스키마·데이터 호환 이슈",
      processes: [
        "환경별 스키마 차이 및 데이터 호환성 분석",
        "이관 순서·검증 절차 수립",
        "개발·검증·운영 서버 순차 이관 및 검증",
      ],
      solves: [
        "DB 버전 업그레이드 이관 무사히 완료",
        "환경별 데이터 정합성 확보",
      ],
    }),
  ],
  images: null,
});
