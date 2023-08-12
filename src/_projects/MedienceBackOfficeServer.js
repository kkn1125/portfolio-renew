import ProjectModel from "../model/ProjectModel";
import { MONTH } from "../util/global";

const MedienceBackOfficeServer = new ProjectModel();

MedienceBackOfficeServer.title = "육아 교육 메타버스 백오피스";
MedienceBackOfficeServer.desc = "육아 정보를 공유 서비스 백오피스 제작";
MedienceBackOfficeServer.team = "(주)프로젝트그룹 앤더";
MedienceBackOfficeServer.role = ["frontend", "backend"];
MedienceBackOfficeServer.mainSkills = ["React", "TypeScript"];
MedienceBackOfficeServer.skills = ["Jenkins", "Nginx", "Docker", "Gulp"];
MedienceBackOfficeServer.start = new Date(2023, MONTH(6));
MedienceBackOfficeServer.end = new Date(2023, MONTH(7));
MedienceBackOfficeServer.inProgress = false;
MedienceBackOfficeServer.listOpen = true;
MedienceBackOfficeServer.list = [
  {
    header: "AWS 서버 빌드 배포, 쉘 스크립트를 활용한 빌드, 배포 자동화",
    body: `backend`,
  },
  {
    header: "관리자 계정 DB 및 API 제작",
    body: `backend`,
  },
  {
    header: "관리자 권한 설정 및 권한에 따른 기능 제한 설정",
    body: `backend`,
  },
  {
    header: "모든 데이터 폼 검증 및 파일 전체 옵션 검증, 시간 검증",
    body: `backend`,
  },
  {
    header:
      "FTP 서버 연동, FTP API 제작, 파일 업로드 및 자동 우선순위 정렬 로직 구현",
    body: `backend`,
  },
  {
    header:
      "관리자 로그인 및 토큰 처리, refresh token 처리, 자동 로그아웃 및 타 계정 중복 로그인 방지",
    body: `backend`,
  },
];
MedienceBackOfficeServer.name = "m-backoffice";
MedienceBackOfficeServer.path = "/m-backoffice";

export default MedienceBackOfficeServer;
