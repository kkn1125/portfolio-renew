import dayjs from "dayjs";

export const calcDiffDate = (end: Date | undefined | null, start: Date) =>
  dayjs(end).diff(dayjs(start), "month") + 1;
