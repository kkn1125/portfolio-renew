import { IconList, Icons } from "@assets/icons";
import translate from "@common/translate";

export function JSIcon(name: IconList) {
  return {
    name: translate[name],
    icon: Icons[name],
  };
}
