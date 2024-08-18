export const Team = {
  Development: "개발팀",
  Produce: "제작팀",
  Backend: "백엔드팀",
  Personal: "개인",
  Team: "단체",
} as const;
export type Team = (typeof Team)[keyof typeof Team];
