import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

// 경력 근거: medience-api-server: 5b5c3ed352, d6efedbf7d, dd01cea488, c1bfef57fa.
export const anderImomApi = new ProjectModel({
  cover:
    "https://github.com/user-attachments/assets/654986ee-263d-42cc-959c-8b2c1cf11cef",
  github: null,
  demoSites: null,
  relations: null,
  path: "/ander/i-mom-api",
  title: "아이맘 메타빌리지 API",
  description: [
    "교육 콘텐츠와 커뮤니티를 제공하는 웹 메타버스의 서비스 API",
    "DB·API 구성부터 외부 인증·파일 연동, AWS 배포·유지관리까지 담당",
  ],
  team: Team.Produce,
  company: Company.Ander,
  roles: [Role.Backend],
  skills: [
    Skill("typescript"),
    Skill("fastify"),
    Skill("typeorm"),
    Skill("mariadb"),
    Skill("jwt"),
    Skill("awsEc2"),
    Skill("docker"),
    Skill("nginx"),
    Skill("swagger"),
  ],
  start: new Date(2023, 2),
  end: new Date(2023, 4),
  works: [
    new Work(
      "서비스 데이터 모델과 API 구성",
      "Fastify·TypeORM 기반으로 사용자·교육 콘텐츠·참여 신청의 DB와 API를 구성하고 외부 로그인 요청 서명·토큰 갱신을 연동",
    ),
    new Work(
      "파일 요청 지연의 원인 추적",
      "FTP 파일 작업이 멈추는 현상을 업로드 경로의 존재 조건까지 추적하고, 디렉터리 생성 후 파일 조회·업로드를 진행하도록 수정",
    ),
    new Work(
      "AWS 배포와 외부 협업용 문서화",
      "EC2 실행 환경을 구성·유지관리하고 API·DB 규격과 Swagger 문서를 작성해 기획자·협력사와 연동 요구사항을 공유",
    ),
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "FTP 경로가 없는 상황에서 파일 요청이 대기해 네트워크 오류처럼 보임",
      processes: [
      "파일 처리 흐름과 대상 디렉터리의 존재 여부를 확인",
      "필요한 디렉터리를 생성한 후 조회·업로드하도록 처리 순서 변경",
    ],
      solves: [
      "파일 요청을 멈추게 하던 경로 조건을 보완",
    ],
    }),
  ],
  images: null,
});
