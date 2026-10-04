import CaseExplorer from "@components/organisms/CaseExplorer";
import CareerList from "@components/organisms/CareerList";
import { getImageUrl } from "@libs/getResource";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { Button, Typography } from "@mui/material";
import { Information } from "@storage/introduce/information";
import { sideNarang } from "@storage/side-projects/side.narang";
import { sideNuvia } from "@storage/side-projects/side.nuvia";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="page-shell">
        <section className="home-opening">
          <div className="home-intro">
            <Typography component="h1" variant="h1" className="display-title">
              실시간 상태와
              <br />
              업무 데이터의 문제를
              <br />
              <span>해결합니다.</span>
            </Typography>
            <p className="intro-description">{Information.description[0]}</p>
            <div className="intro-actions">
              <Button
                component={Link}
                to="/portfolio?type=professional"
                variant="contained"
                endIcon={<ArrowForwardOutlinedIcon />}
              >
                프로젝트 살펴보기
              </Button>
              <Link className="text-link" to="/about">
                일하는 방식 <ArrowForwardOutlinedIcon />
              </Link>
            </div>
            <p className="intro-scope">
              NestJS · Spring Boot · 실시간 서버 · 서비스 운영
            </p>
          </div>
          <CaseExplorer />
        </section>
        <section id="career" className="page-section">
          <div className="section-intro">
            <Typography variant="h2" component="h2">
              구현에서 운영까지,
              <br />
              책임의 범위를 넓혀 왔습니다.
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
        <section className="page-section personal-section">
          <div className="section-intro">
            <Typography variant="h2" component="h2">
              직접 만들어 확인한 것들
            </Typography>
            <div>
              <p>
                서비스의 API부터 사용자 화면과 배포까지 연결한 개인·팀
                프로젝트입니다.
              </p>
              <Link to="/portfolio?type=personal" className="text-link">
                개인·팀 프로젝트 전체 보기 <ArrowForwardOutlinedIcon />
              </Link>
            </div>
          </div>
          <div className="personal-projects">
            {[sideNuvia, sideNarang].map((project) => (
              <article className="personal-project" key={project.path}>
                {project.cover && (
                  <Link
                    to={project.path}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="personal-cover"
                  >
                    <img
                      src={getImageUrl(project.cover)}
                      alt=""
                      loading="lazy"
                    />
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
        <section className="closing-section">
          <Typography variant="h2" component="h2">
            더 깊은 이야기는 여기에서.
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
    </>
  );
}
