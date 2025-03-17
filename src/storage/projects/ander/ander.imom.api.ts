import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const anderImomApi = new ProjectModel({
  cover:
    "https://github.com/user-attachments/assets/654986ee-263d-42cc-959c-8b2c1cf11cef",
  github: null,
  demoSites: null,
  relations: null,
  path: "/ander/i-mom-api",
  title: "아이맘 메타빌리지 API",
  description: [
    "아이와 부모, 또는 예비 부모가 함께 메타버스 내에서 교육 영상을 시청하고 정보를 공유하는 서비스",
    "아이맘 메타빌리지 API 제작, 아마존 클라우드 인스턴스에 배포 및 유지관리 담당",
  ],
  team: Team.Produce,
  company: Company.Ander,
  roles: [Role.Backend],
  skills: [
    Skill("typescript"),
    Skill("fastify"),
    Skill("typeorm"),
    Skill("formik"),
    Skill("jwt"),
    Skill("linux"),
    Skill("jenkins"),
    Skill("docker"),
    Skill("nginx"),
  ],
  start: new Date(2023, 2),
  end: new Date(2023, 4),
  works: [
    new Work(
      "AWS EC2 배포, 유지관리",
      "AWS EC2 인스턴스 생성 및 환경 설정, 유지관리"
    ),
    new Work(
      "수동으로 진행되던 Docker 이미지 빌드, 배포 프로세스 자동화",
      "Jenkins + GitHub Webhook을 활용하여 자동 빌드 및 배포 파이프라인 구축",
      "배포 시간 단축, 배포 안정성 향상"
    ),
    new Work(
      "신규 서비스의 DB, API, 서버 아키텍처를 처음부터 설계 및 구축",
      "서비스 특성을 고려하여 MariaDB + Fastify + Nginx 기반으로 구조 설계"
    ),
    new Work(
      "파일 업로드 및 다운로드를 위한 FTP 서버 연동 작업 수행",
      "Node.js 기반 FTP 모듈을 통해 인증 및 파일 관리 기능 추가"
    ),
    new Work(
      "데이터베이스 쿼리를 효율적으로 관리하기 위해 TypeORM 사용 제안 및 도입",
      "기존 원시 SQL 쿼리에서 ORM 구문으로 대체 및 구현",
      "개발 효율성, 유지보수성 및 안정성 향상"
    ),
    new Work(
      "육아 교육 컨텐츠를 위한 API 서버 제작",
      "사용자 인증 및 교육 컨텐츠 관리 기능 구현"
    ),
    new Work(
      "API, 데이터베이스 문서화 및 Swagger 문서 작성",
      "협업사와 소통할 수 있는 문서를 제작하고 공유하여 원활한 협업 환경 구성",
      "기획자 및 팀 내 구성원 정보 전달 용이"
    ),
  ],
  isSideProject: false,
  issues: null,
  images: null,
});
