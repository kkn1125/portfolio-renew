import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

// 문제-해결-이유-성과
export const onflouDaldaleng = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/onflou/daldaleng",
  title: "달달영어 운영",
  description: [
    "Spring Boot 기반 API·백오피스·배치·캡처 서버 담당",
    "4개 협력사와 협업하며 개발·운영 진행 중",
  ],
  team: Team.Backend,
  company: Company.Onflou,
  roles: [Role.Backend, Role.Server],
  skills: [
    Skill("springboot"),
    Skill("java"),
    Skill("mysql"),
    Skill("mariadb"),
    Skill("redis"),
    Skill("docker"),
    Skill("linux"),
    Skill("jenkins"),
    Skill("mybatis"),
  ],
  start: new Date(2026, 1),
  end: null,
  works: [
    new Work(
      "Spring Boot API 서버 개발 및 운영",
      "서비스 핵심 API 설계·개발·배포",
      "운영 이슈 대응 및 안정성 유지",
    ),
    new Work(
      "백오피스 서버 개발 및 운영",
      "관리자 기능 개발 및 운영 환경 배포",
      "운영 건 직접 대응",
    ),
    new Work(
      "배치 서버 개발 및 운영",
      "정기·이벤트성 배치 작업 개발",
      "배치 실행 모니터링 및 장애 대응",
    ),
    new Work(
      "캡처 서버 개발 및 운영",
      "캡처 처리 파이프라인 개발·유지보수",
      "운영 환경 안정성 확보",
    ),
    new Work(
      "4개 협력사 협업 및 일정 조율",
      "협력사 간 요구사항·일정·이슈 소통 주도",
      "다자간 협업 환경에서 개발·운영 병행",
    ),
    new Work(
      "운영 건 전담 대응",
      "API·백오피스·배치·캡처 서버 운영 이슈 직접 처리",
      "추가 요청 및 변경 사항에 대한 대응·조율",
    ),
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem:
        "다협력사 환경에서 요구사항·일정·운영 이슈가 분산되어 소통 비용 증가",
      processes: [
        "4개 협력사 간 커뮤니케이션 채널 및 역할 정리",
        "요구사항·일정·이슈를 직접 조율하며 단일 창구 역할 수행",
        "개발·운영 병행 시 우선순위 기준 정립",
      ],
      solves: [
        "협력사 간 소통 비용 감소 및 의사결정 속도 향상",
        "운영 이슈와 개발 요청을 동시에 안정적으로 처리",
      ],
    }),
    new Issue({
      problem: "API·백오피스·배치·캡처 등 다수 서버의 운영 부담",
      processes: [
        "서버별 역할·배포·모니터링 체계 정리",
        "운영 건 직접 대응 및 장애·추가 요청 처리 프로세스 수립",
        "배치·캡처 파이프라인 안정성 점검 및 개선",
      ],
      solves: [
        "다중 서버 운영 안정성 유지",
        "운영 이슈 대응 체계 확보로 서비스 연속성 확보",
      ],
    }),
  ],
  images: null,
});
