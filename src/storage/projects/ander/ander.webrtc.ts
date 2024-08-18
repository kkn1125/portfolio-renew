import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";

export const anderWebRtc = new ProjectModel({
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
    "미디어 서버 및 화상 회의 위한 소켓 서버 제작",
    "STT 활용한 화자 별 자막 생성",
    "자막 텍스트 자연어 처리 및 긍, 부정어 도출",
    "빌드 자동화",
  ],
});
