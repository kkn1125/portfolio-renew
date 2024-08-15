import { DEPLOY_PATH } from "@common/variables";
import { pathJoin } from "./pathJoin";

export function Page({ name, path }: { name: string; path: string }) {
  return { name, path: pathJoin(DEPLOY_PATH, path) };
}
