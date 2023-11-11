import GamePang from "./GamePang";
import Documentify from "./Documentify";
import GanttChart from "./GanttChart";
import Mentees from "./Mentees";
import ProjectNarang from "./ProjectNarang";
import Solitaire from "./Solitaire";
import TreeParser from "./TreeParser";
import Typer from "./Typer";
import { sortImportantList, sortList, sortShowList } from "@/util/tool";

export default [
  GamePang,
  Documentify,
  Solitaire,
  TreeParser,
  Typer,
  Mentees,
  ProjectNarang,
  GanttChart,
]
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
