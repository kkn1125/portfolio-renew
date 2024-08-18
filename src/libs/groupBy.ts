export function groupBy<T>(array: T[], count: number) {
  const copyArray = [...array];
  const group: (T | null)[][] = [];
  while (copyArray.length > 0) {
    group.push(copyArray.splice(0, count));
  }
  const lastOne = group[group.length - 1];
  if (lastOne.length < count) {
    lastOne.push(...Array.from(Array(count - lastOne.length), () => null));
  }
  return group;
}
