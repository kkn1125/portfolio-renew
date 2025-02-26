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
  description: ["BlockChain + NFTMarketplace 웹 페이지 제작"],
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
    new Work("metamask wallet 연동"),
    new Work("NFTMarketplace 스토어 페이지 연동"),
    new Work("프론트엔드 전체 페이지 제작"),
  ],
  isSideProject: false,
  issues: null,
  images: null,
});
