import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Button, Tab, Tabs, Typography } from "@mui/material";
import { fovKalis } from "@storage/projects/fov/fov.kalis";
import { hitWeddingPro } from "@storage/projects/hit/hit.wedding.pro";
import { onflouCardtalkOps } from "@storage/projects/onflou/onflou.cardtalk.ops";
import { useState } from "react";
import { Link } from "react-router-dom";

const cases = [
  {
    key: "state",
    label: "상태 수명",
    project: onflouCardtalkOps,
    title: "저장까지 살아 있어야 하는 상태",
    trace: ["게임 종료", "결과 저장", "상태 정리"],
    note: "결과 저장 전 만료되던 상태의 TTL과 종료 순서를 보완",
  },
  {
    key: "query",
    label: "SQL 조회",
    project: fovKalis,
    title: "기업 수만큼 반복되던 통계 조회",
    trace: ["1 + 5C회", "JOIN · 조건부 집계", "1회"],
    note: "기업 수 C 기준, 해당 코드 경로의 SQL 호출 구조",
  },
  {
    key: "rules",
    label: "계산 검증",
    project: hitWeddingPro,
    title: "재고 이력의 계산 기준을 검산",
    trace: [
      "실사 · 입출고 이력",
      "역산 · 반올림 보완",
      "경계 사례 Mock 테스트",
    ],
    note: "첫 실사, 수량 증가·감소·동일 수량 사례를 확인",
  },
];

export default function CaseExplorer() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="case-explorer" aria-label="대표 문제 해결 사례">
      <Tabs
        value={selected}
        onChange={(_, value: number) => setSelected(value)}
        aria-label="문제 해결 사례 선택"
        variant="fullWidth"
      >
        {cases.map((entry, index) => (
          <Tab
            key={entry.key}
            label={entry.label}
            id={`case-tab-${index}`}
            aria-controls={`case-panel-${index}`}
          />
        ))}
      </Tabs>
      {cases.map((item, index) => {
        const issue = item.project.issues![0];
        return (
          <div
            className="case-panel"
            hidden={selected !== index}
            role="tabpanel"
            id={`case-panel-${index}`}
            aria-labelledby={`case-tab-${index}`}
            key={item.key}
            tabIndex={0}
          >
            <Typography variant="h2" component="h2" className="case-title">
              {item.title}
            </Typography>
            <div className="case-context">
              <span>{item.project.company}</span>
              <span>{item.project.title}</span>
            </div>
            <ol
              className={`case-trace case-trace-${item.key}`}
              aria-label="변경한 처리 흐름"
            >
              {item.trace.map((step, index) => (
                <li key={step}>
                  <span>{step}</span>
                  {index < item.trace.length - 1 && (
                    <ArrowForwardOutlinedIcon aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
            <p className="case-note">{item.note}</p>
            <dl className="case-reading">
              <div>
                <dt>문제</dt>
                <dd>{issue.problem}</dd>
              </div>
              <div>
                <dt>구현</dt>
                <dd>{issue.processes.join(". ")}</dd>
              </div>
              <div>
                <dt>결과</dt>
                <dd>{issue.solves.join(". ")}</dd>
              </div>
            </dl>
            <Button
              component={Link}
              to={item.project.path}
              endIcon={<ArrowForwardOutlinedIcon />}
              className="case-link"
            >
              프로젝트와 해결 과정 읽기
            </Button>
          </div>
        );
      })}
    </section>
  );
}
