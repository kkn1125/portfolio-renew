import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { CompanyModel } from "@models/CompanyModel";

export const companyDaekyung = new CompanyModel({
  isIt: false,
  name: Company.Daekyung,
  description: "설계 도면 제작 및 도면 보고서 PM, 실시설계 현장 이슈 관리",
  roles: [Role.Server, Role.Backend, Role.Frontend],
  team: Team.Development,
  simpleProjects: [
    "종로창신, 안양석수 현상설계  PM 및 도면 작성",
    "성남복정 A-3BL 현상설계  PM 및 도면 작성",
    "의왕월암 A-1BL 현상설계  PM 보조 및 도면 작성",
    "화성동탄2 트라이엠파크  PM 보조 및 도면 작성",
    "남양주진접A8 / 철원 철원행복주택  PM 보조 및 도면 작성",
    "창원명곡 A1-1BL 공동주택(신혼희망타운) 현상설계  도면작성 및 보고서 작성",
    "시흥장현 A-3BL 공동주택 현상설계  도면작성 및 보고서 작성",
    "부산기장 A2BL 시공책임형 CMR 아파트 건설공사 1공구  도면작성 및 보고서 작성",
    "부산명지 A5블록 공동주택 현상설계  도면작성 및 보고서 작성",
    "파주운정3 A26블록 공동주택 현상설계  도면작성 및 보고서 작성",
    "제6회 주택설계 기술경진대회  도면작성 및 보고서 작성",
    "파주운정 A-37블록 공동주택 현상설계  도면작성 및 보고서 작성",
    "남양주별내지구 A1-1BL 공동주택 현상설계  도면작성 및 보고서 작성",
    "(공공임대리츠)창원가포 S-1BL 아파트 건설공사 2공구  도면작성 및 보고서 작성",
    "서귀포성산지구 공동주택 현상설계  보고서 작성",
    "진주옥봉 행복주택 설계공모  보고서 작성",
  ],
  start: new Date(2018, 0),
  end: new Date(2020, 10),
});
