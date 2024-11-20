import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/issue";
import { ProjectModel } from "@models/project.model";
// 문제-해결-이유-성과
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
    "React로의 마이그레이션을 통해 Svelte의 유지보수성 문제 해결 및 빌드 프로세스 간소화로 전반적인 개발 효율성 30% 향상",
    "Python 기반 API를 NestJS로 재구축하여 코드 구조 개선 및 비효율적인 쿼리 최적화로 API 응답 속도 80% 향상",
    "프론트엔드 성능 최적화 과정에서 발견된 병목 현상 해결을 위해 불필요한 반복문 제거 및 서버 측 쿼리 튜닝으로 전체 시스템 성능 대폭 개선",
    "통계 그래프 데이터 요청 시 발생하는 성능 저하 문제 식별 및 데이터베이스 쿼리 최적화를 통한 데이터 로딩 속도 현저히 개선",
    "대용량 데이터 처리의 비효율성 해결을 위한 서버 사이드 페이지네이션 구현으로 프론트엔드의 부하 크게 감소",
    "Jenkins, Github Webhook, ShellScript를 활용한 CI/CD 파이프라인 구축으로 빌드 및 배포 과정 자동화, 개발 시간 60% 절감 및 배포 안정성 향상",
    "고객사 질의 해결 위해 원격 지원 대응하여 문제 해결",
  ],
  // works: [
  //   "React로의 마이그레이션을 통해 Svelte의 유지보수성 문제를 해결하고 빌드 프로세스를 간소화하여 전반적인 개발 효율성을 30% 향상시켰습니다.",
  //   "Python 기반 API를 NestJS로 재구축하여 코드 구조를 개선하고, 비효율적인 쿼리를 최적화하여 API 응답 속도를 80% 향상시켰습니다.",
  //   "프론트엔드 성능 최적화 과정에서 발견된 병목 현상을 해결하기 위해 불필요한 반복문을 제거하고 서버 측 쿼리를 튜닝하여 전체 시스템 성능을 대폭 개선했습니다.",
  //   "통계 그래프 데이터 요청 시 발생하는 성능 저하 문제를 식별하고, 데이터베이스 쿼리 최적화를 통해 데이터 로딩 속도를 현저히 개선했습니다.",
  //   "대용량 데이터 처리의 비효율성을 해결하기 위해 서버 사이드 페이지네이션을 구현하여, 필요한 데이터만 효율적으로 전송함으로써 프론트엔드의 부하를 크게 줄였습니다.",
  //   "Jenkins, Github Webhook, ShellScript를 활용한 CI/CD 파이프라인을 구축하여 빌드 및 배포 과정을 자동화함으로써 개발 시간을 60% 절감하고 배포 안정성을 높였습니다.",
  // ],
  // works: [
  //   "기존 Svelte의 비효율적인 유지보수성, 빌드 후 복잡한 실행 단계 문제 해결을 위해 React로 마이그레이션을 통해 유지보수성 30% 향상, 실행 단계 간소화",
  //   "기존 Python 기반 API를 NestJS로 마이그레이션을 통해 유지보수성을 개선, 하드코딩 및 비효율적인 쿼리를 튜닝하여 응답 속도 80% 개선",
  //   "프론트 최적화 진행 중 성능이 현저히 떨어지는 현상 발견하여 불필요한 for문 제거 및 서버측 쿼리 튜닝을 통해 문제 해결",
  //   "통계 그래프 데이터 요청 성능 저하 현상 발견하여 쿼리 튜닝을 통해 성능 개선",
  //   "기존 대용량 데이터를 프론트에서 처리하는 비효율적인 부분을 발견하고 서버 사이드 페이지네이션으로 필요한 데이터만 응답하여 성능 개선",
  //   "잦은 빌드 및 배포 과정을 자동화하기 위해 Jenkins, Github Webhook 및 ShellScript를 활용하여 배포에 사용되는 개발 시간을 60% 절감",
  // ],
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
        "대량 데이터 처리를 위한 다양한 방식 시도",
        "한 번에 모든 데이터 받기: 3.5초 소요",
        "스트리밍 방식 실험 (청크 사이즈 10~100만개): 1초~30초 소요, 최대 스택사이즈 초과 문제 발생",
        "스트리밍의 단점 식별: 페이지네이션 시 초기 로딩 문제",
        "서버 사이드 페이지네이션으로 전략 변경",
        "필요한 데이터만 서버에서 처리하여 응답하는 방식 채택",
      ],
      // processes: [
      //   "100만개 로그 데이터를 모두 받아와 처리하는 방식 구상",
      //   "한 번에 받을 시 3.46~3.67초 소요",
      //   "스트리밍 방식으로 청크 사이즈 10개 시도: 오래 지연",
      //   "스트리밍 방식으로 청크 단위 100개 시도: 오래 지연",
      //   "스트리밍 방식으로 청크 단위 1000개 시도: 30초",
      //   "스트리밍 방식으로 청크 단위 1만개, 5만개 시도: 4초",
      //   "스트리밍 방식으로 청크 단위 10만개 시도: 1초",
      //   "스트리밍 방식으로 청크 단위 100만개 시도: 최대 스택사이즈 초과",
      //   "스트리밍 단점으로 페이지네이션 시 혹여나 다른 페이지에서 새로고침한다면 초기에 해당 페이지가 깜빡일 수 있는 문제 제기",
      //   "오히려 페이지네이션을 구현하는 테이블이라면 스트리밍 방식이 맞지 않다고 판단",
      //   "프론트의 부하나 역할을 최대한 서버에 위임하여 처리하는 방식으로 변경",
      //   "페이지에 해당하는 데이터만 내려주고 필요할 때 모든 데이터 조회하는 API 사용하는 방향으로 결정",
      // ],
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
        "데이터베이스 덤프 백업을 포함한 빌드 프로세스 구축",
        "반복 작업 자동화를 통한 업무 효율성 개선 계획 수립",
        "Shell Script, Jenkins, GitHub Webhook을 활용한 개발 서버 배포, 실행 및 빌드 패키징 자동화",
        "Jenkins 설치 및 GitHub Webhook 연동으로 푸시 시 자동 빌드 및 개발 서버 배포 파이프라인 구성",
        "필요 리소스 경로 추출 후 PowerShell의 Compress-Archive 활용하여 ZIP 파일로 패키징",
        "생성된 패키지를 타 부서 공유 폴더에 자동 업로드하는 기능 구현",
      ],
      // processes: [
      //   "데이터를 업데이트마다 데이터베이스 덤프 백업 포함한 빌드 진행",
      //   "반복적인 작업에 대한 자동화를 통해 추가 비효율적인 업무 개선 구상",
      //   "shell script와 Jenkins, Github Webhook을 활용하여 개발 서버 배포 , 실행 및 빌드 패키징 자동화",
      //   "Jenkins 설치 및 Github Webhook을 통해 push 시 자동 빌드 및 개발서버 배포 파이프라인 구성",
      //   "빌드에 필요한 리소스 경로만 추출하여 스크립트 내에서 powershell의 Compress-Archive를 이용해 zip파일로 패키징하고, 타부서 공유 폴더 자동 업로드",
      // ],
      solves: [
        "자동화를 통해 개발 시간을 추가로 얻음",
        "인터렉티브하게 스크립트를 작성하여 과정을 제어",
      ],
    }),
    new Issue({
      problem:
        "배포 시 내부망으로 유동적인 IP를 사용하는 환경에서 클라이언트-서버 연결 문제",
      processes: [
        "고정 IP 할당을 위한 자동화 스크립트 설계 및 구현",
        "비기술 인력을 고려한 사용자 친화적 실행 파일 개발",
        "netsh 명령어를 활용한 Wi-Fi 인터페이스 구성 정보 추출 로직 구현",
        "다국어 환경 및 다양한 Windows 버전 호환성 확보를 위한 검증 로직 통합",
        "netsh 인터페이스 IP 설정 자동화 스크립트 작성",
        "사용자 정의 IP 주소 입력 기능 구현 및 유효성 검증 로직 추가",
        "IP 주소 범위, 브로드캐스트 주소 등 네트워크 특수 주소 제외 로직 구현",
        "IP 충돌 방지를 위한 DHCP 범위 최적화 (예: 2-250 범위로 제한)",
      ],
      // processes: [
      //   "고정 IP 설정 스크립트 작성 계획",
      //   "비개발자 및 컴퓨터를 다루기 힘든 사람은 대상으로 실행파일 제작",
      //   "사용자 입력과 자동으로 고정 IP를 설정할 수 있도록 고안",
      //   "netsh interface ip show config를 통해 Wi-Fi 인터페이스의 기존 아이피와 서브넷마스크 추출하는 스크립트 작성",
      //   "chcp 설정이 다르거나 윈도우 버전에 대응하기 위해 영문, 한글 모두 검증하는 로직 추가",
      //   "netsh interface ip 설정을 스크립트로 작성",
      //   "사용자 입력 가능하도록 IP 주소 입력 기능 추가",
      //   "각 옥텟 범위 검증, 브로드캐스트 등에 사용되는 고정 IP 제외 검증 로직 추가",
      //   "고정 IP 충돌 방지 위해 dhcp 범위 수정 (예를 들어, 254로 지정했다면 2~250까지 dhcp 범위 제한)",
      // ],
      solves: [
        "비개발 인원을 대상으로 조작 편의성 향상",
        "필요에 따라 원하는 고정 IP 할당 가능",
      ],
    }),
    new Issue({
      problem: "고객사 질의 원격 지원 및 대응",
      processes: [
        "고객사에서 설치 또는 서비스 조작 관련 질의 수신",
        "원격 연결 후 문제 상황 재현",
        "문제 발생 원인 파악 및 검토",
      ],
      solves: [
        "데이터베이스 설치 시 미설정 된 환경변수 직접 설정",
        "내부 네트워크망에 연결된 유니티 클라이언트와 연결 불량하여 방화벽 확인 후 인바운드 규칙 추가하여 해결",
        "방화벽 문제가 아닌 경우 대부분 보안 프로그램에 의해 차단되어 해당 보안 프로그앰에서 방화벽 차단 허용 목록 추가하여 해결",
        "고정 IP 설정이 기존 이더넷 IP와 충돌하여 이더넷 IP를 DHCP할당으로 변경하여 와이파이 IP를 고정하여 IP 문제 해결",
      ],
    }),
  ],
  images: null,
});
