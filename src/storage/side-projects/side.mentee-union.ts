import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";
import { sideMentees } from "./side.mentees";
import { getImage, getResource } from "@libs/getResource";

export const sideMenteeUnion = new ProjectModel({
  cover: getResource("project-mentee-union", "mentee-union.png"),
  github: "https://github.com/kkn1125/project-mentee-union",
  demoSites: ["https://menteeunion.kro.kr"],
  relations: [sideMentees],
  path: "/side/mentee-union",
  title: "Mentee Union",
  description: ["멘티들이 모여 함께 지식을 공유하고 이야기하는 성장 커뮤니티"],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Backend, Role.Frontend],
  skills: [
    Skill("typescript"),
    Skill("nest"),
    Skill("typeorm"),
    Skill("mariadb"),
    Skill("react"),
    Skill("nginx"),
    Skill("socketio"),
  ],
  start: new Date(2023, 11),
  end: new Date(2024, 0),
  works: [
    "반응형 웹 인터페이스 설계 및 구현",
    "RESTful API 설계 및 백엔드 시스템 구축",
    "데이터베이스 스키마 설계 및 구현",
    "사용자 활동 기반 레벨 및 등급 시스템 개발",
    "멘티 간 추천 및 포인트 부여 시스템 구현",
    "포인트 기반 자동 승급 및 레벨 상승 메커니즘 개발",
    "클라우드 스토리지 연동 이미지 업로드 기능 구현",
    "WebSocket을 활용한 실시간 채팅 시스템 개발",
    "세미나 일정 관리 및 참여 자격 검증 기능 구현",
    "Oracle Cloud 및 Cloudtype을 이용한 애플리케이션 배포",
    "Nginx를 활용한 정적 리소스 관리 및 프록시 서버 구성",
    "SSL 인증서 적용을 통한 보안 통신 구현",
  ],
  // works: [
  //   "페이지 제작",
  //   "API 설계 및 구현",
  //   "DB 스키마 설계 및 제작",
  //   "레벨 및 등급 시스템 구현",
  //   "멘티 간 추천제, 포인트 부여 시스템 구현",
  //   "일정 포인트 도달 시 승급, 레벨 증가 구현",
  //   "이미지 업로드 구현",
  //   "NestJS Gateway를 통한 웹소켓 실시간 채팅 구현",
  //   "세미나 기간 설정 및 참여 여부 검증",
  //   "Oracle cloud 및 Cloudtype을 이용해 react, nestjs api서버 배포",
  //   "nginx를 이용한 스태틱 리소스 라우팅 및 proxy 설정",
  //   "SSL 적용",
  // ],
  isSideProject: true,
  issues: null,
  images: [
    getImage("project-mentee-union", "menteeunion.kro.kr_.png", "landing"),
  ],
});
