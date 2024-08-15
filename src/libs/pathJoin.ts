export function pathJoin(...paths: string[]) {
  return (
    "/" +
    paths
      .flatMap((path) => path.split("/").filter((path) => path.trim()))
      .join("/")
  );
}
