import translate from "@common/translate";
import { PROFILE_IMAGE } from "@common/variables";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { Typography } from "@mui/material";
import { Information } from "@storage/introduce/information";

export default function About() {
  return (
    <div className="page-shell about-page">
      <section className="about-opening">
        <div>
          <Typography variant="h1" component="h1">
            문제를 확인하고,
            <br />
            변경의 이유를 남깁니다.
          </Typography>
          <p className="about-identity">{Information.name} · 백엔드 개발자</p>
          <p>{Information.title}</p>
        </div>
        <div className="about-contact">
          <img
            className="profile-photo"
            src={PROFILE_IMAGE}
            alt="김경남 프로필"
            width="120"
            height="144"
          />
          <div>
            <a href={`mailto:${Information.email}`} className="text-link">
              {Information.email}
              <ArrowOutwardOutlinedIcon />
            </a>
            <a
              href={Information.github}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowOutwardOutlinedIcon />
            </a>
            <a
              href={Information.blog}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
              <ArrowOutwardOutlinedIcon />
            </a>
          </div>
        </div>
      </section>
      <section className="page-section about-approach">
        <Typography variant="h2" component="h2">
          일하는 방식
        </Typography>
        <div>
          {Information.resume.map((resume) => (
            <article className="approach-row" key={resume.title}>
              <Typography variant="h3" component="h3">
                {resume.title}
              </Typography>
              <div>
                {resume.contents.map((content) => (
                  <p key={content}>{content}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="page-section about-technologies">
        <div className="section-intro">
          <Typography variant="h2" component="h2">
            기술은 문제의 맥락에서.
          </Typography>
          <div>
            <p>
              Socket.IO·Redis로 실시간 상태를 다루고, NestJS·Spring Boot와 SQL로
              업무 규칙을 구현했습니다. Docker·Linux 환경에서 배포와 운영 문제에
              대응했습니다.
            </p>
          </div>
        </div>
        <ul className="competency-list">
          {Information.coreCompetencies.map((competency) => (
            <li key={competency}>{competency}</li>
          ))}
        </ul>
        <div className="technology-row">
          <h3>주요 기술</h3>
          <ul>
            {Information.skill.main.map((skill) => (
              <li key={skill.name}>{translate[skill.name]}</li>
            ))}
          </ul>
        </div>
        <div className="technology-row">
          <h3>함께 사용한 기술</h3>
          <ul>
            {Information.skill.sub.map((skill) => (
              <li key={skill.name}>{translate[skill.name]}</li>
            ))}
          </ul>
        </div>
        <details className="plain-details technology-details">
          <summary>그 밖의 기술 경험 보기</summary>
          <ul className="technology-inventory">
            {Information.stacks.map((skill) => (
              <li key={skill.name}>{translate[skill.name]}</li>
            ))}
          </ul>
        </details>
      </section>
    </div>
  );
}
