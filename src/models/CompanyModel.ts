import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { ProjectModel } from "./ProjectModel";

export class CompanyModel {
  isIt: boolean = true;
  name: Company;
  description: string;
  team: Team;
  roles: Role[];
  projects: ProjectModel[] = [];
  simpleProjects: string[] = [];
  start: Date;
  end?: Date;
  constructor({
    isIt,
    name,
    description,
    team,
    roles,
    projects,
    simpleProjects,
    start,
    end,
  }: {
    isIt?: boolean;
    name: Company;
    description: string;
    team: Team;
    roles: Role[];
    projects?: ProjectModel[];
    simpleProjects?: string[];
    start: Date;
    end?: Date;
  }) {
    isIt !== undefined && (this.isIt = isIt);
    this.name = name;
    this.description = description;
    this.team = team;
    this.roles = roles;
    projects && (this.projects = projects);
    simpleProjects && (this.simpleProjects = simpleProjects);
    this.start = start;
    end && (this.end = end);
  }
}
