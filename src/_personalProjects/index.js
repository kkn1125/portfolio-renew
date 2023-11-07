import GamePang from "./GamePang";
import Documentify from "./Documentify";
import GanttChart from "./GanttChart";
import Mentees from "./Mentees";
import ProjectNarang from "./ProjectNarang";
import Solitaire from "./Solitaire";
import TreeParser from "./TreeParser";
import Typer from "./Typer";

export default [
  GamePang,
  Documentify,
  Solitaire,
  TreeParser,
  Typer,
  Mentees,
  ProjectNarang,
  GanttChart,
].sort((a, b) => (b.start > a.start ? 1 : -1));
