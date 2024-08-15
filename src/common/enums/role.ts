export const Role = {
  Server: "server developer",
  Backend: "back-end developer",
  Frontend: "front-end developer",
} as const;
export type Role = (typeof Role)[keyof typeof Role];
