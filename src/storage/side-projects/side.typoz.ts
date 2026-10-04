import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getImage, getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const sideTypoz = new ProjectModel({
  cover: getResource("typoz", "typoz.png"),
  github: "https://github.com/AnyRequest/typoz",
  demoSites: ["https://AnyRequest.github.io/typoz"],
  relations: null,
  path: "/side/typoz",
  title: "Library Typoz",
  description: [
    "한글 자모의 분해·재조합을 지원하는 npm 타이핑 효과 라이브러리",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend],
  skills: [Skill("typescript"), Skill("gulp"), Skill("webpack")],
  start: new Date(2023, 11),
  end: new Date(2023, 11),
  works: [
    new Work(
      "한글 타이핑과 설정 인터페이스 구현",
      "한글 자모 분해·재조합과 비동기 타이핑을 구현하고, 빌더 패턴으로 애니메이션 설정 인터페이스 제공",
    ),
    new Work(
      "사용 환경별 패키지 배포와 문서·테스트",
      "UMD·ESM·CJS 빌드를 npm으로 배포하고 React 문서·예제와 테스트 코드로 사용 방법 및 오류 사례를 정리",
    ),
  ],
  isSideProject: true,
  issues: null,
  images: [getImage("typoz", "anyrequest.github.io_typoz_.png", "main")],
});
