import { Icons } from "@assets/icons";
import translate from "@common/translate";

export type IconList = keyof typeof Icons;

export function JSIcon(name: IconList) {
  return {
    name: translate[name],
    icon: Icons[name],
  };
}
