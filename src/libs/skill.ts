import { IconList, Icons } from "@assets/icons";
import translate from "@common/translate";

export type Skill = { name: string; icon: string };
export function Skill(name: IconList) {
  return {
    name: translate[name],
    icon: Icons[name],
  };
}
