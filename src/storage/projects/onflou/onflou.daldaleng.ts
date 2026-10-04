import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

// 문제-해결-이유-성과
// 경력 근거: daldal-english-api / backoffice / batch: 9dee01b5ef, b9313abadb, db3102bb4e, 08b123e65d. 2026년 8월 Lee Jin Su 명의는 사용자 확인.
export const onflouDaldaleng = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/onflou/daldaleng",
  title: "미래엔 초코 달달영어 운영",
  description: [
    "영어 학습 플랫폼의 Spring Boot·MyBatis API, 관리자 서비스와 배치 운영",
    "학습 지표의 계산·조회 기준, 외부 교육 시스템 연동과 협력사 변경 요구사항 담당",
  ],
  team: Team.Backend,
  company: Company.Onflou,
  roles: [Role.Backend, Role.Server],
  skills: [
    Skill("springboot"),
    Skill("java"),
    Skill("mysql"),
    Skill("mariadb"),
    Skill("redis"),
    Skill("docker"),
    Skill("linux"),
    Skill("jenkins"),
    Skill("mybatis"),
  ],
  start: new Date(2026, 1),
  end: null,
  works: [
    new Work(
      "학습 지표의 계산·조회 기준 정리",
      "누적 학습 시간을 수업 수 기준 평균으로 변경하고, 실제 사용 중인 수업만 집계하도록 API·관리자·배치의 계산과 조회 조건을 수정",
    ),
    new Work(
      "학습 기록 유무를 구분하는 연동 API 개선",
      "미응시와 실제 응시 후 0%를 같은 값으로 반환하던 조회에 답안 존재 조건을 추가해 외부 학습 관리 시스템에서 두 상태를 구분하도록 변경",
    ),
    new Work(
      "외부 인증·출석·리워드 연동 보완",
      "서비스별 토큰·회원 식별과 실패 응답을 처리하고, 과거 출석 이력에 따른 중복 리워드 조건과 학습 현황 요청·응답 규격을 보완",
    ),
    new Work(
      "다중 서비스 운영과 협력사 조율",
      "API·관리자·배치·캡처 서버의 운영 이슈와 관리자 기능 변경을 처리하며 4개 협력사와 요구사항·일정을 조율",
    ),
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "리포트의 평균 학습 시간에 누적 시간이 전달되어 지표의 의미와 계산이 일치하지 않음",
      processes: [
      "시간 합계와 수업 수의 계산 흐름 확인",
      "수업 수 기준 평균으로 변경하고 수업이 없는 경우를 별도 처리",
    ],
      solves: [
      "리포트가 표시하는 지표에 맞게 계산식과 관련 집계 조건 수정",
    ],
    }),
    new Issue({
      problem: "외부 학습 관리 시스템에 미응시와 실제 정답률 0%가 동일하게 전달됨",
      processes: [
      "조회 기간에 해당하는 답안 존재 여부를 SQL 조건에 추가",
      "미응시는 null, 응시 결과는 실제 비율로 반환하고 관련 평균 조건 보완",
    ],
      solves: [
      "기록이 없는 상태와 측정된 학습 결과를 구분하는 응답으로 변경",
    ],
    }),
  ],
  images: null,
});
