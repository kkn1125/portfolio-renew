import { sortImportantList, sortList, sortShowList } from "@/util/tool";
import Documentify from "./Documentify";
import GamePang from "./GamePang";
import GanttChart from "./GanttChart";
import Mentees from "./Mentees";
import ProjectNarang from "./ProjectNarang";
import Solitaire from "./Solitaire";
import TreeParser from "./TreeParser";
import Typer from "./Typer";
import Typoz from "./Typoz";
import MenteeUnion from "./MenteeUnion";

export default [
  MenteeUnion,
  Typoz,
  GamePang,
  Documentify,
  Solitaire,
  TreeParser,
  Typer,
  Mentees,
  ProjectNarang,
  GanttChart,
]
  .filter((item) => item.visible)
  .sort(sortShowList)
  .reduce(
    (acc, item) => {
      if (item.listOpen) {
        acc[0].push(item);
      } else {
        acc[1].push(item);
      }
      return acc;
    },
    [[], []]
  )
  .map((ac) => ac.sort(sortList).sort(sortImportantList))
  .flat(1);
