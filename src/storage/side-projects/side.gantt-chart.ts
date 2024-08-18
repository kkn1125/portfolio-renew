import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";

export const sideGanttChart = new ProjectModel({
  path: "/side/gantt-chart",
  cover: getResource("gantt-chart", "gantt01.png"),
  github: "https://github.com/kkn1125/gantt-chart",
  demoSites: [
    "https://kkn1125.github.io/gantt-chart",
    "https://kkn1125.github.io/ganttChart",
  ],
  title: "Gantt Chart",
  description: [
    "개인 블로그 작성 중 느낀 불편함을 해소하기 위해 제작된 테이블 생성 웹 툴",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend],
  skills: [Skill("typescript")],
  start: new Date(2022, 1),
  end: new Date(2022, 1),
  works: [
    "상단 메뉴 트리 작성",
    "셀 단위 행, 열 추가 기능 구현",
    "드래그 셀렉팅 기능 구현",
    "선택 또는 전체 셀 배경, 폰트, 테두리 색상 및 두께 등 스타일 지정 패널 제작",
    "작성된 시트 데이터 직렬화 및 저장 기능 구현",
    "시트 단위 간트 차트 설정 기능 구현",
    "작성된 시트 HTML 내보내기 기능 추가",
    "행, 열 합치기, 나누기 기능 구현",
  ],
  isSideProject: true,
});
