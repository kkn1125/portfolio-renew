export const Company = {
  Fov: "(주)포브스튜디오",
  Ander: "(주)프로젝트그룹앤더",
  Reborn: "(주)리본소프트",
  Side: "사이드 프로젝트",
} as const;
export type Company = (typeof Company)[keyof typeof Company];
