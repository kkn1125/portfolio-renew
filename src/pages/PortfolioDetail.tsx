import { roleTranslate } from "@common/enums/role";
import translate from "@common/translate";
import { IssueCard } from "@components/moleculars/IssueCard";
import ProjectMedia from "@components/organisms/ProjectMedia";
import { during } from "@libs/during";
import { pathJoin } from "@libs/pathJoin";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import {
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { projects } from "@storage/projects";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Notfound from "./Notfound";

function SubWorks({ works }: { works: Work[] }) {
  return (
    <ul>
      {works.map((work) => (
        <li key={work.content}>
          {work.content}
          {work.subWorks.length > 0 && <SubWorks works={work.subWorks} />}
        </li>
      ))}
    </ul>
  );
}

function ProjectMetadata({
  project,
  wide,
}: {
  project: ProjectModel;
  wide: boolean;
}) {
  const content = (
    <dl className="detail-metadata">
      <div>
        <dt>소속</dt>
        <dd>{project.company}</dd>
      </div>
      <div>
        <dt>팀</dt>
        <dd>{project.team}</dd>
      </div>
      <div>
        <dt>역할</dt>
        <dd>{project.roles.map((role) => roleTranslate[role]).join(" · ")}</dd>
      </div>
      <div>
        <dt>사용 기술</dt>
        <dd>
          <ul className="detail-skills">
            {project.skills.map((skill) => (
              <li key={skill.name}>{translate[skill.name]}</li>
            ))}
          </ul>
        </dd>
      </div>
    </dl>
  );
  return wide ? (
    content
  ) : (
    <details className="plain-details project-meta-collapse">
      <summary>사용 기술·팀 정보</summary>
      {content}
    </details>
  );
}

function ProjectContent({ project }: { project: ProjectModel }) {
  const location = useLocation();
  const theme = useTheme();
  const wide = useMediaQuery(theme.breakpoints.up("md"));
  const [visible, setVisible] = useState<string[]>([]);
  const returnTo =
    typeof location.state?.returnTo === "string" &&
    location.state.returnTo.startsWith("/portfolio")
      ? location.state.returnTo
      : `/portfolio${location.state?.page > 1 ? `?page=${location.state.page}` : ""}`;
  const sections = [
    { id: "contributions", name: "주요 기여" },
    ...(project.issues?.length
      ? [{ id: "problem-solving", name: "문제 해결" }]
      : []),
    ...(project.images?.length || project.cover
      ? [{ id: "project-media", name: "구현 화면" }]
      : []),
    ...(project.relations?.length
      ? [{ id: "related-projects", name: "관련 프로젝트" }]
      : []),
  ];
  const images = project.images?.length
    ? project.images
    : project.cover
      ? [{ src: project.cover, alt: project.title + " 구현 화면" }]
      : [];
  return (
    <article className="page-shell detail-page">
      <Link to={returnTo} className="text-link back-link">
        <ArrowBackOutlinedIcon />
        프로젝트 색인
      </Link>
      <header className="detail-heading">
        <Typography variant="h1" component="h1">
          {project.title}
        </Typography>
        <div className="detail-byline">
          <span>{project.company}</span>
          <span>
            {project.roles.map((role) => roleTranslate[role]).join(" · ")}
          </span>
          <span className="metadata">
            {during(project.start, project.end, "진행 중")}
          </span>
        </div>
        <div className="detail-description">
          {project.description.map((description) => (
            <p key={description}>{description}</p>
          ))}
        </div>
      </header>
      <div className="detail-grid">
        <aside className="detail-rail" aria-label="프로젝트 정보와 목차">
          <nav aria-label="프로젝트 목차">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.name}
                <ArrowForwardOutlinedIcon aria-hidden="true" />
              </a>
            ))}
          </nav>
          <ProjectMetadata project={project} wide={wide} />
          {(project.github || project.demoSites?.length) && (
            <div className="detail-external-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ArrowOutwardOutlinedIcon />
                </a>
              )}
              {project.demoSites?.map((demo, index) => (
                <a
                  key={demo}
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  서비스 보기
                  {project.demoSites!.length > 1 ? ` ${index + 1}` : ""}
                  <ArrowOutwardOutlinedIcon />
                </a>
              ))}
            </div>
          )}
          {project.testAccount?.length ? (
            <details className="plain-details test-accounts">
              <summary>테스트 계정 보기</summary>
              {project.testAccount.map((account) => (
                <div key={account.id}>
                  <p>ID: {account.id}</p>
                  <div className="password-row">
                    <span>
                      PW:{" "}
                      {visible.includes(account.id)
                        ? account.password
                        : "••••••••"}
                    </span>
                    <IconButton
                      aria-label={
                        visible.includes(account.id)
                          ? "비밀번호 숨기기"
                          : "비밀번호 보기"
                      }
                      onClick={() =>
                        setVisible((current) =>
                          current.includes(account.id)
                            ? current.filter((id) => id !== account.id)
                            : [...current, account.id],
                        )
                      }
                    >
                      {visible.includes(account.id) ? (
                        <VisibilityOffOutlinedIcon fontSize="small" />
                      ) : (
                        <VisibilityOutlinedIcon fontSize="small" />
                      )}
                    </IconButton>
                  </div>
                </div>
              ))}
            </details>
          ) : null}
        </aside>
        <div className="detail-body">
          <section id="contributions" className="detail-section">
            <Typography variant="h2" component="h2">
              주요 기여
            </Typography>
            <div className="contributions">
              {project.works.map((work) => (
                <div className="contribution" key={work.content}>
                  <Typography variant="h3" component="h3">
                    {work.content}
                  </Typography>
                  {work.subWorks.length > 0 && (
                    <SubWorks works={work.subWorks} />
                  )}
                </div>
              ))}
            </div>
          </section>
          {!!project.issues?.length && (
            <section id="problem-solving" className="detail-section">
              <Typography variant="h2" component="h2">
                문제 해결
              </Typography>
              <div>
                {project.issues.map((issue, index) => (
                  <IssueCard
                    key={issue.problem}
                    issue={issue}
                    expanded={index === 0}
                  />
                ))}
              </div>
            </section>
          )}
          {images.length > 0 && (
            <section id="project-media" className="detail-section">
              <Typography variant="h2" component="h2">
                구현 화면
              </Typography>
              <div className="project-media-list">
                {images.map((media) => (
                  <ProjectMedia media={media} key={media.src} />
                ))}
              </div>
            </section>
          )}
          {!!project.relations?.length && (
            <section id="related-projects" className="detail-section">
              <Typography variant="h2" component="h2">
                관련 프로젝트
              </Typography>
              <ul className="related-projects">
                {project.relations.map((related) => (
                  <li key={related.path}>
                    <Link
                      className="text-link"
                      to={related.path}
                      state={{ returnTo }}
                    >
                      {related.title}
                      <ArrowForwardOutlinedIcon />
                    </Link>
                    <p>{related.description[0]}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <div className="detail-ending">
            <Button
              component={Link}
              to={returnTo}
              variant="outlined"
              startIcon={<ArrowBackOutlinedIcon />}
            >
              프로젝트 색인으로 돌아가기
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioDetail() {
  const { company, project } = useParams();
  const model = projects.find(
    (entry) =>
      entry.path === pathJoin("portfolio", company || "", project || ""),
  );
  return model ? (
    <ProjectContent key={model.path} project={model} />
  ) : (
    <Notfound />
  );
}
