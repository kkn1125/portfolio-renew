import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";

export const sideTypoz = new ProjectModel({
  path: "/side/typoz",
  cover: getResource("typoz", "typoz.png"),
  github: "https://github.com/AnyRequest/typoz",
  demoSites: ["https://AnyRequest.github.io/typoz"],
  title: "Library Typoz",
  description: ["한글 분해, 재조합 기능이 포함된 타이핑 효과 라이브러리"],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend],
  skills: [Skill("typescript"), Skill("gulp"), Skill("webpack")],
  start: new Date(2023, 11),
  end: new Date(2023, 11),
  works: [
    "Npm 모듈 등록",
    "ReactJS로 Docs 페이지 제작",
    "여러 작업 환경에 대응하기 위해 Umd, Esm, Cjs 다중 빌드",
    "한글 자모 분해, 재조합 기능 구현",
    "타이핑 애니메이션 처리를 위해 비동기로 데이터 처리",
    "타이핑 조작 설정을 쉽게 하기 위해 빌더 패턴 적용",
    "테스트 코드 작성으로 예시 제공 및 다양한 에러에 대응과 확장성 고려",
  ],
  isSideProject: true,
});
