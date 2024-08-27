import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/issue";
import { ProjectModel } from "@models/project.model";

export const anderUglymews = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/ander/uglymews",
  title: "어글리뮤즈 캐릭터 IP 사업 스토어 API 서버",
  description: ["캐릭터 IP 사업 스토어 API 서버 및 데이터베이스 제작"],
  team: Team.Produce,
  company: Company.Ander,
  roles: [Role.Backend],
  skills: [Skill("typescript")],
  start: new Date(2023, 6),
  end: new Date(2023, 7),
  works: [
    "Jenkins 활용한 빌드, 배포 자동화",
    "API 스키마 설계, 제작",
    "사내 개발 서버 및 실서버 관리",
    "NHN KCP 결제 시스템 연동",
    "상품 카트 기능 제작, 결제 및 취소 기능 구현 및 검증",
    "데이터베이스 설계, 구현",
    "SSL 적용",
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "CI/CD 자동화",
      processes: [
        "Github Webhook을 Jenkins에 등록",
        "쉘 스크립트에 실서버 애플리케이션 자동 실행 명령 작성",
        "빌드할 도커 이미지에 실서버 동작 쉘 스트립트 포함하여 배포",
        "프로젝트 빌드 및 Github push 성공 시 Webhook 호출하여 Jenkins pipeline 실행",
      ],
      solves: ["배포 자동화로 개발 시간 절약", "프로젝트 관리 용이성 향상"],
    }),
  ],
  images: null,
});
