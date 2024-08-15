import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Project } from "@models/project";

export const fovDbupdater = new Project({
  title: "데이터베이스 자동 업데이터 R&D",
  description: [
    "사내에서 데이터베이스 사용이 어려운 기획자 및 유니티 클라이언트 개발자를 위해 구글 시트 데이터를 로컬 데이터베이스 업데이트 하는 서비스",
  ],
  team: Team.Development,
  company: Company.Fov,
  role: [Role.Server],
  skills: [Skill("typescript"), Skill("react"), Skill("nest"), Skill("nginx")],
  start: new Date(2024, 4),
  end: new Date(2024, 5),
  works: [
    "구글 시트와 로컬 데이터베이스 컬럼 검증",
    "구글 시트 엑셀 파일 변환 및 데이터 검증",
    "로컬 데이터베이스 비교 후 새로운 데이터 및 수정 데이터 건수 산정",
    "로컬 데이터베이스 테이블 선택 및 웹에서 행 데이터 미리보기 기능 제작",
    "사용자 구글 시트 데이터 동기화 시 다른 사용자에게 동기화 목록 알림 브로드캐스트",
    "실시간 알림을 위한 웹소켓 연결",
    "팀원 사용 후 피드백 반영하여 유지보수",
    "배포 자동화",
  ],
});
