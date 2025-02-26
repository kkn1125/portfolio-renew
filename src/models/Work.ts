export default class Work {
  content: string;
  subWorks: Work[] = [];

  constructor(work: string, ...subWorks: string[]) {
    this.content = work;
    subWorks.length > 0 &&
      this.subWorks.push(...subWorks.map((sub) => new Work(sub)));
  }

  get hasSubWorks() {
    return this.subWorks.length > 0;
  }

  addWork(subWork: string) {
    this.subWorks.push(new Work(subWork));
  }
}
