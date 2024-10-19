export const Role = {
  Server: "server developer",
  Backend: "back-end developer",
  Frontend: "front-end developer",
} as const;
export type Role = (typeof Role)[keyof typeof Role];
export const roleTranslate = {
  "server developer": "서버",
  "back-end developer": "백엔드",
  "front-end developer": "프론트엔드",
} as const;
