import { ProjectModel } from "@models/project.model";

export function sortByEnd<T extends ProjectModel>(list: T[]) {
  return list.toSorted((a, b) =>
    (b.end ?? new Date()) > (a.end ?? new Date()) ? 1 : -1
  );
}
