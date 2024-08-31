import { format } from "./format";

export const during = (
  start: string | number | Date,
  end?: string | number | Date | null,
  noEnd: string = "재직 중"
) =>
  format(start, "YYYY. MM.") + " ~ " + (end ? format(end, "YYYY. MM.") : noEnd);
