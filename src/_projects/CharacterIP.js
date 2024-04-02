import ProjectModel from "@/model/ProjectModel";
import { MONTH } from "@/util/global";

const CharacterIP = new ProjectModel();

CharacterIP.important = true;
CharacterIP.title = "캐릭터 IP 사업 스토어 API 서버 제작";
CharacterIP.desc = "캐릭터 IP 사업 스토어에 대한 API 서버 제작";
CharacterIP.team = "(주)프로젝트그룹 앤더";
CharacterIP.role = ["backend"];
CharacterIP.mainSkills = ["Fastify.js"];
CharacterIP.skills = [
  "Node.js",
  "MariaDB",
  "TypeORM",
  "TypeScript",
  "Jenkins",
  "Docker",
  "Nginx",
];
CharacterIP.start = new Date(2023, MONTH(7));
CharacterIP.end = new Date(2023, MONTH(8));
CharacterIP.inProgress = false;
CharacterIP.listOpen = true;
CharacterIP.list = [
  {
    header: "jenkins를 이용한 빌드, 배포 자동화",
    body: `backend`,
  },
  {
    header: "데이터베이스 설계 및 구현",
    body: `backend`,
  },
  {
    header: "API 스키마 설계 및 제작",
    body: `backend`,
  },
  {
    header: "referer 및 origin 검증을 통한 API 호출 제한",
    body: `frontend`,
  },
  {
    header: "NHN KCP 결제 시스템 연동 및 테스트",
    body: `backend`,
  },
  {
    header: "주요 API 호출 시 보안을 고려하여 JWT 사용 및 검증",
    body: `backend`,
  },
  {
    header: "상품 담기 및 결제, 결제 취소 검증",
    body: `backend`,
  },
  {
    header: "ejs를 이용하여 결제 결과 페이지 서버사이드 렌더링 구현",
    body: `backend`,
  },
  {
    header: "사내 개발 서버 및 실서버 관리",
    body: `backend`,
  },
  { header: "SSL 적용", body: "" },
];
CharacterIP.addTroubleshooting({
  problem: "CI/CD 자동화",
  process: [
    "github webhook을 jenkins에 등록한다.",
    "쉘스크립트에 실서버에서 애플리케이션을 자동 실행할 스크립트를 작성한다.",
    "빌드할 도커 이미지에 실서버에서 동작할 쉘스크립트 파일을 포함한다.",
    "프로젝트 빌드 및 github push 성공 시 webhook을 통해 jenkins로 신호를 보내고 pipeline을 실행한다.",
  ],
  resolve: [
    "jenkins가 pipeline에 작성한 스크립트를 실행하고, github의 main 브랜치를 clone하고 build 디렉토리를 도커 이미지로 빌드한다.",
    "실서버에 도커 이미지를 가져와 설치하고 실행한다.",
    "실서버에 github에 배포한 프로젝트가 정상 작동하는지 확인한다.",
  ],
  result: [
    "수정된 버전으로 프로젝트가 자동 배포되는 것을 확인한 후에 배포 시간이 절감",
  ],
});

CharacterIP.name = "character-ip";
CharacterIP.path = "/character-ip";

export default CharacterIP;
