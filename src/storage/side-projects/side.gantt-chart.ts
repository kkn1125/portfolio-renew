import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getExternalImage, getImage, getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const sideGanttChart = new ProjectModel({
  cover: getResource("gantt-chart", "gantt01.png"),
  github: "https://github.com/kkn1125/gantt-chart",
  demoSites: [
    "https://kkn1125.github.io/gantt-chart",
    "https://kkn1125.github.io/ganttChart",
  ],
  relations: null,
  path: "/side/gantt-chart",
  title: "Gantt Chart",
  description: [
    "블로그용 표를 시각적으로 편집하고 HTML로 내보내는 웹 도구",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Frontend],
  skills: [Skill("typescript")],
  start: new Date(2022, 1),
  end: new Date(2022, 1),
  works: [
    new Work(
      "셀 편집과 시트 저장",
      "드래그 선택·행열 추가·병합·분할·스타일 변경을 구현하고 시트 데이터를 직렬화해 저장",
    ),
    new Work(
      "간트 차트와 HTML 내보내기",
      "시트 단위 일정 표시 설정과 작성된 표의 HTML 내보내기를 구현",
    ),
  ],
  isSideProject: true,
  issues: null,
  images: [
    getExternalImage(
      "https://github.com/user-attachments/assets/03346d82-ff56-4c10-91f7-18e71177a5f1",
      "시트 수정"
    ),
    getExternalImage(
      "https://github.com/user-attachments/assets/0d1b7194-e1a8-422f-9b68-b24a4724bc5a",
      "시트 수정"
    ),
    getExternalImage(
      "https://github.com/user-attachments/assets/ef44e9d9-bd15-4035-9bca-aa11026ac5fd",
      "셀 테두리"
    ),
    getExternalImage(
      "https://github.com/user-attachments/assets/202db183-da2c-4c73-99c6-97a40e33ac99",
      "셀 합치기"
    ),
    getExternalImage(
      "https://github.com/user-attachments/assets/202db183-da2c-4c73-99c6-97a40e33ac99",
      "셀 합치기"
    ),
    getExternalImage(
      "https://github.com/user-attachments/assets/8910ea1f-e02a-43b1-939b-a2d5f74813d9",
      "작성 예시"
    ),
    getExternalImage(
      "https://github.com/user-attachments/assets/639e6d8a-aceb-4ab8-b39c-0f28fd92af31",
      "간트차트 예시"
    ),
    getImage("gantt-chart", "gantt01.png", "예시"),
    getImage("gantt-chart", "gantt05.png", "드래그"),
    getImage("gantt-chart", "gantt06.png", "편집 모드"),
  ],
});
