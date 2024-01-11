import ProjectModel from "../model/ProjectModel";
import { MONTH, FORM_URL, FORM_IMAGE } from "../util/global";

const MenteeUnion = new ProjectModel();
MenteeUnion.important = true;
MenteeUnion.title = "Mentee Union";
MenteeUnion.desc =
  "멘티들이 모여 함께 지식을 공유하고 이야기하는 성장 커뮤니티";
MenteeUnion.team = "개인";
MenteeUnion.role = ["backend", "frontend"];
MenteeUnion.mainSkills = ["NestJS"];
MenteeUnion.skills = [
  "TypeScript",
  "TypeORM",
  "MariaDB",
  "React",
  "Cloudtype",
  "Oracle Cloud",
  "Nginx",
  "Socket.io",
];
MenteeUnion.start = new Date(2023, MONTH(12));
MenteeUnion.end = new Date(2024, MONTH(1));
MenteeUnion.inProgress = false;
MenteeUnion.listOpen = true;
MenteeUnion.list = [
  { header: "ReactJS SPA 프로젝트 제작", body: "" },
  { header: "NestJS API 제작", body: "" },
  { header: "db 스키마 설계", body: "" },
  { header: "레벨링, 등급 시스템 구현", body: "" },
  { header: "멘티 간 추천 및 포인트 부여 시스템 구현", body: "" },
  { header: "일정 포인트 달성 시 승급, 레벨 증가 구현", body: "" },
  { header: "이미지 업로드 구현", body: "" },
  { header: "NestJS gateway로 소켓 구현 및 실시간 채팅 서비스 구현", body: "" },
  { header: "세미나 기간 및 참여 여부 검증", body: "" },
  { header: "oracle cloud ReactJS 프로젝트 배포", body: "" },
  { header: "cloudtype 프리티어 NestJS API 배포", body: "" },
  { header: "nginx를 이용한 스태틱 리소스 라우팅, proxy 설정", body: "" },
  { header: "TLS 적용", body: "" },
  { header: "DB설계 및 API url 스키마 설계", body: `` },
  { header: "NestJS를 사용하여 API 서버 구축", body: `` },
  { header: "배치 프로그램 제작 및 API 서버 연결 체크 및 재배포", body: `` },
];
MenteeUnion.links = [FORM_URL("demo", "https://menteeunion.kro.kr")];
MenteeUnion.github = "https://github.com/kkn1125/project-mentee-union";
MenteeUnion.name = "project-mentee-union";
MenteeUnion.path = "/project-mentee-union";
MenteeUnion.cover = "/mentee-union.png";
MenteeUnion.images = [FORM_IMAGE("랜딩 페이지", "menteeunion.kro.kr_.png")];

export default MenteeUnion;
