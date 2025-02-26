import { ProjectModel } from "@models/ProjectModel";
import { sideDocumentify } from "./side.documentify";
import { sideGamepang } from "./side.gamepang";
import { sideGanttChart } from "./side.gantt-chart";
import { sideMenteeUnion } from "./side.mentee-union";
import { sideMentees } from "./side.mentees";
import { sideNarang } from "./side.narang";
import { sideSolitaire } from "./side.solitaire";
import { sideTreeParser } from "./side.tree-parser";
import { sideTypoz } from "./side.typoz";
import { sideSnapPoll } from "./side.snappoll";

function compareWith(
  a: string | ProjectModel | undefined,
  b: string | ProjectModel | undefined
) {
  if (typeof a === "undefined" || typeof b === "undefined") {
    return true;
  }

  if (typeof a === "string" || typeof b === "string") {
    return a < b;
  }

  return b.start.getTime() > a.start.getTime();
}

export default [
  sideSnapPoll,
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
