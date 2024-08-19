import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { pathJoin } from "@libs/pathJoin";
import { Skill } from "@libs/skill";
import { Issue } from "./issue";
import { DEPLOY_PATH } from "@common/variables";

export class ProjectModel {
  cover?: string;
  github?: string;
  demoSites?: string[];
  title: string;
  description: string[];
  roles: Role[];
  team: Team;
  company: Company;
  start: Date;
  end?: Date;
  skills: Skill[];
  works: string[];
  path: string;
  relations?: ProjectModel[];
  isSideProject?: boolean = false;
  issues?: Issue[];
  constructor({
    cover,
    github,
    demoSites,
    title,
    description,
    roles,
    team,
    company,
    start,
    end,
    skills,
    works,
    path,
    relations,
    isSideProject = false,
    issues,
  }: {
    cover?: string;
    github?: string;
    demoSites?: string[];
    title: string;
    description: string[];
    roles: Role[];
    team: Team;
    company: Company;
    start: Date;
    end?: Date;
    skills: Skill[];
    works: string[];
    path: string;
    relations?: ProjectModel[];
    isSideProject?: boolean;
    issues?: Issue[];
  }) {
    cover && (this.cover = cover);
    github && (this.github = github);
    demoSites && (this.demoSites = demoSites);
    this.title = title;
    this.description = description;
    this.roles = roles;
    this.team = team;
    this.company = company;
    this.start = start;
    end && (this.end = end);
    this.skills = skills;
    this.works = works;
    this.path = pathJoin(DEPLOY_PATH, "portfolio", path);
    relations && (this.relations = relations);
    isSideProject && (this.isSideProject = isSideProject);
    issues && (this.issues = issues);
  }
}
