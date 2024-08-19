import { DEPLOY_PATH } from "@common/variables";
import { pathJoin } from "./pathJoin";

export function getResource(projectName: string, filename: string) {
  return pathJoin(DEPLOY_PATH, "images", projectName, filename);
}

export function getImages(projectName: string, filename: string) {
  return pathJoin(DEPLOY_PATH, projectName, filename);
}
