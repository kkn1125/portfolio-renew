export const Company = {
  Hit: "(주)에이치아이티",
  Fov: "(주)포브스튜디오",
  Ander: "(주)프로젝트그룹앤더",
  Reborn: "(주)리본소프트",
  Daekyung: "(주)대경건축사사무소",
  Side: "사이드 프로젝트",
} as const;
export type Company = (typeof Company)[keyof typeof Company];
