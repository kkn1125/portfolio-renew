import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/issue";
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
  issues: [
    new Issue({
      problem: "인원 초과 시 서버 증설",
      processes: [
        "net 모듈 tcp 서버 모듈 제작",
        "정원의 80%가 입장되면 서버 모듈을 child process모듈 spawn으로 실행",
        "기존 서버 정원이 가득차면 이후 접속하는 인원을 큐에 담아 새로 증설된 서버로 소켓 연결",
        "메인 tcp 소켓서버로 사용자 좌표 데이터 공유",
        "메인 tcp에서 연결된 서브 tcp서버로 데이터 브로드캐스트",
      ],
      solves: ["정원 증가에 따른 부하 절감"],
    }),
  ],
  images: null,
});
