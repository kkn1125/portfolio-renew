import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";

export const anderUglymews = new ProjectModel({
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
});
