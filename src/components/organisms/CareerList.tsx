import { roleTranslate } from "@common/enums/role";
import { during } from "@libs/during";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Typography } from "@mui/material";
import { companies } from "@storage/companies";
import { Link } from "react-router-dom";

export default function CareerList() {
  return (
    <div className="career-list">
      {Object.values(companies).map((company) => (
        <article className="career-row" key={company.name}>
          <div className="career-meta">
            <Typography variant="h3" component="h3">
              {company.name.replace(/^㈜/, "")}
            </Typography>
            <p className="metadata">{during(company.start, company.end)}</p>
            <p className="career-role">
              {company.isIt
                ? `${company.team} · ${company.roles.map((role) => roleTranslate[role]).join(" · ")}`
                : "건축설계 · 이전 경력"}
            </p>
          </div>
          <div className="career-responsibility">
            <p>{company.description}</p>
            {company.projects.length > 0 && (
              <ul className="career-projects">
                {company.projects.map((project) => (
                  <li key={project.path}>
                    <Link to={project.path}>
                      <span>{project.title}</span>
                      <ArrowForwardOutlinedIcon aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {company.simpleProjects.length > 0 && (
              <details className="plain-details">
                <summary>이전 경력의 프로젝트 보기</summary>
                <ul>
                  {company.simpleProjects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
