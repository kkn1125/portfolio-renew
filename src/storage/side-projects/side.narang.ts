import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getImage, getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";

export const sideNarang = new ProjectModel({
  cover: getResource("projectnarang", "narang01.png"),
  github: "https://github.com/kkn1125/narang",
  demoSites: [],
  relations: null,
  path: "/side/narang",
  title: "Project Narang",
  description: [
    "웹에서 일기를 작성하고 오늘의 감정을 공유하는 감정 케어 커뮤니티",
  ],
  company: Company.Side,
  team: Team.Team,
  roles: [Role.Frontend],
  skills: [
    Skill("springboot"),
    Skill("typescript"),
    Skill("react"),
    Skill("mybatis"),
  ],
  start: new Date(2022, 6),
  end: new Date(2022, 8),
  works: [
    "NPM 모듈 개발 및 등록",
    "ReactJS를 사용한 문서 페이지 제작",
    "Umd, Esm, Cjs 다중 빌드로 다양한 작업 환경 지원",
    "한글 자모 분해 및 재조합 기능 구현",
    "비동기 데이터 처리를 통한 타이핑 애니메이션 구현",
    "빌더 패턴을 적용한 사용자 친화적 타이핑 설정 인터페이스 개발",
    "테스트 코드 작성을 통한 예시 제공, 오류 대응 및 확장성 향상",
  ],
  // works: [
  //   "Npm 모듈 등록",
  //   "ReactJS로 Docs 페이지 제작",
  //   "여러 작업 환경에 대응하기 위해 Umd, Esm, Cjs 다중 빌드",
  //   "한글 자모 분해, 재조합 기능 구현",
  //   "타이핑 애니메이션 처리를 위해 비동기로 데이터 처리",
  //   "타이핑 조작 설정을 쉽게 하기 위해 빌더 패턴 적용",
  //   "테스트 코드 작성으로 예시 제공 및 다양한 에러에 대응과 확장성 고려",
  // ],
  isSideProject: true,
  issues: null,
  // images: null,
  images: [
    getImage("projectnarang", "narang01.png", "나랑 프로젝트 메인 페이지"),
  ],
});
