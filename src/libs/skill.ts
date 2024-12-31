import { IconList, Icons } from "@assets/icons";
import translate from "@common/translate";

export type Skill = { name: string; icon: string };
export function Skill<T extends string>(name: IconList | T) {
  return {
    name: translate[name],
    icon:
      name in Icons
        ? Icons[name as IconList]
        : `<div style="border-radius: 50%; height: 100%; background: #ccc; font-size: 18px; display: flex; justify-content: center; align-items: center">${
            name[0].toUpperCase() ?? "?"
          }</div>`,
  };
}
