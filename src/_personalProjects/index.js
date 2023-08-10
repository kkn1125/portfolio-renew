import GanttChart from "./GanttChart";

export default [GanttChart].sort((a, b) => (b.start > a.start ? 1 : -1));
