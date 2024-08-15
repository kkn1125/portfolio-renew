export const Team = {
  Development: "개발팀",
  Produce: "제작팀",
  Backend: "백엔드팀",
} as const;
export type Team = (typeof Team)[keyof typeof Team];
