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
];
// CharacterIP.troubleshooting = [
//   {
//     problem: "미디어 분할 시 원하는 구간 재생",
//     resolve: [
//       "1초 단위로 저장되는 미디어를 파일로 저장하지 않고 버퍼상태로 소켓서버에서 배열 변수로 관리",
//     ],
//     process: [
//       "사용자가 원하는 구간을 배열 인덱싱으로 가져와 미디어 버퍼 데이터를 비디오 트랙에 추가하여 재생",
//     ],
//     result: [
//       "원하는 재생 구간의 미디어를 비교적 자유롭게 가공 가능",
//       "미디어 파일을 저장하고 가져오는 IO 시간을 절약",
//     ],
//   },
// ];
// CharacterIP.links = [FORM_URL("demo", "")];
CharacterIP.name = "live-commerce";
CharacterIP.path = "/live-commerce";

export default CharacterIP;
