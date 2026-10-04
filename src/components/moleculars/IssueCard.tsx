import { Issue } from "@models/Issue";

export const IssueCard = ({
  issue,
  expanded = false,
}: {
  issue: Issue;
  expanded?: boolean;
}) => (
  <details className="issue-detail" open={expanded}>
    <summary>
      {issue.problem}
      <span className="disclosure-label" aria-hidden="true">
        해결 과정
      </span>
    </summary>
    <div className="issue-reading">
      <div>
        <h3>확인과 구현</h3>
        <ul>
          {issue.processes.map((process) => (
            <li key={process}>{process}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>결과</h3>
        <ul>
          {issue.solves.map((solve) => (
            <li key={solve}>{solve}</li>
          ))}
        </ul>
      </div>
    </div>
  </details>
);
