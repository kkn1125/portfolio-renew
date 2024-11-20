export default class Resume {
  title: string;
  contents: string[] = [];

  constructor(title: string, contents: string[]) {
    this.title = title;
    this.contents = contents;
  }

  setTitle(title: string) {
    this.title = title;
  }

  addContent(content: string) {
    this.contents.push(content);
  }
}
