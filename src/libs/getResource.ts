import { DEPLOY_PATH } from "@common/variables";
import { pathJoin } from "./pathJoin";

export type ImageObject = {
  src: string;
  alt: string;
};

export function getExternalImage(url: string, alias: string) {
  return {
    src: url,
    alt: alias,
  };
}

export function getImage(
  projectName: string,
  filename: string,
  alias: string
): ImageObject {
  return {
    src: getResource(projectName, filename),
    alt: alias,
  };
}

export function getResource(projectName: string, filename: string) {
  return pathJoin(DEPLOY_PATH, "images", projectName, filename);
}

export function getImages(projectName: string, filename: string) {
  return pathJoin(DEPLOY_PATH, projectName, filename);
}
