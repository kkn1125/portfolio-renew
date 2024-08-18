import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { sortByEnd } from "@libs/sortBy";
import { CompanyModel } from "@models/company.model";
import { ProjectModel } from "@models/project.model";
import { sideGamepang } from "@storage/side-projects/side.gamepang";
import { sideGanttChart } from "@storage/side-projects/side.gantt-chart";
import { sideMenteeUnion } from "@storage/side-projects/side.mentee-union";
import { sideMentees } from "@storage/side-projects/side.mentees";
import { sideNarang } from "@storage/side-projects/side.narang";
import { sideSolitaire } from "@storage/side-projects/side.solitaire";
import { sideTreeParser } from "@storage/side-projects/side.tree-parser";
import { sideTypoz } from "@storage/side-projects/side.typoz";

export const sideProject = new CompanyModel({
  name: Company.Side,
  description: "개인/단체로 진행한 사이드프로젝트입니다.",
  team: Team.Personal,
  roles: [Role.Backend],
  projects: sortByEnd([
    sideMenteeUnion,
    sideTypoz,
    sideNarang,
    sideSolitaire,
    sideMentees,
    sideGanttChart,
    sideGamepang,
    sideTreeParser,
  ]),
  start: new Date(2021, 8),
});
