import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getImage, getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const sideNarang = new ProjectModel({
  cover: getResource("projectnarang", "narang01.png"),
  github: "https://github.com/kkn1125/narang",
  demoSites: [],
  relations: null,
  path: "/side/narang",
  title: "Project Narang",
  description: [
    "일기와 감정을 공유하는 감정 케어 커뮤니티",
    "페이지 전반 퍼블리싱·API 연동, 안면 인식 로그인과 API 서버 전체 개발 담당",
  ],
  company: Company.Side,
  team: Team.Team,
  roles: [Role.Backend, Role.Frontend],
  skills: [
    Skill("springboot"),
    Skill("typescript"),
    Skill("react"),
    Skill("mybatis"),
  ],
  start: new Date(2022, 6),
  end: new Date(2022, 8),
  works: [
    new Work(
      "프론트엔드와 API 서버 전체 개발",
      "React 페이지 전반을 퍼블리싱하고 API를 연동하고 Spring Boot·MyBatis 기반 API 서버 개발 담당",
    ),
    new Work(
      "안면 인식 로그인 기능 개발",
      "사용자 안면 인식을 활용한 로그인 기능을 개발해 서비스 인증 흐름에 연결",
    ),
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

// 사용자 확인(2026-10-04): 페이지 퍼블리싱·API 연동, 안면 인식 로그인, API 서버 전체 개발 담당.
// 이전에 잘못 복사된 Typoz 작업 설명 보존:
//   works: [
//     new Work("NPM 모듈 개발 및 등록"),
//     new Work("ReactJS를 사용한 문서 페이지 제작"),
//     new Work("Umd, Esm, Cjs 다중 빌드로 다양한 작업 환경 지원"),
//     new Work("한글 자모 분해 및 재조합 기능 구현"),
//     new Work("비동기 데이터 처리를 통한 타이핑 애니메이션 구현"),
//     new Work("빌더 패턴을 적용한 사용자 친화적 타이핑 설정 인터페이스 개발"),
//     new Work("테스트 코드 작성을 통한 예시 제공, 오류 대응 및 확장성 향상"),
//   ],
