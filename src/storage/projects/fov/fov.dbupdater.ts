import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const fovDbupdater = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/fov/rnd-db-updater",
  title: "데이터베이스 자동 업데이터 R&D",
  description: [
    "구글 시트 데이터를 로컬 DB에 자동 업데이트하는 서비스 개발",
    "기획자와 유니티 개발자의 DB 사용 편의성 향상",
  ],
  // description: [
  //   "사내 데이터베이스 사용이 어려운 기획자 및 유니티 클라이언트 개발자를 위해 구글 시트 데이터를 로컬 데이터베이스 업데이트 하는 서비스",
  // ],
  team: Team.Development,
  company: Company.Fov,
  roles: [Role.Server],
  skills: [
    Skill("typescript"),
    Skill("react"),
    Skill("nest"),
    Skill("nginx"),
    Skill("typeorm"),
    Skill("docker"),
    Skill("socketio"),
  ],
  start: new Date(2024, 4),
  end: new Date(2024, 5),
  works: [
    new Work(
      "구글 시트와 데이터베이스 간 데이터 정합겅 검증 및 동기화",
      "구글 시트와 로컬 데이터베이스 간 데이터의 공백, 오타, 타입 불일치를 검사하여 데이터 동기화"
    ),
    new Work(
      "데이터 동기화 문제",
      "추가, 수정, 삭제 데이터를 라벨링하여 필요한 쿼리 구문 생성 및 적용 "
    ),
    new Work(
      "비개발자를 대상으로 한 웹 개발",
      "팀 내 비개발 인원을 대상으로 데이터베이스 동기화, 엑셀 다운로드, 미리보기 기능 개발"
    ),
    new Work(
      "동기화 시 누가, 어떤 테이블을 동기화 했는지 모르는 문제",
      "웹 소켓을 이용해 동기화 테이블을 데이터베이스에 로그를 남기고, IP를 기반으로 동기화 목록 브로드캐스트"
    ),
    new Work(
      "피드백을 통한 시스템 개선 및 유지보수",
      "팀원의 피드백을 기반으로 지속적인 시스템 개선 및 유지보수 수행"
    ),
    new Work(
      "업무 효율 향상",
      "데이터베이스 동기화 개발로 업무 시간 절감"
    ),
  ],
  // works: [
  //   "구글 시트와 로컬 데이터베이스 컬럼 검증",
  //   "구글 시트 엑셀 파일 변환 및 데이터 검증",
  //   "로컬 데이터베이스 비교 후 새로운 데이터 및 수정 데이터 건수 산정",
  //   "로컬 데이터베이스 테이블 선택 및 웹에서 행 데이터 미리보기 기능 제작",
  //   "사용자 구글 시트 데이터 동기화 시 다른 사용자에게 동기화 목록 알림 브로드캐스트",
  //   "실시간 알림을 위해 웹소켓을 추가하여 다른 개발자가 업데이트 시 동기화 내역 및 해당 내역 일괄 적용 기능 제작",
  //   "팀원 사용 후 피드백 반영하여 유지보수",
  //   "기존 개발자 데이터베이스 동기화 작업을 간소화하여 개발시간 30% 단축",
  // ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "구글 시트 및 로컬 데이터베이스 컬럼 및 타입 검증 문제",
      processes: [
        "구글 시트 API와 연동 및 문서 ID와 데이터베이스 매칭 구현",
        "선택된 스키마와 테이블 키를 기반으로 로컬 DB 테이블 컬럼 정보 추출 로직 개발",
        "구글 시트 데이터 가져오기 및 로컬 DB 컬럼과 비교 기능 구현",
        "사용자 정의 컬럼명 설정 기능 추가로 유연성 확보",
        "구글 시트와 로컬 DB 테이블 컬럼 간 인덱스 매핑 알고리즘 구현",
        "매핑된 인덱스를 활용한 구글 시트 데이터 선별적 추출 기능 개발",
        "컬럼별 데이터 타입 검증 및 응답 데이터 가공 프로세스 구축",
      ],
      // processes: [
      //   "구글 시트 API 연동",
      //   "구글 시트 문서 ID와 데이터베이스별 매칭",
      //   "선택한 스키마, 테이블 키를 사용하여 로컬 DB의 테이블 컬럼 정보 읽기",
      //   "구글 시트 데이터 가져와 컬럼과 비교 및 컬럼명 커스텀 설정 가능하도록 기능 정의",
      //   "구글 시트에서 로컬 DB 테이블 컬럼과 비교하여 배열 인덱스 매핑",
      //   "매핑된 인덱스 값으로 구글 시트에서 해당하는 데이터만 추출",
      //   "컬럼별 타입 검증 및 응답 데이터로 가공 생성",
      // ],
      solves: [
        "프론트에서 제어가 쉽도록 추가 또는 수정된 데이터로 분류하여 응답",
        "데이터베이스 업데이트 과정 대폭 감소",
      ],
    }),
  ],
  images: null,
});
