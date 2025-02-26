import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

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
    new Work(
      "스토어에 필요한 API 서버 및 데이터베이스 개발",
      "사용자 로그인 및 상품 관리 API 개발"
    ),
    new Work(
      "Jenkins를 활용한 CI/CD 파이프라인 구축",
      "빌드, 배포 시간을 절감하고 안정성 향상"
    ),
    new Work(
      "프로덕션 개발과 유지보수를 위한 개발, 운영 서버 관리",
      "개발 및 테스트를 위해 서버 환경을 설정, 관리",
      "운영 서버와 유사한 환경을 조성하여 원활한 개발 프로세스에 기여"
    ),
    new Work(
      "스토어 내 아이템을 구매하기 위한 거래 시스템 연동",
      "NHN KCP 결제를 구현하고 거래 이력을 저장",
      "사용자가 어떤 상품을 구매했는지 결과 도출"
    ),
    new Work("상품 카트, 결제, 취소 기능 개발"),
    new Work("SSL 인증서 적용"),
  ],
  // works: [
  //   "API 스키마 설계, 제작",
  //   "Jenkins 활용한 빌드, 배포 자동화를 통해 개발시간 절감",
  //   "사내 개발 서버 및 실서버 관리",
  //   "NHN KCP 결제 시스템 연동",
  //   "상품 카트 기능 제작, 결제 및 취소 기능 구현 및 검증",
  //   "데이터베이스 설계, 구현",
  //   "SSL 적용",
  // ],
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
