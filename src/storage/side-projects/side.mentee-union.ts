import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";
import { sideMentees } from "./side.mentees";
import { getResource } from "@libs/getResource";

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
    "페이지 제작",
    "API 설계 및 구현",
    "DB 스키마 설계 및 제작",
    "레벨 및 등급 시스템 구현",
    "멘티 간 추천제, 포인트 부여 시스템 구현",
    "일정 포인트 도달 시 승급, 레벨 증가 구현",
    "이미지 업로드 구현",
    "NestJS Gateway를 통한 웹소켓 실시간 채팅 구현",
    "세미나 기간 설정 및 참여 여부 검증",
    "Oracle cloud 및 Cloudtype을 이용해 react, nestjs api서버 배포",
    "nginx를 이용한 스태틱 리소스 라우팅 및 proxy 설정",
    "SSL 적용",
  ],
  isSideProject: true,
  issues: null,
  images: null,
});
