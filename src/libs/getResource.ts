import { pathJoin } from "./pathJoin";

export function getResource(projectName: string, filename: string) {
  return pathJoin("images", projectName, filename);
}

export function getImages(projectName: string, filename: string) {
  return pathJoin(projectName, filename);
}
