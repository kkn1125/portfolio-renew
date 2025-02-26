import { CompanyModel } from "@models/company.model";
import dayjs from "dayjs";

export function totalAnnual(companies: CompanyModel[]) {
  return Math.ceil(
    companies.reduce((acc, cur) => {
      const diff = dayjs(cur.end).diff(cur.start, "y", true);
      return acc + diff;
    }, 0)
  );
}
