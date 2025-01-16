import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getImage, getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";

export const sideSnapPoll = new ProjectModel({
  cover: getResource("snappoll", "survey.gif"),
  github: "https://github.com/kkn1125/snappoll",
  demoSites: ["https://snappoll.kro.kr/"],
  testAccount: [{ id: "guest01@example.com", password: "snapGuest!!1" }],
  relations: null,
  path: "/side/snappoll",
  title: "SnapPoll",
  description: [
    // "Snappoll은 쉽고 간편한 무료 설문 및 투표 플랫폼입니다. 커뮤니티를 위한 다양한 설문과 실시간 통계 그래프를 제공해 누구나 손쉽게 투표와 설문을 만들고 분석할 수 있습니다.",
    "누구나 손쉽게 설문과 투표를 만들고 결과를 통계 그래프로 분석 가능한 서비스",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Backend, Role.Frontend],
  skills: [
    Skill("nest"),
    Skill("postgresql"),
    Skill("prisma"),
    Skill("typescript"),
    Skill("react"),
    Skill("mui"),
    Skill("reactQuery"),
    Skill("recoil"),
    Skill("CloudType"),
    Skill("Oracle Cloud"),
  ],
  start: new Date(2024, 10),
  end: new Date(2025, 0),
  works: [
    "클라이언트 사이드 URL 설계",
    "데이터베이스 스키마 설계 및 제작",
    "계층형 댓글 테이블 구조 설계",
    "설문, 투표 서비스 개발",
    "설문, 투표 생성 구조 설계",
    "게스트 참여 가능한 설문지, 투표지 공유 URL 생성",
    "비회원 설문, 투표 참여 가능한 구조 설계",
    "API 권한 시스템 구축",
    "페이지 권한 시스템 구축",
    "마케팅 및 알림 메일 발송 스케줄링",
    "수동 메일 발송 구현",
    "백오피스 제작",
    "SEO 최적화",
    "클라우드 서버 배포",
    "로그인 토큰 검증 및 로그인 유지 시스템 구현",
    "구독 결제 시스템 설계",
    "구독 등급에 따라 설문, 투표 제작 회수 및 응답자 수 제한",
    "구독 등급별 추가 기능 계획 및 기능 제한 설계",
    "회원 대시보드 그래프 유형 및 기본 통계 자료 구현",
    "질문 간 비교 분석 그래프 로직 개발",
  ],
  isSideProject: true,
  issues: [
    {
      problem: "역할에 따른 API 접근 제한",
      processes: [
        "쿠키 데이터 검증 후 유저 데이터 조회",
        "요청마다 역할 검증 후 허용된 역할만 비즈니스 로직 실행",
      ],
      solves: [
        "Roles 데코레이터를 구현하고 역할 제한이 필요한 API에 데코레이터 적용",
        "RoleGuard를 구현하고 미들웨어로 추가",
        "역할에 따른 API 접근 제한 구축",
      ],
    },
    {
      problem: "구독 등급에 따른 API 기능 제한 문제",
      processes: [
        "쿠키 데이터 검증 후 유저 데이터 조회",
        "유저의 구독 정보를 바탕으로 각 등급에 허용되는 기능과 생성 제한",
      ],
      solves: [
        "등급에 따른 기능과 제한 조건을 상수로 정의",
        "PlanGuard를 구현하고 미들웨어로 추가",
        "PlanValidate 데코레이터를 구현하고 기능을 키로 사용하여 구독 등급에 따른 기능 제한 구축",
        "설문과 투표를 두 개로 나누어 생성과 응답자 수 제한 구현",
      ],
    },
    {
      problem: "구독 관리 시스템 구축",
      processes: [
        "구독 등급 레퍼런스 조사",
        "구독 등급을 4개로 나누어 등급 별로 제공할 서비스를 계획",
        "등급별 생성 개수, 응답자  수 제한 산정",
        "등급별 추가 기능 부여",
      ],
      solves: [
        "각 등급을 플랜으로 명명하고, Free, Basic, Pro, Enterprise 로 구분",
        "서버 비용 및 데이터베이스 누적 데이터 비용 산정 후 각 등급별 월별 구독 요금 산정",
      ],
    },
  ],
  images: [
    getImage("snappoll", "guest_main.png", "게스트 메인 페이지"),
    getImage(
      "snappoll",
      "before_user_main.png",
      "(변경 전) 회원 메인 페이지 (대시보드)"
    ),
    getImage(
      "snappoll",
      "after_user_main.png",
      "(변경 후) 회원 메인 페이지 (대시보드)"
    ),
    getImage("snappoll", "auth_page.png", "인증 관련 페이지"),
    getImage("snappoll", "login.png", "로그인"),
    getImage("snappoll", "signup.png", "회원가입"),
    getImage("snappoll", "privacy_policy.png", "개인정보처리방침"),
    getImage("snappoll", "service_terms.png", "서비스이용약관"),
    getImage("snappoll", "survey.gif", "설문조사"),
    getImage("snappoll", "poll_graph.gif", "설문 결과 그래프"),
    getImage("snappoll", "login_graph.mp4", "로그인 후 설문 결과 그래프"),
  ],
});
