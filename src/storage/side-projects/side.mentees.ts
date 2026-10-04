import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getImage, getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const sideMentees = new ProjectModel({
  cover: getResource("mentees", "mentees01.png"),
  github: "https://github.com/kkn1125/Mentees",
  demoSites: null,
  relations: null,
  path: "/side/mentees",
  title: "Mentees",
  description: [
    "추천과 세미나 신청 기능을 제공하는 초기 커뮤니티 프로젝트",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Backend, Role.Frontend],
  skills: [
    Skill("springboot"),
    Skill("javascript"),
    Skill("mybatis"),
    Skill("bootstrap"),
    Skill("artillery"),
  ],
  start: new Date(2021, 8),
  end: new Date(2021, 8),
  works: [
    new Work(
      "추천·세미나 업무 흐름 구현",
      "Spring Boot·MyBatis API와 데이터 모델·화면을 개발하고, 추천 순위와 신청 기간·인원 제한·마감을 처리",
    ),
  ],
  isSideProject: true,
  issues: null,
  images: [
    getImage("mentees", "mentees_main.png", "랜딩 페이지"),
    getImage("mentees", "mentees_main_clipboard.png", "피드백 복사"),
    getImage("mentees", "mentees_signin.png", "로그인 페이지"),
    getImage("mentees", "mentees_main_mentee.png", "멘티 랭크 목록"),
    getImage("mentees", "mentees_mentees_setting.png", "회원정보 수정"),
    getImage(
      "mentees",
      "mentees_mentees_program_feedback.png",
      "멘티활동 기록"
    ),
  ],
});
