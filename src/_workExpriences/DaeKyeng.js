import WorkExperienceModel from "../model/WorkExperienceModel";
import { MONTH } from "../util/global";

const DaeKyeng = new WorkExperienceModel();

DaeKyeng.title = "(주)대경건축사사무소";
DaeKyeng.desc = "";
DaeKyeng.team = "설계1팀";
DaeKyeng.role = ["주임"];
DaeKyeng.start = new Date(2018, MONTH(1));
DaeKyeng.end = new Date(2020, MONTH(9));
DaeKyeng.inProgress = false;
DaeKyeng.listOpen = false;
DaeKyeng.list = [
  {
    header: "종로창신, 안양석수 현상설계",
    body: `PM 및 도면 작성`,
  },
  {
    header: "성남복정 A-3BL 현상설계",
    body: `PM 및 도면 작성`,
  },
  {
    header: "의왕월암 A-1BL 현상설계",
    body: `PM 보조 및 도면 작성`,
  },
  {
    header: "화성동탄2 트라이엠파크",
    body: `PM 보조 및 도면 작성`,
  },
  {
    header: "남양주진접A8 / 철원 철원행복주택",
    body: `PM 보조 및 도면 작성`,
  },
  {
    header: "창원명곡 A1-1BL 공동주택(신혼희망타운) 현상설계",
    body: `도면작성 및 보고서 작성`,
  },
  {
    header: "시흥장현 A-3BL 공동주택 현상설계",
    body: `도면작성 및 보고서 작성`,
  },
  {
    header: "부산기장 A2BL 시공책임형 CMR 아파트 건설공사 1공구",
    body: `도면작성 및 보고서 작성`,
  },
  {
    header: "부산명지 A5블록 공동주택 현상설계",
    body: `도면작성 및 보고서 작성`,
  },
  {
    header: "파주운정3 A26블록 공동주택 현상설계",
    body: `도면작성 및 보고서 작성`,
  },
  {
    header: "제6회 주택설계 기술경진대회",
    body: `도면작성 및 보고서 작성`,
  },
  {
    header: "파주운정 A-37블록 공동주택 현상설계",
    body: `도면작성 및 보고서 작성`,
  },
  {
    header: "남양주별내지구 A1-1BL 공동주택 현상설계",
    body: `도면작성 및 보고서 작성`,
  },
  {
    header: "(공공임대리츠)창원가포 S-1BL 아파트 건설공사 2공구",
    body: `도면작성 및 보고서 작성`,
  },
  {
    header: "서귀포성산지구 공동주택 현상설계",
    body: `보고서 작성`,
  },
  {
    header: "진주옥봉 행복주택 설계공모",
    body: `보고서 작성`,
  },
];

export default DaeKyeng;
