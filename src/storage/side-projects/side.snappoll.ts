import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getImage, getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const sideSnapPoll = new ProjectModel({
  cover: getResource("snappoll", "survey.gif"),
  github: "https://github.com/kkn1125/snappoll",
  demoSites: ["https://snappoll.kro.kr/"],
  testAccount: [{ id: "guest01@example.com", password: "snapGuest!!1" }],
  relations: null,
  path: "/side/snappoll",
  title: "SnapPoll",
  description: [
    "설문·투표의 생성·참여·통계 분석을 제공하는 개인 서비스; Nuvia의 선행 프로젝트",
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
    new Work(
      "역할·구독별 API 접근과 사용 제한",
      "NestJS·Prisma로 설문·투표 데이터와 API를 개발하고 역할·구독 등급에 따른 생성·응답 제한을 공통 정책으로 검증",
    ),
    new Work(
      "비회원 참여와 결과 분석",
      "공유 URL을 통한 게스트 참여, 응답 통계와 질문 간 비교 그래프를 회원 대시보드에 연결",
    ),
    new Work(
      "서비스 화면과 운영 기능 개발",
      "React 화면·백오피스, 토큰 검증·메일 발송과 클라우드 배포까지 구현",
    ),
  ],
  isSideProject: true,
  issues: null,
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
