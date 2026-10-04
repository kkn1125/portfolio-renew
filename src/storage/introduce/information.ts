import { Role } from "@common/enums/role";
import { Skill } from "@libs/skill";
import Resume from "@models/Resume";

export const Information = {
  title: "실시간 상태와 업무 데이터의 문제를 해결하는 백엔드 개발자",
  name: "김경남",
  position: Role.Backend,
  coreCompetencies: [
  "Socket.IO·Redis 상태 관리와 동시성 처리",
  "SQL 조회·집계 기준과 업무 규칙 구현",
  "레거시 전환·외부 연동의 오류 분석",
  "배포·운영 대응과 협력사 일정 조율"
],
  description: [
  "NestJS·Spring Boot 기반 API와 실시간 서버를 개발합니다. 웨딩 CRM·ERP, 커머스, 교육 서비스에서 업무 규칙을 데이터 조회·처리 구조에 반영하고, 운영 중 발생하는 상태·집계·외부 연동 문제를 해결해 왔습니다.",
  "백엔드 개발과 함께 관리자 화면, 서버·배포 운영을 맡았습니다. 요청·응답 규격, 실행 순서와 SQL 조건에서 원인을 확인하고, 협력사와 변경 범위·일정을 조율하며 수정 이유를 문서로 남깁니다."
],
  resume: [
    new Resume("문제의 원인을 확인하는 방식", [
      "요청·응답 규격, 실행 순서와 데이터 조건을 확인한 뒤 수정 범위를 정합니다. 실시간 상태의 수명 문제는 종료·만료 순서에서, 통계 오류는 집계 대상과 미응시 처리 기준에서 원인을 찾았습니다.",
    ]),
    new Resume("업무 규칙을 검증하는 방식", [
      "계약·재고와 학습 집계처럼 업무 결과에 영향을 주는 계산은 경계 조건을 함께 확인합니다. 재고 역산에서는 첫 실사와 수량 증감 사례를 저장소 Mock 테스트로 검산했습니다.",
    ]),
    new Resume("개발 이후의 책임", [
      "API 구현 이후에도 관리자 화면, 서버·배포와 운영 문의를 함께 맡았습니다. 여러 협력사 사이에서 요구사항·영향 범위·일정을 조율하고 API 계약과 운영·인수인계 문서로 변경 이유를 공유합니다.",
    ]),
  ],
  email: "chaplet01@gmail.com",
  github: "https://github.com/kkn1125",
  blog: "https://kkn1125.github.io",
  age: new Date().getFullYear() - 1993,
  skill: {
    main: [
      Skill("typescript"),
      Skill("nodejs"),
      Skill("nest"),
      Skill("java"),
      Skill("springboot"),
      Skill("typeorm"),
      Skill("mybatis"),
      Skill("mysql"),
      Skill("mariadb"),
      Skill("redis"),
      Skill("docker"),
      Skill("linux"),
    ],
    sub: [
      Skill("react"),
      Skill("prisma"),
      Skill("python"),
      Skill("golang"),
    ],
  },
  stacks: [
    Skill("awsEc2"),
    Skill("nginx"),
    Skill("jwt"),
    Skill("uwebsockets"),
    Skill("socketio"),
    Skill("fastify"),
    Skill("express"),
    Skill("typeorm"),
    Skill("mybatis"),
    Skill("nextjs"),
    Skill("jenkins"),
    Skill("artillery"),
    Skill("jest"),
    Skill("vite"),
    Skill("vitest"),
    Skill("webpack"),
    Skill("gulp"),
    Skill("bootstrap"),
    Skill("formik"),
    Skill("sass"),
    Skill("javascript"),
    Skill("styledcomponent"),
    Skill("mui"),
    Skill("webrtc"),
    Skill("postgresql"),
    Skill("reactQuery"),
    Skill("recoil"),
    Skill("swagger"),
    Skill("postman"),
    Skill("xterm"),
    Skill("zustand"),
  ],
} as const;
export type Information = (typeof Information)[keyof typeof Information];
