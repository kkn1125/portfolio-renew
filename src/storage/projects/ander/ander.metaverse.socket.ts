import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const anderMetaverseSocket = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/ander/metaverse-socket",
  title: "3D 메타버스 멀티플레이 소켓 서버",
  description: [
    "같은 가상 공간에 참여한 사용자의 좌표·상태를 공유하는 멀티플레이 소켓 서버",
  ],
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
    new Work(
      "참여자 상태를 공유하는 실시간 서버 개발",
      "웹 메타버스의 사용자 좌표·상태를 소켓으로 전달하고, 전송 데이터 크기와 큐 기반 처리 순서를 조정",
    ),
    new Work(
      "서버 데이터 관리",
      "DB 이중화·백업 서버 작업을 수행하며 실시간 서비스의 데이터 관리 경험 축적",
    ),
  ],
  isSideProject: false,
  issues: null,
  images: null,
});
