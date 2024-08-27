import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";

export const sideMentees = new ProjectModel({
  cover: getResource("mentees", "mentees01.png"),
  github: "https://github.com/kkn1125/Mentees",
  demoSites: null,
  relations: null,
  path: "/side/mentees",
  title: "Mentees",
  description: ["멘티들이 모여 함께 지식을 공유하고 이야기하는 성장 커뮤니티"],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Backend, Role.Frontend],
  skills: [
    Skill("springboot"),
    Skill("javascript"),
    Skill("mybatis"),
    Skill("bootstrap"),
    Skill("artillery"),
  ],
  start: new Date(2021, 8),
  end: new Date(2021, 8),
  works: [
    "페이지 제작",
    "API 설계 및 구현",
    "DB 스키마 설계 및 제작",
    "유저간 추천 시스템 개발",
    "추천 점수를 통해 가장 높은 순서대로 5명까지 모든 유저에게 공개",
    "세미나 등록, 기간, 신청, 제한 인원 및 마감 기능 개발",
  ],
  isSideProject: true,
  issues: null,
  images: null,
});
