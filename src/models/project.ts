import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";

export class Project {
  title: string;
  description: string[];
  role: Role[];
  team: Team;
  company: Company;
  start: Date;
  end?: Date;
  skills: Skill[];
  works: string[];
  constructor({
    title,
    description,
    role,
    team,
    company,
    start,
    end,
    skills,
    works,
  }: {
    title: string;
    description: string[];
    role: Role[];
    team: Team;
    company: Company;
    start: Date;
    end?: Date;
    skills: Skill[];
    works: string[];
  }) {
    this.title = title;
    this.description = description;
    this.role = role;
    this.team = team;
    this.company = company;
    this.start = start;
    end && (this.end = end);
    this.skills = skills;
    this.works = works;
  }
}
