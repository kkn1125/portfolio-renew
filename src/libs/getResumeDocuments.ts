import Resume from "@models/Resume";

export function getResumeDocuments<T extends Resume>(resumeList: T[]) {
  return resumeList
    .map((resume) => {
      const title = resume.title;
      const contents = resume.contents.join("\n\n");
      return `# ${title}\n\n${contents}`;
    })
    .join("\n\n\n");
}
