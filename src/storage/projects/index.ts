import { Company } from "@common/enums/compony";
import { CompanyModel } from "@models/CompanyModel";
import { ProjectModel } from "@models/ProjectModel";
import { companies } from "@storage/companies";
import { companyAnder } from "@storage/companies/company.ander";
import { companyFov } from "@storage/companies/company.fov";
import { companyHit } from "@storage/companies/company.hit";
import { companyReborn } from "@storage/companies/company.reborn";
import { sideProject } from "@storage/companies/side.project";

function findCompany(
  groups: {
    fov: CompanyModel;
    ander: CompanyModel;
    reborn: CompanyModel;
    hit: CompanyModel;
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

export const projects = ([] as ProjectModel[])
  .concat(
    companyHit.projects,
    companyFov.projects,
    companyAnder.projects,
    companyReborn.projects,
    sideProject.projects
  )
  .toSorted((a, b) => {
    const aOrder = a.isMainOrder;
    const bOrder = b.isMainOrder;

    const aHasOrder = aOrder !== null && aOrder !== undefined;
    const bHasOrder = bOrder !== null && bOrder !== undefined;

    // isMainOrder가 있는 경우, 오름차순으로 앞에 정렬
    if (aHasOrder && bHasOrder) {
      if (aOrder !== bOrder) {
        return aOrder - bOrder;
      }
    } else if (aHasOrder) {
      return -1; // a가 먼저
    } else if (bHasOrder) {
      return 1; // b가 먼저
    }

    // 기존 조건
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
