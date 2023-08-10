import ProjectModel from "../model/ProjectModel";
import { MONTH } from "../util/global";

const GanttChart = new ProjectModel();
GanttChart.title = "[JAVASCRIPT] Gantt Chart";
GanttChart.desc = "테이블 생성 보조 웹 툴";
GanttChart.team = "개인";
GanttChart.role = ["frontend"];
GanttChart.mainSkills = ["javascript"];
GanttChart.skills = ["html", "css", "javascript"];
GanttChart.start = new Date(2022, MONTH(2));
GanttChart.end = new Date(2022, MONTH(2));
GanttChart.inProgress = false;
GanttChart.listOpen = true;
GanttChart.list = [
  {
    header: "테이블 모든 속성 값 변경 자동화",
    body: ``,
  },
  {
    header: "시트 사용으로 다양한 작업 저장",
    body: ``,
  },
];
GanttChart.links = ["https://kkn1125.github.io/ganttChart/"];
GanttChart.github = "https://github.com/kkn1125/ganttChart";
GanttChart.name = "gantt-chart";
GanttChart.path = "/gantt-chart";

export default GanttChart;
