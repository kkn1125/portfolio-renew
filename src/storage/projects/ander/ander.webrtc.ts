import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

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
    // new Work("OpenVidu를 활용한 다대다 WebRTC 연결 구현"),
    // new Work("화상 회의 룸 개설 및 관리 기능 구현"),
    // new Work(
    //   "실시간 채팅 기능 개발",
    //   "정원이 가득 찰 시 대화 채널 자동 생성 기능 개발",
    //   "빈 채팅 채널로 참자가 자동 할당"
    // ),
    // new Work(
    //   "참가자 관리, 제어 기능 구현",
    //   "참가자 음소거, 화면 숨기기, 강퇴와 같은 사용자 제어 기능 구현"
    // ),
    // new Work(
    //   "Speech API를 이용한 화자별 자막 생성",
    //   "화자의 대화를 텍스트로 변환하고 화자의 공유된 화면에 자막 출력 구현",
    //   "제대로 듣지 못하고 지나갈 경우 자막을 켜서 어떤 대화인지 볼 수 있게 됨"
    // ),
    new Work(
      "OpenVidu 기반 다자간 WebRTC 화상 회의 연결 구축",
      "OpenVidu를 활용해 여러 사용자가 동시에 참여 가능한 WebRTC 연결 시스템 개발",
      "대규모 사용자 화상 회의 지원 및 안정적인 실시간 통신 구현"
    ),
    new Work(
      "화상 회의 룸 개설 및 관리 기능 개발",
      "사용자 요청에 따라 동적으로 회의 룸을 생성하고 입장 관리 기능 추가",
      "회의 개설 및 참가 관리 자동화로 운영 효율성 향상"
    ),
    new Work(
      "실시간 채팅 기능 개발",
      "정원이 가득 찰 경우 자동으로 새로운 채팅 채널을 생성하고, 참가자를 빈 채널로 자동 할당",
      "원활한 커뮤니케이션 유지 및 채팅 채널 과부하 방지"
    ),
    new Work(
      "참가자 관리 및 제어 기능 구현",
      "사용자 음소거, 화면 숨기기, 강퇴 등 권한 기반 제어 기능 개발",
      "회의 진행자가 회의의 흐름을 원활하게 관리할 수 있도록 지원"
    ),
    new Work(
      "Speech API 기반 실시간 화자별 자막 생성",
      "화자의 음성을 텍스트로 변환한 후 공유된 화면에 실시간 자막 출력",
      "청취 환경이 열악한 사용자를 위한 가독성 향상 및 회의 내용 보완"
    ),
    new Work("빌드 자동화 프로세스 구축"),
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
        "OpenVidu를 활용한 새로운 연결 구조 설계 및 구현",
      ],
      solves: [
        "OpenVidu 도입으로 연결 가능 인원 2~3명 증가",
        "더 안정적이고 확장 가능한 다자간 화상 회의 시스템 구축",
        "WebRTC 기술에 대한 이해도 향상 및 실제 적용 경험 획득",
      ],
    },
    {
      problem: "화자의 감정 분석 및 통계 제공",
      processes: [
        "STT 기술을 활용하여 화자의 말을 실시간으로 텍스트화",
        "sentiment 라이브러리를 사용하여 텍스트에서 긍정/부정 단어 추출",
        "추출된 단어를 기반으로 간단한 감정 분석 통계 생성",
        "관리자에게 실시간으로 분석 결과를 팝업 메시지로 전달하는 기능 구현",
      ],
      solves: [
        "실시간 감정 분석을 통한 회의 분위기 모니터링 가능",
        "STT 기술과 자연어 처리에 대한 이해도 향상",
        "sentiment 라이브러리 활용 경험 습득",
        "실시간 데이터 처리 및 알림 시스템 구현 능력 향상",
      ],
    },
  ],
});
