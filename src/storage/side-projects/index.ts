import { ProjectModel } from "@models/project.model";
import { sideDocumentify } from "./side.documentify";
import { sideGamepang } from "./side.gamepang";
import { sideGanttChart } from "./side.gantt-chart";
import { sideMenteeUnion } from "./side.mentee-union";
import { sideMentees } from "./side.mentees";
import { sideNarang } from "./side.narang";
import { sideSolitaire } from "./side.solitaire";
import { sideTreeParser } from "./side.tree-parser";
import { sideTypoz } from "./side.typoz";

function compareWith(a: ProjectModel | undefined, b: ProjectModel | undefined) {
  return b && a && b.start.getTime() > a.start.getTime();
}

export default [
  sideMenteeUnion,
  sideTypoz,
  sideNarang,
  sideSolitaire,
  sideMentees,
  sideGanttChart,
  sideGamepang,
  sideTreeParser,
  sideDocumentify,
].toSorted((a, b) => {
  if (compareWith(a, b)) {
    return 1;
  }
  return 0;
});
