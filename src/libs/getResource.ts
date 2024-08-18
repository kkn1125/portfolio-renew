import { pathJoin } from "./pathJoin";

export function getResource(projectName: string, filename: string) {
  return pathJoin("images", projectName, filename);
}
