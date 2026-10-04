import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getImage, getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";
import { sideSnapPoll } from "./side.snappoll";

export const sideNuvia = new ProjectModel({
  cover: getResource("nuvia", "nuvia01.png"),
  github: "https://github.com/team-nuvia/project-nuvia",
  demoSites: ["https://app.nuvia.kro.kr"],
  relations: [sideSnapPoll],
  path: "/side/nuvia",
  isMainOrder: 1,
  title: "Project Nuvia",
  description: [
    "설문 생성·참여·결과 분석을 제공하는 개인 SaaS 플랫폼 MVP",
    "API·데이터 모델, 사용자 화면과 배포를 개발하며 역할·구독 정책과 비회원 참여 흐름을 구현",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Backend, Role.Frontend],
  skills: [
    Skill("typescript"),
    Skill("nest"),
    Skill("typeorm"),
    Skill("mysql"),
    Skill("nextjs"),
    Skill("react"),
    Skill("docker"),
    Skill("awsEc2"),
    Skill("awsRds"),
    Skill("zustand"),
    // 필요 시: Skill("redis"), Skill("nginx"), Skill("chartjs"), Skill("githubActions") 등 추가
  ],
  start: new Date(2025, 4), // 2025-05
  end: null,

  // ✅ 실제 수행 작업(Work)
  works: [
    new Work(
      "역할·구독 등급별 접근 정책 구현",
      "NestJS·TypeORM으로 설문 데이터 모델과 API를 구성하고, 역할·구독 등급에 따른 생성 개수·응답자 수·기능 제한을 Guard에서 검증",
    ),
    new Work(
      "비회원 참여와 응답 진행 상태 처리",
      "로그인 없이 설문에 참여하도록 만료되는 게스트 토큰을 발급하고 재진입 시 응답 상태를 복구하고 Next.js 화면에서 생성·응답·분석 흐름을 연결",
    ),
    new Work(
      "개인 서비스의 빌드·배포 구성",
      "Docker·AWS EC2 배포를 GitHub Actions·AWS OIDC와 연결하고 환경별 빌드·로그를 구성",
    ),
  ],

  isSideProject: true,

  // 🧩 이슈 & 해결 (Problem → Process → Solve)
  issues: [
    new Issue({
      problem: "사용자 역할과 구독 등급에 따라 서로 다른 접근·사용 제한이 필요",
      processes: [
      "역할별 API 접근과 구독별 생성·응답·추가 기능 제한을 구분",
      "공통 정책과 Guard로 요청 진입 시 검증",
    ],
      solves: [
      "역할·구독 정책을 API 진입 단계에서 검사하는 구조 구현",
    ],
    }),
    new Issue({
      problem: "로그인 없이 참여한 응답자가 재진입할 때 진행 상태를 식별해야 함",
      processes: [
      "만료되는 게스트 토큰과 쿠키로 참여 세션 식별",
      "기존 응답 진행 상태를 조회·복구",
    ],
      solves: [
      "회원 로그인과 별개인 게스트 참여·재진입 흐름 구현",
    ],
    }),
  ],

  // 🖼 이미지: 캡처 가이드(파일명은 placeholder, 실제 촬영본으로 교체)
  images: [
    // 1) 회원 대시보드
    getImage(
      "nuvia",
      "dashboard_main.png",
      "회원 대시보드: 진행 중 설문/최근 응답/주요 지표 요약"
    ),
    // 2) 설문 생성(스텝 폼)
    getImage(
      "nuvia",
      "survey_create_step.png",
      "설문 생성 스텝 UI: 문항 유형·조건"
    ),
    getImage(
      "nuvia",
      "survey_create_step_2.png",
      "설문 생성 스텝 UI: 문항 등록 및 작성"
    ),
    getImage(
      "nuvia",
      "survey_create_step_3.png",
      "설문 생성 스텝 UI: 미리보기"
    ),
    getImage(
      "nuvia",
      "survey_create_step_4.png",
      "설문 생성 스텝 UI: 저장"
    ),
    // 3) 게스트 참여
    getImage(
      "nuvia",
      "guest_survey_flow.png",
      "게스트 설문 참여: 로그인 없이 응답 가능한 흐름"
    ),
    getImage(
      "nuvia",
      "guest_survey_flow_2.png",
      "게스트 설문 참여: 로그인 없이 응답 가능한 흐름"
    ),
    getImage(
      "nuvia",
      "guest_survey_flow_3.png",
      "게스트 설문 참여: 로그인 없이 응답 가능한 흐름"
    ),
    getImage(
      "nuvia",
      "guest_survey_flow_4.png",
      "게스트 설문 참여: 로그인 없이 응답 가능한 흐름"
    ),
    // 4) 결과 분석(비교 분석)
    getImage(
      "nuvia",
      "analysis_compare.png",
      "결과 분석: 그래프와 통계 지표"
    ),
    // 5) 구독 플랜 제한 UI
    getImage(
      "nuvia",
      "plan_limiter.png",
      "구독 플랜별 생성/응답 제한 및 업그레이드 가이드"
    ),
    // 6) 백오피스(관리자)
    // getImage(
    //   "nuvia",
    //   "admin_backoffice.png",
    //   "백오피스: 회원·구독·설문 데이터 통합 관리"
    // ),
    // 7) 배포/인프라
    getImage(
      "nuvia",
      "infra_cicd.png",
      "배포 파이프라인: GitHub Actions → Docker → AWS EC2"
    ),
    // 8) SEO/반응형
    getImage(
      "nuvia",
      "seo_responsive.png",
      "SEO/OG·Sitemap 적용 및 모바일 반응형 화면"
    ),
  ],
});
