import { JSIcon } from "@common/enums/Icon";

export const Information = {
  name: "김경남",
  age: new Date().getFullYear() - 1993,
  skill: {
    main: [JSIcon("javascript")],
    sub: [JSIcon('java')],
  },
  stacks: [],
} as const;
export type Information = (typeof Information)[keyof typeof Information];
