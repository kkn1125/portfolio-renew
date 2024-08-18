export class Issue {
  problem: string;
  processes: string[];
  solves: string[];
  constructor({ problem, processes, solves }: Issue) {
    this.problem = problem;
    this.processes = processes;
    this.solves = solves;
  }
}
