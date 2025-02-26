import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { ProjectModel } from "./project.model";

export class CompanyModel {
  isIt: boolean = true;
  name: Company;
  description: string;
  team: Team;
  roles: Role[];
  projects: (string | ProjectModel)[];
  start: Date;
  end?: Date;
  constructor({
    isIt,
    name,
    description,
    team,
    roles,
    projects,
    start,
    end,
  }: {
    isIt?: boolean;
    name: Company;
    description: string;
    team: Team;
    roles: Role[];
    projects: (string | ProjectModel)[];
    start: Date;
    end?: Date;
  }) {
    isIt !== undefined && (this.isIt = isIt);
    this.name = name;
    this.description = description;
    this.team = team;
    this.roles = roles;
    this.projects = projects;
    this.start = start;
    end && (this.end = end);
  }
}
