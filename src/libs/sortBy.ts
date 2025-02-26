import { ProjectModel } from "@models/project.model";

export function sortByEnd<T extends string | ProjectModel>(list: T[]) {
  if (list.every((item) => typeof item === "string")) {
    return list;
  }
  if (list.every((item) => item instanceof ProjectModel)) {
    return list.toSorted((a, b) =>
      (b.end ?? new Date()) > (a.end ?? new Date()) ? 1 : -1
    );
  }
  return list;
}
