import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const rebornBlockChain = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/reborn/blockchain",
  title: "NFTMarketplace Blockchain 웹 페이지 제작",
  description: [
    "NFT 마켓플레이스의 React·Next.js 웹 화면과 지갑 연동 개발",
  ],
  team: Team.Backend,
  company: Company.Reborn,
  roles: [Role.Frontend],
  skills: [
    Skill("nodejs"),
    Skill("nextjs"),
    Skill("react"),
    Skill("typescript"),
    Skill("mui"),
  ],
  start: new Date(2022, 4),
  end: new Date(2022, 6),
  works: [
    new Work(
      "웹 서비스 화면과 지갑 연결 구현",
      "스토어를 포함한 프론트엔드 페이지를 제작하고 MetaMask 지갑과 NFT 마켓플레이스 화면을 연동",
    ),
  ],
  isSideProject: false,
  issues: null,
  images: null,
});
