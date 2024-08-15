import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Project } from "@models/project";

export const anderImomBackoffice = new Project({
  title: "메디앙스 아이맘 메타빌리지 백오피스 제작",
  description: [
    "아이와 부모, 또는 예비 부모가 함께 메타버스 내에서 교육 영상을 시청하고 정보를 공유하는 서비스",
    "메디앙스 아이맘 메타빌리지 API 백오피스 제작, 아마존 클라우드 인스턴스에 배포 및 유지관리 담당",
  ],
  team: Team.Produce,
  company: Company.Ander,
  role: [Role.Backend],
  skills: [
    Skill("typescript"),
    Skill("react"),
    Skill("jenkins"),
    Skill("nginx"),
    Skill("docker"),
  ],
  start: new Date(2023, 5),
  end: new Date(2023, 6),
  works: [
    "Github 웹훅, Jenkins를 이용한 배포 자동화",
    "서버와 프론트 혼합 빌드",
    "FTP 서버 연동",
    "파일 업로드 기능 구현",
    "이미지 파일 우선순위 정렬 기능 제작",
    "관리자 페이지 제작",
  ],
});
