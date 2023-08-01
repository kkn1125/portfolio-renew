export default [
  {
    title: "육아 교육 메타버스 백오피스",
    desc: "육아 정보를 공유 서비스 백오피스 제작",
    team: "(주)프로젝트그룹 앤더",
    role: "frontend, backend",
    start: new Date(2023, 5),
    end: new Date(2023, 7),
    inProgress: false,
    listOpen: true,
    list: [
      {
        header: "AWS 서버 빌드 배포, 쉘 스크립트를 활용한 빌드, 배포 자동화화",
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
          "관리자 로그인 및 토큰 처리, refresh token 처리, 자동 로그아웃 및 타 계정 중복로그인 방지",
        body: `backend`,
      },
    ],
  },
  {
    title: "육아 교육 메타버스 API 서버",
    desc: "엄마와 자녀 또는 예비 엄마들이 3D 웹 메타버스 내에서 교육을 시청하고, 육아에 대한 정보를 공유하는 서비스",
    team: "(주)프로젝트그룹 앤더",
    role: "backend",
    start: new Date(2023, 3),
    end: new Date(2023, 5),
    inProgress: false,
    listOpen: true,
    list: [
      {
        header: "AWS 서버 빌드 배포",
        body: `backend`,
      },
      {
        header: "DB, API, 서버 아키텍처 설계 및 제작",
        body: `backend`,
      },
      {
        header: "사용자 API 호출에 필요한 HMAC토큰 제작 및 적용",
        body: `backend`,
      },
      {
        header: "메타버스 내 금지어 등록 및 필터링",
        body: `backend`,
      },
      {
        header:
          "API 응답 속도 최적화 위해 cache 기능 개발 및 적용 (res time: 17ms -> 3ms)",
        body: `backend`,
      },
      {
        header: "DB, API 명세서 및 사용설명서 등 문서화",
        body: `backend`,
      },
    ],
  },
  {
    title: "라이브커머스 스트리밍 서비스",
    desc: "실시간으로 라이브 방송을 송출하고 시청자에게 팝업 태그를 올려 구매 링크를 노출시키며, 영상 녹화 및 스트리밍 기술을 이용한 부분 재생 제작",
    team: "(주)프로젝트그룹 앤더",
    role: "frontend, backend",
    start: new Date(2023, 1),
    end: new Date(2023, 3),
    inProgress: false,
    listOpen: true,
    list: [
      {
        header: "미디어 파일 스트리밍을 위해 파일 분할 및 재생 기능 구현",
        body: `frontend, backend`,
      },
      {
        header: "원하는 구간 재생 및 최종 녹화본 결합 인코딩",
        body: `frontend, backend`,
      },
      {
        header: "방송 송출자 관리 패널 구축",
        body: `frontend, backend`,
      },
      {
        header: "스케쥴링을 활용한 라이브 방송 시간 설정",
        body: `frontend, backend`,
      },
      {
        header: "채팅 채널 분산 및 시청자 입/퇴장 제어 기능 구현",
        body: `frontend, backend`,
      },
      {
        header: "실시간 라이브 상태 체크 및 팝업 태그 제어 기능 구현",
        body: `frontend, backend`,
      },
      {
        header:
          "사내 프로젝트 내 임베딩 및 postMessage를 이용한 임베딩 페이지와 통신 처리",
        body: `frontend, backend`,
      },
    ],
  },
  {
    title: "WebRTC 화상회의 서비스",
    desc: "N:M 화상회의, 채팅 가능한 RTC 서비스 제작",
    team: "(주)프로젝트그룹 앤더",
    role: "frontend, backend",
    start: new Date(2022, 10),
    end: new Date(2022, 12),
    inProgress: false,
    listOpen: true,
    list: [
      {
        header: "미디어 서버 제작 및 화상 회의용 소켓서버 제작",
        body: `frontend, backend`,
      },
      {
        header: "최대 동접자 10명 연결 최적화",
        body: `frontend, backend`,
      },
      {
        header: "AWS 테스트 서버 빌드 배포 및 QA",
        body: `frontend, backend`,
      },
      {
        header: "빌드 자동화를 위해 쉘 스크립트 작성 및 자동 빌드 배포 적용",
        body: `frontend, backend`,
      },
    ],
  },
  {
    title: "3D 메타버스 소켓 서버",
    desc: "멀티플레이 가능한 웹 메타버스 소켓 서버를 제작하고, 동접자 200명 처리",
    team: "(주)프로젝트그룹 앤더",
    role: "backend",
    start: new Date(2022, 9),
    end: new Date(2022, 10),
    inProgress: false,
    listOpen: true,
    list: [
      {
        header: "소켓서버 스레드 단위 분산 처리",
        body: `backend`,
      },
      {
        header: "DB 이중화 및 백업 서버 제작",
        body: `backend`,
      },
      {
        header:
          "멀티플레이 데이터 소켓서버간 전송 위해 TCP 통신 메세지 브로커 제작",
        body: `backend`,
      },
      {
        header: "소켓서버 병목 현상 절감 위한 데이터 큐 처리",
        body: `backend`,
      },
    ],
  },
  {
    title: "NFTMarketplace",
    desc: "자체 디자인 제작한 카드를 판매하는 블록체인을 연동한 마켓과 메인페이지 제작",
    team: "(주)리본소프트",
    role: "backend",
    start: new Date(2022, 5),
    end: new Date(2022, 6),
    inProgress: false,
    listOpen: true,
    list: [
      {
        header: "메인 페이지 및 주문, 결제, 파일업로드 제작",
        body: `frontend`,
      },
      {
        header: "반응형 페이지 제작 및 폼 검증",
        body: `frontend`,
      },
      {
        header: "truffle 및 ganache를 활용한 블록체인 기술 마켓에 결합",
        body: `blockchain`,
      },
    ],
  },
];
