import { ProjectModel } from "@models/ProjectModel";

export function sortByEnd<T extends string | ProjectModel>(list: T[]) {
  if (list.every((item) => typeof item === "string")) {
    return list;
  }
  if (list.every((item) => item instanceof ProjectModel)) {
    return list.toSorted((a, b) => {
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

      return (b.end ?? new Date()) > (a.end ?? new Date()) ? 1 : -1;
    });
  }
  return list;
}
