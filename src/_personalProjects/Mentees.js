import ProjectModel from "../model/ProjectModel";
import { MONTH, FORM_URL, FORM_IMAGE } from "../util/global";

const Mentees = new ProjectModel();
Mentees.title = "Mentees";
Mentees.desc =
  "멘티들이 모여 만드는 성장 커뮤니티가 주제 입니다. 수많은 멘토링 서비스를 보면 멘토와 멘티라는 두 가지의 유형으로 분류 됩니다. 멘티의 입장에서 멘토와 곧바로 접하는 경험이 좋을 수 있지만 반면에 부담스럽게 다가올 수도 있다는 생각을 바탕으로 시작하게 된 프로젝트입니다. 같은 상황에 놓인 멘티들이 모여 세미나 및 유용한 정보, 지식을 공유하며 의지가 되는 것을 목표로하고, 멘티들이 서로 추천하여 레벨 시스템을 적용하여 추전 점수가 많으면 레벨 업하며, 특정 레벨이 되면 멘토로 승격되어 멘티와 직접 멘토링할 수 있는 기회를 얻는 커뮤니티 입니다.";
Mentees.team = "개인";
Mentees.role = ["frontend"];
Mentees.mainSkills = ["Spring boot"];
Mentees.skills = ["JavaScript", "MyBatis", "Bootstrap", "Apache Tiles"];
Mentees.start = new Date(2021, MONTH(9));
Mentees.end = new Date(2021, MONTH(9));
Mentees.inProgress = false;
Mentees.listOpen = true;
Mentees.list = [
  {
    header: "유저 간 추천 시스템 개발",
    body: ``,
  },
  {
    header:
      "추천을 통해 얻은 점수가 가장 높은 순서로 모든 유저에게 공개되는 시스템 개발",
    body: ``,
  },
  {
    header:
      "추천을 통해 얻은 점수가 가장 높은 순서대로 5명까지 모든 유저에게 공개되는 시스템 개발",
    body: ``,
  },
  {
    header: "멘티들의 고민 등을 올려 피드백을 받는 계층형 게시판 제작",
    body: ``,
  },
  {
    header: "세미나 등록, 세미나 기간 및 신청, 제한 인원 및 마감 기능 개발",
    body: ``,
  },
];
Mentees.links = [];
Mentees.github = "https://github.com/kkn1125/Mentees";
Mentees.name = "mentees";
Mentees.path = "/mentees";
Mentees.cover = "/mentees_main.png";
Mentees.images = [
  FORM_IMAGE("메인 피드백", "mentees01.png"),
  FORM_IMAGE("메인 반응형-1", "mentees_main2.png"),
  FORM_IMAGE("메인 반응형-2", "mentees_main03.png"),
  FORM_IMAGE("메인 피드백 URL 클립보드 복사", "mentees_main_clipboard.png"),
  FORM_IMAGE("로그인 페이지", "mentees_signin.png"),
  FORM_IMAGE("유저 개인 페이지", "mentees_mentees_full.png"),
  FORM_IMAGE(
    "유저 개인페이지 레벨, 점수, 추천 조회",
    "mentees_mentees_activity_recommend.png"
  ),
  FORM_IMAGE("유저 멘티 활동 확인", "mentees_mentees_program_feedback.png"),
  FORM_IMAGE("계정 관리 페이지", "mentees_mentees_setting.png"),
  FORM_IMAGE("계정 탈퇴", "mentees_mentees_setting_out.png"),
  FORM_IMAGE("세미나 등 프로그램 상세", "mentees_program_detail.png"),
  FORM_IMAGE(
    "프로그램 상세 계층형 댓글 작성 폼",
    "mentees_program_detail_reply.png"
  ),
  FORM_IMAGE(
    "프로그램 상세 계층형 댓글 작성",
    "mentees_program_detail_reply_done.png"
  ),
];

export default Mentees;
