import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";

export const anderWebRtc = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/ander/webrtc",
  title: "WEBRTC 화상회의 서비스",
  description: [
    "다대다 화상 연결, 화면 공유 및 채팅 기능을 이용할 수 있는 서비스",
    "일대다 화상 및 화면 공유, 채팅 기능 제작 담당",
  ],
  team: Team.Produce,
  company: Company.Ander,
  roles: [Role.Backend],
  skills: [
    Skill("typescript"),
    Skill("react"),
    Skill("docker"),
    Skill("nginx"),
    Skill("express"),
  ],
  start: new Date(2022, 10),
  end: new Date(2022, 11),
  works: [
    "OpenVidu를 활용한 다대다 WebRTC 연결 구현",
    "화상 회의 룸 개설 및 관리 기능 구현",
    "실시간 채팅 기능 개발",
    "음소거, 화면 숨기기 등 사용자 제어 기능 구현",
    "참가자 강퇴 기능 추가",
    "미디어 서버 및 화상 회의용 소켓 서버 구축",
    "STT를 활용한 화자별 자막 생성 기능 개발",
    "자막 텍스트 자연어 처리 및 긍/부정어 분석",
    "빌드 자동화 프로세스 구축"
  ],
  // works: [
  //   "미디어 서버 및 화상 회의 위한 소켓 서버 제작",
  //   "STT 활용한 화자 별 자막 생성",
  //   "자막 텍스트 자연어 처리 및 긍, 부정어 도출",
  //   "빌드 자동화",
  // ],
  isSideProject: false,
  images: null,
  issues: [
    {
      problem: "브라우저 WebRTC API의 연결 인원 제한",
      processes: [
        "브라우저 기본 WebRTC API를 사용하여 MFU(Mesh Full Unicast) 방식 구현 시도",
        "연결 가능한 인원이 매우 제한적임을 확인",
        "OpenVidu 도입을 결정하여 구현 방식 변경",
        "OpenVidu를 활용한 새로운 연결 구조 설계 및 구현"
      ],
      solves: [
        "OpenVidu 도입으로 연결 가능 인원 2~3명 증가",
        "더 안정적이고 확장 가능한 다자간 화상 회의 시스템 구축",
        "WebRTC 기술에 대한 이해도 향상 및 실제 적용 경험 획득"
      ]
    },
    {
      problem: "화자의 감정 분석 및 통계 제공",
      processes: [
        "STT 기술을 활용하여 화자의 말을 실시간으로 텍스트화",
        "sentiment 라이브러리를 사용하여 텍스트에서 긍정/부정 단어 추출",
        "추출된 단어를 기반으로 간단한 감정 분석 통계 생성",
        "관리자에게 실시간으로 분석 결과를 팝업 메시지로 전달하는 기능 구현"
      ],
      solves: [
        "실시간 감정 분석을 통한 회의 분위기 모니터링 가능",
        "STT 기술과 자연어 처리에 대한 이해도 향상",
        "sentiment 라이브러리 활용 경험 습득",
        "실시간 데이터 처리 및 알림 시스템 구현 능력 향상"
      ]
    },
  ],
});
