export const Company = {
  Hit: "㈜에이치아이티",
  Fov: "㈜포브스튜디오",
  Ander: "㈜프로젝트그룹앤더",
  Reborn: "㈜리본소프트",
  Daekyung: "㈜대경건축사사무소",
  Side: "사이드 프로젝트",
  Onflou: "㈜언플러",
} as const;
export type Company = (typeof Company)[keyof typeof Company];
