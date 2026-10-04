import ProjectCard from "@components/atoms/ProjectCard";
import translate from "@common/translate";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Button,
  InputAdornment,
  Pagination,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { projects } from "@storage/projects";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const perPage = 8;
const companies = [
  ...new Set(
    projects
      .filter((project) => !project.isSideProject)
      .map((project) => project.company),
  ),
];

export default function Portfolio() {
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const kind = ["professional", "personal"].includes(params.get("type") || "")
    ? params.get("type")!
    : "all";
  const company = params.get("company") || "";
  const [search, setSearch] = useState({ url: query, value: query });
  const [composing, setComposing] = useState(false);
  if (search.url !== query) setSearch({ url: query, value: query });
  const draft = search.value;
  function setDraft(value: string) {
    setSearch({ url: query, value });
  }

  useEffect(() => {
    if (composing || draft.trim() === query) return;
    const timer = window.setTimeout(() => {
      const next = new URLSearchParams(params);
      draft.trim() ? next.set("q", draft.trim()) : next.delete("q");
      next.delete("page");
      setParams(next, { replace: true });
    }, 300);
    return () => window.clearTimeout(timer);
  }, [draft, query, composing, params, setParams]);

  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    if (key !== "page") next.delete("page");
    if (key === "type") next.delete("company");
    setParams(next, { replace: true });
  }
  const filtered = projects.filter((project) => {
    if (kind === "professional" && project.isSideProject) return false;
    if (kind === "personal" && !project.isSideProject) return false;
    if (company && project.company !== company) return false;
    return [
      project.title,
      project.company,
      ...project.description,
      ...project.works.map((work) => work.content),
      ...project.skills.map((skill) => translate[skill.name]),
    ]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase());
  });
  const pages = Math.ceil(filtered.length / perPage);
  const requested = Number(
    params.get("page") || (params.size === 0 ? location.state?.page : 1) || 1,
  );
  const page = Number.isFinite(requested)
    ? Math.min(Math.max(Math.floor(requested), 1), Math.max(pages, 1))
    : 1;

  return (
    <div className="page-shell archive-page">
      <div className="page-heading">
        <Typography variant="h1" component="h1">
          프로젝트 색인
        </Typography>
        <p>
          실시간 서버, 업무 데이터, 운영 환경에서 해결한 문제들을 모았습니다.
        </p>
      </div>
      <div className="archive-controls">
        <Tabs
          value={kind}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          onChange={(_, value: string) =>
            update("type", value === "all" ? "" : value)
          }
          aria-label="프로젝트 분류"
        >
          <Tab value="all" label={`전체 ${projects.length}`} />
          <Tab
            value="professional"
            label={`실무 ${projects.filter((project) => !project.isSideProject).length}`}
          />
          <Tab
            value="personal"
            label={`개인·팀 ${projects.filter((project) => project.isSideProject).length}`}
          />
        </Tabs>
        <form
          className="archive-search"
          role="search"
          onSubmit={(event) => {
            event.preventDefault();
            if (!composing) update("q", draft.trim());
          }}
        >
          <TextField
            label="프로젝트 검색"
            size="small"
            value={draft}
            onKeyDown={(event) => {
              if (
                event.key === "Enter" &&
                (event.nativeEvent.isComposing || event.keyCode === 229)
              )
                event.preventDefault();
            }}
            onChange={(event) => setDraft(event.target.value)}
            onCompositionStart={() => setComposing(true)}
            onCompositionEnd={(event) => {
              setComposing(false);
              setDraft(
                event.currentTarget.querySelector("input")?.value || draft,
              );
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button type="submit" variant="outlined">
            검색
          </Button>
        </form>
      </div>
      <div className="archive-status">
        <p role="status" aria-live="polite">
          {filtered.length}개 프로젝트
          <span className="secondary-text">
            {" "}
            · {page} / {Math.max(pages, 1)} 페이지
          </span>
        </p>
        {kind !== "personal" && (
          <label className="company-filter">
            소속
            <select
              aria-label="회사별 프로젝트"
              value={company}
              onChange={(event) => update("company", event.target.value)}
            >
              <option value="">모든 회사</option>
              {companies.map((name) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
      {filtered.length ? (
        <div className="project-index">
          {filtered
            .slice((page - 1) * perPage, page * perPage)
            .map((project) => (
              <ProjectCard
                key={project.path}
                project={project}
                page={page}
                returnTo={location.pathname + location.search}
              />
            ))}
        </div>
      ) : (
        <div className="empty-state">
          <Typography variant="h2" component="h2">
            일치하는 프로젝트가 없습니다.
          </Typography>
          <p>다른 프로젝트 이름이나 기술로 검색해 보세요.</p>
          <Button
            onClick={() => {
              setDraft("");
              setParams({}, { replace: true });
            }}
            variant="outlined"
          >
            검색 조건 초기화
          </Button>
        </div>
      )}
      {pages > 1 && (
        <nav className="archive-pagination" aria-label="프로젝트 페이지">
          <Pagination
            page={page}
            count={pages}
            onChange={(_, value) => {
              update("page", String(value));
              document.getElementById("main-content")?.scrollIntoView();
            }}
            color="primary"
          />
        </nav>
      )}
    </div>
  );
}
