import { companyAnder } from "@storage/companies/company.ander";
import { companyFov } from "@storage/companies/company.fov";
import { companyReborn } from "@storage/companies/company.reborn";
import { sideProject } from "@storage/companies/side.project";

export const projects = companyFov.projects.concat(
  companyAnder.projects,
  companyReborn.projects,
  sideProject.projects
);
