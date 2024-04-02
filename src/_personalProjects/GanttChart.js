import ProjectModel from "../model/ProjectModel";
import { MONTH, FORM_URL, FORM_IMAGE } from "../util/global";

const GanttChart = new ProjectModel();

GanttChart.important = true;
GanttChart.title = "Gantt Chart";
GanttChart.desc =
  "개인 블로그를 작성하며 느낀 불편함을 해소하기 위해 제작 된 테이블 생성 웹 툴입니다. 목적은 블로그에 첨부할 예시 자료를 생성하기 위해 만들어졌으며, html에 넣을 수 있는 형태여야 했고, 커스터마이징이 편리하면서 저장이 가능한 형태여야 했습니다. 다중 선택 및 색상 변경, 스타일 복사, 행,열 이동이 있는 툴이며, html로 내보내거나 시트를 추가하여 여러 시트를 관리할 수 있습니다. 예시로는 간트차트 또는 스케쥴 시트, 타임라인 등을 작성하여 활용할 수 있습니다.";
GanttChart.team = "개인";
GanttChart.role = ["frontend"];
GanttChart.mainSkills = ["JavaScript"];
GanttChart.skills = ["JavaScript"];
GanttChart.start = new Date(2022, MONTH(2));
GanttChart.end = new Date(2022, MONTH(2));
GanttChart.inProgress = false;
GanttChart.listOpen = true;
GanttChart.list = [
  {
    header: "상단 메뉴 트리 제작",
    body: ``,
  },
  {
    header: "셀 단위 행, 열 추가 기능 구현",
    body: ``,
  },
  {
    header: "드래그 셀렉팅 구현",
    body: ``,
  },
  {
    header:
      "선택 또는 전체 셀에 대한 배경, 글자, 테두리 색상, 두께, 스타일 지정 패널 제작",
    body: ``,
  },
  {
    header: "작성된 시트 데이터 직렬화하여 로컬스토리지 저장 기능 구현",
    body: ``,
  },
  {
    header: "시트 단위 관리",
    body: ``,
  },
  {
    header: "작성된 시트 html코드로 자동 생성하여 내보내기 기능 추가",
    body: ``,
  },
  {
    header: "행, 열 합치기, 나누기 기능 구현",
    body: ``,
  },
];
GanttChart.troubleshooting = [
  {
    problem: "다중 셀 단위 조정",
    resolve: [
      "다중 선택을 위해 각 셀 요소에 dataset 값을 통해 셀 위치 값 저장",
    ],
    process: [
      "셀 요소 초기화 시 dataset 값으로 위치 값 표기",
      "다중 선택 시 선택된 셀 요소의 dataset 값으로 스타일 및 텍스트 일괄 조정",
    ],
    result: ["단일, 다중 셀 일괄 처리 기능 추가하여 테이블 작성 시간 단축"],
  },
];
GanttChart.links = [
  FORM_URL("new demo", "https://kkn1125.github.io/gantt-chart/"),
  FORM_URL("old demo", "https://kkn1125.github.io/ganttChart/"),
];
GanttChart.github = "https://github.com/kkn1125/gantt-chart";
GanttChart.name = "gantt-chart";
GanttChart.path = "/gantt-chart";
GanttChart.cover = "/gantt01.png";
GanttChart.images = [
  FORM_IMAGE(
    "리뉴얼 간트 차트",
    "https://github.com/kkn1125/portfolio-renew/assets/71887242/2d8a4639-3ac0-476a-a538-cd695205e4b5"
  ),
  FORM_IMAGE(
    "간트 차트 예시",
    "https://github.com/kkn1125/portfolio-renew/assets/71887242/a695593d-3554-4dbe-8935-9932e49ab5aa"
  ),
  FORM_IMAGE("첫 페이지", "gantt02.png"),
  FORM_IMAGE("상단 툴바 및 스케줄 테이블 예시", "gantt01.png"),
  FORM_IMAGE("셀 선택 후 우클릭 시 조절 패널", "gantt03.png"),
  FORM_IMAGE("Shift 누른 상태 셀 호버링 시", "gantt04.png"),
  FORM_IMAGE("클릭 & 드래그 후 셀렉팅 된 셀 하이라이팅", "gantt05.png"),
  FORM_IMAGE("작업판 하단 시트 생성 버튼 클릭", "gantt07.png"),
  FORM_IMAGE(
    "다른 시트 클릭 시 저장된 작업 환경 불러온 후 변환",
    "gantt08.png"
  ),
  FORM_IMAGE("시트 우클릭 시 이름변경, 삭제 버튼 표시", "gantt09.png"),
  FORM_IMAGE("시트 이름변경 전", "gantt10.png"),
  FORM_IMAGE("시트 이름변경 후", "gantt11.png"),
];

export default GanttChart;
