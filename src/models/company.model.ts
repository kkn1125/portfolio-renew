import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { ProjectModel } from "./project.model";

export class CompanyModel {
  name: Company;
  description: string;
  team: Team;
  roles: Role[];
  projects: ProjectModel[];
  start: Date;
  end?: Date;
  constructor({
    name,
    description,
    team,
    roles,
    projects,
    start,
    end,
  }: {
    name: Company;
    description: string;
    team: Team;
    roles: Role[];
    projects: ProjectModel[];
    start: Date;
    end?: Date;
  }) {
    this.name = name;
    this.description = description;
    this.team = team;
    this.roles = roles;
    this.projects = projects;
    this.start = start;
    end && (this.end = end);
  }
}
