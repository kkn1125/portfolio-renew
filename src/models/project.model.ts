import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { pathJoin } from "@libs/pathJoin";
import { Skill } from "@libs/skill";

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
    this.path = pathJoin("portfolio", path);
    relations && (this.relations = relations);
    isSideProject && (this.isSideProject = isSideProject);
  }
}
