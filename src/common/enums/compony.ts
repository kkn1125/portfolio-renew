export const Company = {
  Fov: "(주)FovStudio",
  Ander: "(주)프로젝트그룹앤더",
  Reborn: "(주)리본소프트",
} as const;
export type Company = (typeof Company)[keyof typeof Company];
