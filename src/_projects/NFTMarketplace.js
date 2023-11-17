import ProjectModel from "@/model/ProjectModel";
import { MONTH } from "@/util/global";

const NFTMarketplace = new ProjectModel();

NFTMarketplace.title = "NFTMarketplace";
NFTMarketplace.desc = "블록체인 연동한 마켓과 메인 페이지 제작";
NFTMarketplace.team = "(주)리본소프트";
NFTMarketplace.role = ["backend"];
NFTMarketplace.mainSkills = ["Truffle", "Ganache", "Next.js"];
NFTMarketplace.skills = ["React", "TypeScript"];
NFTMarketplace.start = new Date(2022, MONTH(5));
NFTMarketplace.end = new Date(2022, MONTH(6));
NFTMarketplace.inProgress = false;
NFTMarketplace.listOpen = false;
NFTMarketplace.list = [
  {
    header: "truffle 및 ganache를 활용한 블록체인 기술 마켓에 결합",
    body: `blockchain`,
  },
  {
    header: "메인 페이지 및 주문, 결제, 파일 업로드 제작",
    body: `frontend`,
  },
  {
    header: "반응형 페이지 제작 및 폼 검증",
    body: `frontend`,
  },
];
NFTMarketplace.name = "nftmarket";
NFTMarketplace.path = "/nftmarket";

export default NFTMarketplace;
