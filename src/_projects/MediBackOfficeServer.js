import ProjectModel from "@/model/ProjectModel";
import { FORM_IMAGE, MONTH } from "@/util/global";

const MediBackOfficeServer = new ProjectModel();

MediBackOfficeServer.important = true;
MediBackOfficeServer.title = "육아 교육 메타버스 백오피스";
MediBackOfficeServer.desc = "육아 정보를 공유 서비스 유지보수 기간 내 백오피스 제작 요청";
MediBackOfficeServer.team = "(주)프로젝트그룹 앤더";
MediBackOfficeServer.role = ["frontend", "backend"];
MediBackOfficeServer.mainSkills = ["React", "TypeScript"];
MediBackOfficeServer.skills = ["Jenkins", "Nginx", "Docker", "Gulp"];
MediBackOfficeServer.start = new Date(2023, MONTH(6));
MediBackOfficeServer.end = new Date(2023, MONTH(7));
MediBackOfficeServer.inProgress = false;
MediBackOfficeServer.listOpen = true;
MediBackOfficeServer.list = [
  {
    header: "쉘 스크립트, 깃허브 웹훅, 젠킨스를 이용한 배포 자동화",
    body: `devops`,
  },
  {
    header: "관리자 계정 DB 및 API 제작",
    body: `backend`,
  },
  {
    header: "혼합 빌드를 통해 도메인 추가 비용 절감",
    body: `backend`,
  },
  {
    header: "FTP 서버 연동 및 파일 업로드 및 자동 우선순위 정렬 로직 구현",
    body: `backend`,
  },
];
MediBackOfficeServer.troubleshooting = [
  {
    problem: "배포 자동화에서 로컬과 실서버의 운영체제 차이",
    resolve: [
      "로컬과 실서버에서 실행하는 쉘 스크립트를 별도로 작성",
      "자동화를 위해 깃허브 웹훅과 젠킨스 사용",
    ],
    process: [
      "로컬의 운영체제인 윈도우 기준으로 도커 이미지를 빌드하고 실서버로 전송하는 쉘 스크립트 작성",
      "실서버에서 도커 이미지를 가져와 실행하는 쉘 스크립트 작성",
      "젠킨스로 깃허브 푸시 후 자동으로 배포되도록 파이프라인 설정",
    ],
    result: ["배포 자동화하여 개발 시간 절약", "프로젝트 관리 용이"],
  },
];
// MediBackOfficeServer.images = [FORM_IMAGE("", "")];
MediBackOfficeServer.name = "m-backoffice";
MediBackOfficeServer.path = "/m-backoffice";

export default MediBackOfficeServer;
