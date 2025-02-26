import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

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
    new Work(
      "소켓 서버 과부하 및 병목현상 문제 해결",
      "병목 현상 부분의 로직을 개선하기 위해 소켓서버 payload 사이즈 조정 및 queue를 이용한 순차 처리",
      "병목 현상을 해결하고 처리 효율을 소폭 향상"
    ),
    new Work(
      "TCP 서버 간 데이터 공유 문제 해결",
      "여러 TCP 서버를 중계하는 릴레이 서버를 구현하고 릴레이 서버와 연결된 하위 TCP서버에 데이터를 브로드캐스팅",
      "각 TCP서버는 데이터를 공유하고 데이터 처리 부하 분산"
    ),
    new Work(
      "소켓 정원 초과 시 새로운 TCP 서버 증설",
      "정원 초과 시 릴레이 서버에 TCP 서버 증설 명령을 전달하여 spawn모듈을 통해 새로운 워커 실행",
      "증설된 서버로 사용자 소켓 연결하여 트래픽 증가에 유연하게 대응"
    ),
    new Work("DB 이중화 및 백업 서버 제작"),
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
