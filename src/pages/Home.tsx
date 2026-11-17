import CareerList from "@components/organisms/CareerList";
import { getImageUrl } from "@libs/getResource";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { Typography } from "@mui/material";
import { Information } from "@storage/introduce/information";
import { sideGameRpg } from "@storage/side-projects/side.game-rpg";
import { sideNuvia } from "@storage/side-projects/side.nuvia";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-shell">
      <section className="home-opening">
        <p className="eyebrow">김경남 · Backend engineer</p>
        <Typography component="h1" variant="h1" className="display-title">
          실시간 서버부터
          <br />
          서비스 운영까지.
        </Typography>
        <div className="intro-bottom">
          <p className="intro-scope">
            NestJS · Spring Boot
            <br />
            실시간 서버 · API · 서비스 운영
          </p>
          <div>
            <p className="intro-description">{Information.description[0]}</p>
            <div className="intro-actions">
              <Link
                to="/portfolio?type=professional"
                className="text-link primary-link"
              >
                프로젝트 살펴보기 <ArrowForwardOutlinedIcon />
              </Link>
              <Link className="text-link" to="/about">
                일하는 방식 <ArrowForwardOutlinedIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section personal-section">
        <div className="section-intro">
          <Typography variant="h2" component="h2">
            직접 만든 프로젝트
          </Typography>
          <div>
            <p>서비스의 API부터 사용자 화면과 배포까지 직접 연결했습니다.</p>
            <Link to="/portfolio?type=personal" className="text-link">
              개인·팀 프로젝트 전체 보기 <ArrowForwardOutlinedIcon />
            </Link>
          </div>
        </div>
        <div className="personal-projects">
          {[sideNuvia, sideGameRpg].map((project) => (
            <article className="personal-project" key={project.path}>
              {project.cover && (
                <Link
                  to={project.path}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="personal-cover"
                >
                  <img src={getImageUrl(project.cover)} alt="" loading="lazy" />
                </Link>
              )}
              <div className="personal-copy">
                <Typography variant="h3" component="h3">
                  <Link to={project.path}>
                    {project.title}
                    <ArrowForwardOutlinedIcon aria-hidden="true" />
                  </Link>
                </Typography>
                <p>{project.description[0]}</p>
                <p className="secondary-text">{project.description[1]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="career" className="page-section">
        <div className="section-intro">
          <Typography variant="h2" component="h2">
            개발과 운영의 경험
          </Typography>
          <div>
            <p>{Information.description[1]}</p>
            <Link to="/portfolio?type=professional" className="text-link">
              실무 프로젝트 전체 보기 <ArrowForwardOutlinedIcon />
            </Link>
          </div>
        </div>
        <CareerList />
      </section>
      <section className="closing-section">
        <Typography variant="h2" component="h2">
          더 알아보기
        </Typography>
        <div>
          <Link to="/about" className="text-link">
            일하는 방식과 기술 경험 <ArrowForwardOutlinedIcon />
          </Link>
          <a
            href={Information.github}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowOutwardOutlinedIcon />
          </a>
          <a
            href={Information.blog}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog <ArrowOutwardOutlinedIcon />
          </a>
        </div>
      </section>
    </div>
  );
}
