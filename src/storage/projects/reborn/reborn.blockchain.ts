import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Project } from "@models/project";

export const rebornBlockChain = new Project({
  title: "NFTMarketplace Blockchain 웹 페이지 제작",
  description: ["BlockChain + NFTMarketplace 웹 페이지 제작"],
  team: Team.Backend,
  company: Company.Reborn,
  role: [Role.Backend],
  skills: [Skill("nodejs"), Skill("react"), Skill("typescript"), Skill("mui")],
  start: new Date(2022, 4),
  end: new Date(2022, 6),
  works: [
    "미디어 서버 및 화상 회의 위한 소켓 서버 제작",
    "STT 활용한 화자 별 자막 생성",
    "자막 텍스트 자연어 처리 및 긍, 부정어 도출",
    "빌드 자동화",
  ],
});
