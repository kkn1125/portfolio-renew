import { roleTranslate } from "@common/enums/role";
import translate from "@common/translate";
import { during } from "@libs/during";
import { ProjectModel } from "@models/ProjectModel";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProjectCard({
  project,
  page,
  returnTo = "/portfolio",
}: {
  project: ProjectModel;
  page: number;
  returnTo?: string;
}) {
  return (
    <article className="project-row">
      <div className="project-row-meta">
        <span>
          {project.isSideProject
            ? "개인·팀 프로젝트"
            : project.company.replace(/^㈜/, "")}
        </span>
        <span className="metadata">
          {during(project.start, project.end, "진행 중")}
        </span>
        <span>
          {project.roles.map((role) => roleTranslate[role]).join(" · ")}
        </span>
      </div>
      <div className="project-row-body">
        <Typography variant="h3" component="h2">
          <Link
            to={project.path}
            state={{ page, returnTo }}
            className="project-title-link"
          >
            {project.title}
            <ArrowForwardOutlinedIcon aria-hidden="true" />
          </Link>
        </Typography>
        <p>{project.description[0]}</p>
        {project.description[1] && (
          <p className="secondary-text">{project.description[1]}</p>
        )}
        {project.works[0] && (
          <p className="project-evidence">
            <span>주요 기여</span>
            {project.works[0].content}
          </p>
        )}
      </div>
      <ul className="project-row-skills" aria-label="사용 기술">
        {project.skills.slice(0, 5).map((skill) => (
          <li key={skill.name}>{translate[skill.name]}</li>
        ))}
        {project.skills.length > 5 && (
          <li className="secondary-text">외 {project.skills.length - 5}개</li>
        )}
      </ul>
    </article>
  );
}
