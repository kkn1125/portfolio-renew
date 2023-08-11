import ProjectModel from "../model/ProjectModel";
import { MONTH, URL } from "../util/global";

const Mentees = new ProjectModel();
Mentees.title = "Mentees";
Mentees.desc = "멘티들이 모여 만드는 성장 커뮤니티";
Mentees.team = "개인";
Mentees.role = ["frontend"];
Mentees.mainSkills = ["spring boot"];
Mentees.skills = ["Scss", "JavaScript", "MyBatis"];
Mentees.start = new Date(2021, MONTH(9));
Mentees.end = new Date(2021, MONTH(9));
Mentees.inProgress = false;
Mentees.listOpen = true;
Mentees.list = [
  {
    header: "테이블 모든 속성 값 변경 자동화",
    body: ``,
  },
];
Mentees.links = [];
Mentees.github = "https://github.com/kkn1125/Mentees";
Mentees.name = "mentees";
Mentees.path = "/mentees";
Mentees.cover = "/mentees_main.png";

export default Mentees;
