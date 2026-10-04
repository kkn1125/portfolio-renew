import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

// 경력 근거: api-zeromq-nebula: cac96dcaa2, 855f10baa0, 2fed680200, 74a4067dae. 별도 연구로 사용자 확인.
export const anderSocketResearch = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/ander/socket-transport-research",
  title: "ZeroMQ·TCP 실시간 통신 연구",
  description: [
    "여러 실시간 서버 사이의 메시지 전달·릴레이·서버 증설 방식을 비교한 사내 연구",
  ],
  team: Team.Produce,
  company: Company.Ander,
  roles: [Role.Backend, Role.Server],
  skills: [Skill("nodejs"), Skill("javascript"), Skill("express"), Skill("uwebsockets"), Skill("ZeroMQ"), Skill("protobuf"), Skill("docker")],
  start: new Date(2022, 10),
  end: new Date(2022, 11),
  works: [
    new Work(
      "TCP·ZeroMQ 전송과 릴레이 구조 비교",
      "Node net TCP·ZeroMQ 통신 프로토타입을 구성하고 릴레이 전달·접속 상태 전환·컨테이너 단위 서버 증설을 실험",
    ),
  ],
  isSideProject: false,
  issues: null,
  images: null,
});
