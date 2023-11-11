import ProjectModel from "../model/ProjectModel";
import { MONTH, FORM_URL, FORM_IMAGE } from "../util/global";

const U = `<span class="tag tag-info">U</span>`;
const A = `<span class="tag tag-success">A</span>`;

const ProjectNarang = new ProjectModel();

ProjectNarang.important = true;
ProjectNarang.title = "ProjectNarang";
ProjectNarang.desc = "감정 케어 웹 서비스";
ProjectNarang.team = "2인 팀";
ProjectNarang.role = ["frontend"];
ProjectNarang.mainSkills = ["Spring Boot", "TypeScript", "React"];
ProjectNarang.skills = ["MyBatis"];
ProjectNarang.start = new Date(2022, MONTH(7));
ProjectNarang.end = new Date(2022, MONTH(9));
ProjectNarang.inProgress = false;
ProjectNarang.listOpen = true;
ProjectNarang.list = [
  {
    header: "face-api를 이용한 유저 안면 인식 로그인",
    body: ``,
  },
  {
    header: "일기 내용 감정 분석",
    body: ``,
  },
  {
    header: "텍스트 한@:->영 번역 Naver Papago api",
    body: ``,
  },
  {
    header: "텍스트 감정 분석 sentiment.js",
    body: ``,
  },
  {
    header: "chart.js를 이용하여 주 단위 감정 데이터를 그래프로 출력",
    body: ``,
  },
];
ProjectNarang.links = [];
ProjectNarang.github = "https://github.com/kkn1125/narang";
ProjectNarang.name = "projectnarang";
ProjectNarang.path = "/projectnarang";
ProjectNarang.cover =
  "https://user-images.githubusercontent.com/71887242/188372976-f2f77d3a-2d17-4bea-8be7-e787b7edb30c.png";
ProjectNarang.images = [
  FORM_IMAGE(
    "메인",
    "https://user-images.githubusercontent.com/71887242/184072130-d42ce18f-7b50-4403-a24e-1a5cadd95304.png"
  ),
  FORM_IMAGE(
    "로그인",
    "https://user-images.githubusercontent.com/71887242/184072756-eafab7f0-bf0a-40d7-95bb-97ff2a0f1dce.png"
  ),
  FORM_IMAGE(
    "상세글 & 댓글",
    "https://user-images.githubusercontent.com/71887242/184073423-4dd4ae52-6cb0-4c4b-b72f-a344226fd7e0.png"
  ),
  FORM_IMAGE(
    "회원정보",
    "https://user-images.githubusercontent.com/71887242/184073781-8e7ad143-59a8-4edd-8942-1714e4b4071b.png"
  ),
  FORM_IMAGE(
    "Mock Image",
    "https://user-images.githubusercontent.com/71887242/187711500-a3a0262a-834c-4cdf-b6f9-f7c4cc6057b8.png"
  ),
];
ProjectNarang.movie =
  "https://user-images.githubusercontent.com/71887242/187068070-8f8233ca-15d9-4e28-a62f-65799c1b1d0e.mp4";
ProjectNarang.content = `<div>
        <div class="divider-2"></div>
        <div class="text-title-2">dependencies</div>
        <ol>
            <li>MongoDB</li>
            <li>Lombok</li>
            <li>Spring boot starter</li>
            <li>Spring security</li>
            <li>Json Web Token</li>
            <li>Jackson data-bind</li>
        </ol>

        <div class="divider-2"></div>
        <div class="text-title-2">lib, api</div>
        <ol>
            <li>Suneditor.js</li>
            <li>face-api.js</li>
            <li>Naver papago api</li>
            <li>Axios</li>
            <li>Formik</li>
            <li>Material-UI</li>
            <li>Emotion</li>
            <li>AOS</li>
            <li>Chart.js</li>
            <li>htmle-react-parser</li>
            <li>jose</li>
            <li>Sentiment.js</li>
            <li>Yup</li>
            <li>js-sha</li>
            <li>prettier</li>
            <li>babel</li>
            <li>typscript</li>
        </ol>

        <div class="divider-2"></div>
        <div class="text-title-2">구분</div>
            ${U} 회원 전용
            ${A} 공용
            <ol>
                <li>메인페이지</li>
                <li>일기</li>
                <ol>
                    <li>CRUD ${A}</li>
                </ol>
                <li>댓글</li>
                <ol>
                    <li>CRUD ${U}</li>
                </ol>
                <li>좋아요</li>
                <ol>
                    <li>CRUD ${U}</li>
                </ol>
                <li>회원정보페이지</li>
                <ol>
                    <li>CRUD ${U}</li>
                </ol>
                <li>회원로그인, 가입</li>
                <ol>
                    <li>CRUD ${U}</li>
                </ol>
                <li>감정 그래프 조회 ${U}</li>
                <li>About 페이지 ${A}</li>
            </ol>
        </div>

        <div class="divider-2"></div>
        <div class="text-title-2">ERD</div>
        <div>
          <img src="https://user-images.githubusercontent.com/71887242/186116219-1740e0eb-f0cd-47a4-805d-44d7d258e721.png" alt="erd" style="width: 100%;" />
          <a href="https://nova-darkness-84c.notion.site/DB-3b192585505d4940bcb214fda45ce07e" title="DB 명세서 바로가기">DB 명세서</a>
        </div>

        <div class="divider-2"></div>
        <div class="text-title-2">API</div>
        <div>
          <img src="https://user-images.githubusercontent.com/71887242/186116219-1740e0eb-f0cd-47a4-805d-44d7d258e721.png" alt="erd" style="width: 100%;" />
          <a href="https://nova-darkness-84c.notion.site/DB-3b192585505d4940bcb214fda45ce07e" title="DB 명세서 바로가기">DB 명세서</a>
        </div>

        <div class="divider-2"></div>
        <div class="text-title-2">LOGO</div>

        <div class="text-title-1">Cover Image</div>
        <div align="center">
          <img src="https://user-images.githubusercontent.com/71887242/187703475-d9c52cbd-747b-40d9-a730-a15adef3eafc.png" alt="main" />
        </div>

        <div class="divider-2"></div>
        <div class="text-title-1">favicon</div>
        <div >
          <img src="https://user-images.githubusercontent.com/71887242/187655635-1305cec5-bdeb-432a-a640-e78ff717cbb4.png" alt="main" />
        </div>

        <div class="divider-2"></div>
        <div class="text-title-1">Full name logo</div>
        <div style="background-color: #00000015; border-radius: 5px; margin-top: 20px; margin-bottom: 20px; padding: 1rem;">
          <img src="https://user-images.githubusercontent.com/71887242/187655823-35144d2f-aa9a-4d54-8911-35d740415478.png" alt="main" />
        </div>


        <div class="divider-2"></div>
        <div class="text-title-1">Short name logo (color)</div>
        <div style="background-color: #00000015; border-radius: 5px; margin-top: 20px; margin-bottom: 20px; padding: 1rem;">
          <img src="https://user-images.githubusercontent.com/71887242/187655882-5a5df268-3d4f-4f21-ad8d-6a455c130774.png" alt="main" />
        </div>

        <div class="divider-2"></div>
        <div class="text-title-1">Short name logo (grayscale)</div>
        <div style="background-color: #00000015; border-radius: 5px; margin-top: 20px; margin-bottom: 20px; padding: 1rem;">
          <img src="https://user-images.githubusercontent.com/71887242/187656021-998215e6-d0e6-4b78-86d2-b0dcd2637fa6.png" alt="main" />
        </div>

        <!-- <div class="text-title-1">Database 명세서</div>

        <div class="text-title-1">User</div>
        ${/* dbUser */ ""}
        ... 작성 중 
        -->
    </div>`;

export default ProjectNarang;
