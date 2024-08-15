import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Project } from "@models/project";

export const anderImomApi = new Project({
  title: "메디앙스 아이맘 메타빌리지 API",
  description: [
    "아이와 부모, 또는 예비 부모가 함께 메타버스 내에서 교육 영상을 시청하고 정보를 공유하는 서비스",
    "메디앙스 아이맘 메타빌리지 API 제작, 아마존 클라우드 인스턴스에 배포 및 유지관리 담당",
  ],
  team: Team.Produce,
  company: Company.Ander,
  role: [Role.Backend],
  skills: [Skill("typescript")],
  start: new Date(2023, 2),
  end: new Date(2023, 4),
  works: [
    "아마존 클라우드 인스턴스 배포 및 유지관리",
    "Docker 이미지 빌드 및 배포 자동화",
    "DB, API, 서버 아키텍처 구상 및 제작",
    "FTP 서버 연동",
    "데이터베이스 관리 용이성을 위해 TypeORM 사용 제안 및 도입",
    "API 서버 제작",
    "문서화 작업",
  ],
});
