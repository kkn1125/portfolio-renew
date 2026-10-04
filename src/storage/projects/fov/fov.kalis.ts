import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";
// 문제-해결-이유-성과
// 경력 근거: kalis-integrated-server-nestjs: 705d14d8a4, 6186a9797c, 57e1502c4b. kalis-adminpage-react: 30cbb07da9.
export const fovKalis = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/fov/kalis",
  title: "국토안전관리원 CMS",
  description: [
    "국토안전관리원의 콘텐츠·교육 결과를 관리하는 CMS와 분석 API",
    "기존 Flask·Svelte 유지보수와 NestJS·React 전환, 데이터 조회·납품 환경 지원 담당",
  ],
  team: Team.Development,
  company: Company.Fov,
  roles: [Role.Backend, Role.Frontend, Role.Server],
  skills: [Skill("typescript"), Skill("nest"), Skill("typeorm"), Skill("mysql"), Skill("react"), Skill("mui"), Skill("swagger"), Skill("docker"), Skill("jenkins"), Skill("vitest")],
  start: new Date(2024, 6),
  end: new Date(2024, 8),
  works: [
    new Work(
      "기업별 통계의 반복 조회 통합",
      "기업마다 5개 유형을 반복 조회하던 통계를 JOIN·조건부 집계 SQL로 재구성해, 기업 수 C 기준 호출 구조를 1+5C회에서 1회로 통합",
    ),
    new Work(
      "레거시 API·관리자 화면 전환",
      "기존 조회·응답 규격을 확인하며 Flask·Svelte에서 NestJS·React로 전환하고 검색·필터·정렬·페이지 처리를 서버 조회로 이동",
    ),
    new Work(
      "교육 결과 저장과 후속 조회 순서 보완",
      "저장을 기다리지 않고 점수를 조회하던 비동기 흐름을 수정하고 오류 응답 접근 조건을 보완하고 관리자 결과 출력 기능을 개발",
    ),
    new Work(
      "반복 납품 작업 자동화와 고객사 지원",
      "Jenkins·쉘 스크립트로 DB 덤프·빌드·패키징·공유 폴더 전달을 연결하고, 고객사 설치·방화벽·IP 연결 문제를 원격 지원과 실행 가이드로 대응",
    ),
  ],
  // works: [
  //   "React로의 마이그레이션을 통해 Svelte의 유지보수성 문제를 해결하고 빌드 프로세스를 간소화하여 전반적인 개발 효율성을 30% 향상시켰습니다.",
  //   "Python 기반 API를 NestJS로 재구축하여 코드 구조를 개선하고, 비효율적인 쿼리를 최적화하여 API 응답 속도를 80% 향상시켰습니다.",
  //   "프론트엔드 성능 최적화 과정에서 발견된 병목 현상을 해결하기 위해 불필요한 반복문을 제거하고 서버 측 쿼리를 튜닝하여 전체 시스템 성능을 대폭 개선했습니다.",
  //   "통계 그래프 데이터 요청 시 발생하는 성능 저하 문제를 식별하고, 데이터베이스 쿼리 최적화를 통해 데이터 로딩 속도를 현저히 개선했습니다.",
  //   "대용량 데이터 처리의 비효율성을 해결하기 위해 서버 사이드 페이지네이션을 구현하여, 필요한 데이터만 효율적으로 전송함으로써 프론트엔드의 부하를 크게 줄였습니다.",
  //   "Jenkins, Github Webhook, ShellScript를 활용한 CI/CD 파이프라인을 구축하여 빌드 및 배포 과정을 자동화함으로써 개발 시간을 60% 절감하고 배포 안정성을 높였습니다.",
  // ],
  // works: [
  //   "기존 Svelte의 비효율적인 유지보수성, 빌드 후 복잡한 실행 단계 문제 해결을 위해 React로 마이그레이션을 통해 유지보수성 30% 향상, 실행 단계 간소화",
  //   "기존 Python 기반 API를 NestJS로 마이그레이션을 통해 유지보수성을 개선, 하드코딩 및 비효율적인 쿼리를 튜닝하여 응답 속도 80% 개선",
  //   "프론트 최적화 진행 중 성능이 현저히 떨어지는 현상 발견하여 불필요한 for문 제거 및 서버측 쿼리 튜닝을 통해 문제 해결",
  //   "통계 그래프 데이터 요청 성능 저하 현상 발견하여 쿼리 튜닝을 통해 성능 개선",
  //   "기존 대용량 데이터를 프론트에서 처리하는 비효율적인 부분을 발견하고 서버 사이드 페이지네이션으로 필요한 데이터만 응답하여 성능 개선",
  //   "잦은 빌드 및 배포 과정을 자동화하기 위해 Jenkins, Github Webhook 및 ShellScript를 활용하여 배포에 사용되는 개발 시간을 60% 절감",
  // ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "기업별 통계 쿼리가 기업 수에 비례해 반복 실행됨",
      processes: [
      "기업 목록 조회 후 기업마다 5개 유형을 집계하는 반복 구조 확인",
      "JOIN·기간 조건·COUNT(CASE...)·GROUP BY를 사용하는 집계 SQL로 변경",
    ],
      solves: [
      "해당 코드 경로의 SQL 호출 구조를 1+5C회에서 1회로 통합(기업 수 C 기준)",
    ],
    }),
    new Issue({
      problem: "교육 결과 저장을 기다리지 않고 후속 점수 조회가 시작됨",
      processes: [
      "저장과 후속 조회의 비동기 호출 순서 확인",
      "저장 호출을 기다리도록 변경하고 오류 응답 접근 조건 수정",
    ],
      solves: [
      "저장과 점수 조회의 실행 순서 및 예외 처리 보완",
    ],
    }),
  ],
  images: null,
});
