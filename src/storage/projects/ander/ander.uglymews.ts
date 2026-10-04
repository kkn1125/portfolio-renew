import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

// 경력 근거: ugly-mews-api: 7315daedec, bca7beb660, 4b0eed7c40, 071c3f431b.
export const anderUglymews = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/ander/uglymews",
  title: "어글리뮤즈 캐릭터 IP 사업 스토어 API 서버",
  description: [
    "캐릭터 상품 웹스토어의 상품·주문·결제 API 개발",
    "데이터 모델·KCP 결제 연동과 테스트·배포 흐름 구성 담당",
  ],
  team: Team.Produce,
  company: Company.Ander,
  roles: [Role.Backend],
  skills: [Skill("typescript"), Skill("fastify"), Skill("typeorm"), Skill("mysql"), Skill("nodejs"), Skill("jenkins"), Skill("docker"), Skill("jest"), Skill("swagger")],
  start: new Date(2023, 6),
  end: new Date(2023, 7),
  works: [
    new Work(
      "상품 주문과 외부 결제 흐름 구현",
      "Fastify·TypeORM으로 상품·장바구니·주문 데이터 모델을 구현하고 할인·합계 계산, KCP 결제 요청·완료·취소 요청과 주문 저장을 연결",
    ),
    new Work(
      "응답 형식 충돌에 따른 파일 오류 수정",
      "이미지 응답까지 JSON으로 파싱하던 공통 캐시 훅을 추적해 해당 처리를 비활성화하고 리소스 스트림 반환과 예외 처리를 보완",
    ),
    new Work(
      "테스트부터 배포까지 반복 절차 구성",
      "Jest 테스트와 Jenkins의 테스트·빌드·배포 단계를 연결하고 GitHub Webhook·Docker·실행 스크립트로 반복 실행 가능한 절차를 구성",
    ),
  ],
  // works: [
  //   "API 스키마 설계, 제작",
  //   "Jenkins 활용한 빌드, 배포 자동화를 통해 개발시간 절감",
  //   "사내 개발 서버 및 실서버 관리",
  //   "NHN KCP 결제 시스템 연동",
  //   "상품 카트 기능 제작, 결제 및 취소 기능 구현 및 검증",
  //   "데이터베이스 설계, 구현",
  //   "SSL 적용",
  // ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "공통 응답 캐시가 바이너리 이미지에도 JSON 파싱을 적용해 파일 응답이 실패함",
      processes: [
      "Fastify 응답 훅과 리소스 스트림 경로 확인",
      "문제가 되는 캐시 처리를 비활성화하고 파일 반환 예외 처리 보완",
    ],
      solves: [
      "JSON 응답 처리와 충돌하던 이미지 반환 흐름 수정",
    ],
    }),
  ],
  images: null,
});
