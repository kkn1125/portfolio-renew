import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/issue";
import { ProjectModel } from "@models/project.model";

export const fovKalis = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/fov/kalis",
  title: "국토안전관리원 CMS",
  description: ["국토안전관리원 CMS 백오피스, API 서버 제작"],
  team: Team.Development,
  company: Company.Fov,
  roles: [Role.Server],
  skills: [Skill("typescript"), Skill("react"), Skill("nest")],
  start: new Date(2024, 6),
  end: new Date(2024, 8),
  works: [
    "기존 관리자 페이지를 Svelte에서 React로 마이그레이션",
    "기존 API 서버를 Python에서 NestJS로 마이그레이션",
    "유니티 클라이언트와의 데이터 연동 검증 및 API 기능 개선",
    "비효율적인 데이터 요청으로 인한 성능 저하 이슈 해결을 위해 쿼리 튜닝 및 성능 개선",
    "통계 그래프 데이터 요청 성능 저하 이슈 해결을 위한 쿼리 튜닝 및 성능 개선",
    "수만 개의 데이터 요청 처리를 서버 사이드 처리로 성능 개선",
    "프론트엔드 CPU 집약적 연산을 서버 사이드로 마이그레이션하여 성능 최적화",
    "서버 요청 수 줄이기 및 서버 연산 최적화 작업 수행",
    "빌드, 배포, zip 패키징 자동화 쉘 스크립트 작성 및 운용",
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem:
        "기존 코드에서 소량의 데이터를 반복 요청해서 응답이 지연되는 문제 발생",
      processes: ["데이터 영역별로 가공한 객체를 한 번에 응답"],
      solves: [
        "유니티 웹뷰 연동 시 기존 응답 시간 대비 80% 빠르게 응답",
        "불필요한 반복문 제거하여 코드 가독성 유지",
      ],
    }),
    new Issue({
      problem: "대량 데이터 응답 지연 문제",
      processes: [
        "100만개 로그 데이터를 모두 받아와 처리하는 방식 구상",
        "한 번에 받을 시 3.46~3.67초 소요",
        "스트리밍 방식으로 청크 사이즈 10개 시도: 오래 지연",
        "스트리밍 방식으로 청크 단위 100개 시도: 오래 지연",
        "스트리밍 방식으로 청크 단위 1000개 시도: 30초",
        "스트리밍 방식으로 청크 단위 1만개, 5만개 시도: 4초",
        "스트리밍 방식으로 청크 단위 10만개 시도: 1초",
        "스트리밍 방식으로 청크 단위 100만개 시도: 최대 스택사이즈 초과",
        "스트리밍 단점으로 페이지네이션 시 혹여나 다른 페이지에서 새로고침한다면 초기에 해당 페이지가 깜빡일 수 있는 문제 제기",
        "오히려 페이지네이션을 구현하는 테이블이라면 스트리밍 방식이 맞지 않다고 판단",
        "프론트의 부하나 역할을 최대한 서버에 위임하여 처리하는 방식으로 변경",
        "페이지에 해당하는 데이터만 내려주고 필요할 때 모든 데이터 조회하는 API 사용하는 방향으로 결정",
      ],
      solves: [
        "기존 응답 시간 대비 90% 빠르게 응답",
        "기존 하드 코딩된 프론트 코드 대폭 제거 및 서버 역할로 구분하여 가독성 개선",
      ],
    }),
    new Issue({
      problem: "기존의 코드에서 유니티 웹뷰 연동 시 로그 데이터 응답 지연 이슈",
      processes: [
        "해당하는 페이지에 필요한 데이터만 가져오고, 모든 데이터가 필요할 때만 사용할 수 있는 API 제작",
      ],
      solves: [
        "기존 응답 시간 대비 90% 빠르게 응답",
        "기존 하드 코딩된 프론트 코드 대폭 제거 및 서버 역할로 구분하여 가독성 개선",
      ],
    }),
    new Issue({
      problem:
        "유니티 개발자 협업 과정에서 필수 데이터의 잦은 변경에 따라 반복적인 빌드 작업 요청 발생",
      processes: [
        "데이터를 업데이트마다 데이터베이스 덤프 백업 포함한 빌드 진행",
        "반복적인 작업에 대한 자동화를 통해 추가 비효율적인 업무 개선 구상",
        "shell script와 Jenkins, Github Webhook을 활용하여 개발 서버 배포 , 실행 및 빌드 패키징 자동화",
        "Jenkins 설치 및 Github Webhook을 통해 push 시 자동 빌드 및 개발서버 배포 파이프라인 구성",
        "빌드에 필요한 리소스 경로만 추출하여 스크립트 내에서 powershell의 Compress-Archive를 이용해 zip파일로 패키징하고, 타부서 공유 폴더 자동 업로드",
      ],
      solves: [
        "자동화를 통해 개발 시간을 추가로 얻음",
        "인터렉티브하게 스크립트를 작성하여 과정을 제어",
      ],
    }),
    new Issue({
      problem:
        "배포 시 내부망으로 유동적인 IP를 사용하는 환경에서 클라이언트-서버 연결 문제",
      processes: [
        "고정 IP 설정 스크립트 작성 계획",
        "비개발자 및 컴퓨터를 다루기 힘든 사람은 대상으로 실행파일 제작",
        "사용자 입력과 자동으로 고정 IP를 설정할 수 있도록 고안",
        "netsh interface ip show config를 통해 Wi-Fi 인터페이스의 기존 아이피와 서브넷마스크 추출하는 스크립트 작성",
        "chcp 설정이 다르거나 윈도우 버전에 대응하기 위해 영문, 한글 모두 검증하는 로직 추가",
        "netsh interface ip 설정을 스크립트로 작성",
        "사용자 입력 가능하도록 IP 주소 입력 기능 추가",
        "각 옥텟 범위 검증, 브로드캐스트 등에 사용되는 고정 IP 제외 검증 로직 추가",
        "고정 IP 충돌 방지 위해 dhcp 범위 수정 (예를 들어, 254로 지정했다면 2~250까지 dhcp 범위 제한)",
      ],
      solves: [
        "비개발 인원을 대상으로 조작 편의성 향상",
        "필요에 따라 원하는 고정 IP 할당 가능",
      ],
    }),
  ],
  images: null,
});
