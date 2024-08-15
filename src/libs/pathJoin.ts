export function pathJoin(...paths: string[]) {
  return (
    "/" +
    paths
      .reduce<string[]>((acc, path) => {
        const isFisrtSlash = path.startsWith("/");
        const convertPath = path
          .replace(/[/]+/g, "/")
          .slice(isFisrtSlash ? 1 : 0)
          .split("/");
        acc.push(...convertPath);
        return acc;
      }, [])
      .join("/")
  );
}
