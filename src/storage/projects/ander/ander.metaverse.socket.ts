import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";

export const anderMetaverseSocket = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/ander/metaverse-socket",
  title: "3D 메타버스 멀티플레이 소켓 서버",
  description: ["멀티플레이를 위한 웹 메타버스 소켓서버 제작"],
  team: Team.Produce,
  company: Company.Ander,
  roles: [Role.Backend],
  skills: [
    Skill("typescript"),
    Skill("uwebsockets"),
    Skill("artillery"),
    Skill("docker"),
    Skill("nginx"),
    Skill("linux"),
  ],
  start: new Date(2022, 8),
  end: new Date(2022, 9),
  works: [
    "지정된 인원 초과 시 자동 서버 개설 기능 구현",
    "중앙 제어 방식의 소켓서버로 부하 분산 및 데이터 브로드캐스트 구현",
    "소켓서버 간 데이터 공유 위한 TCP 릴레이 서버 제작",
    "DB 이중화 및 백업 서버 제작",
  ],
  isSideProject: false,
  issues: null,
  images: null,
});
