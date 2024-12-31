import { CompanyModel } from "@models/company.model";
import { ProjectModel } from "@models/project.model";
import { companies } from "@storage/companies";
import { companyAnder } from "@storage/companies/company.ander";
import { companyFov } from "@storage/companies/company.fov";
import { companyReborn } from "@storage/companies/company.reborn";
import { sideProject } from "@storage/companies/side.project";

function findCompany(
  groups: {
    fov: CompanyModel;
    ander: CompanyModel;
    reborn: CompanyModel;
  },
  companyName: string
) {
  return Object.entries(groups).find(
    ([name]) => name.toLowerCase() === companyName
  )?.[1];
}

function compareWith(a: CompanyModel | undefined, b: CompanyModel | undefined) {
  return b && a && b.start.getTime() > a.start.getTime();
}

export const projects = ([sideProject.projects[0]] as ProjectModel[])
  .concat(companyFov.projects)
  .concat(
    companyAnder.projects,
    companyReborn.projects,
    sideProject.projects.slice(1)
  )
  .toSorted((a, b) => {
    if (
      compareWith(
        findCompany(companies, a.company),
        findCompany(companies, b.company)
      )
    ) {
      return 1;
    }
    if (b.start.getTime() > a.start.getTime()) {
      return 1;
    }
    return 0;
  });
