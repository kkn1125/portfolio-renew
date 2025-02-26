import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const sideSolitaire = new ProjectModel({
  cover:
    "https://github.com/kkn1125/new-solitaire/assets/71887242/d49cf751-3b1c-4607-9c2d-09670005691e",
  github: "https://github.com/kkn1125/new-solitaire",
  demoSites: ["https://kkn1125.github.io/new-solitaire"],
  relations: null,
  path: "/side/solitaire",
  title: "Solitaire",
  description: [
    "보유한 기술 테스트 및 게임 원리 파악하고자 개발한 솔리테어 카드 게임",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend],
  skills: [Skill("typescript"), Skill("sass"), Skill("vite")],
  start: new Date(2023, 5),
  end: new Date(2023, 5),
  works: [
    new Work("카드 덱 랜덤 셔플 구현"),
    new Work("카드 생상 교차, 숫자 내림차순 매칭 알고리즘 제작"),
    new Work("카드 자동완성 여부 검증 알고리즘 제작"),
    new Work("그라운드에서 선택 가능한 N개의 카드를 선택하는 알고리즘 제작"),
    new Work(
      "수집 가능한 카드를 자동으로 수집 덱 또는 그라운드로 이동 시키는 기능 구현"
    ),
    new Work("카드 이동 또는 수집 후 다음 카드 자동 오픈하는 기능 구현"),
    new Work("카드 자동완성 및 애니메이션 추가 구현"),
    new Work("백그라운드 이미지 및 배경 음악 변경 기능 구현"),
    new Work("선택 카드 하이라이팅"),
  ],
  isSideProject: true,
  issues: null,
  images: null,
});
