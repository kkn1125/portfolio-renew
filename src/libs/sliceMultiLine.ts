export function sliceMultiLine(
  lines: string[],
  maxLength: number = 20,
  delimiter: string = "\n"
) {
  const joined = lines.join(delimiter);
  if (joined.length <= maxLength) {
    return joined;
  }

  let curLength = 0;
  const resultLines: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const part = resultLines.length === 0 ? line : delimiter + line;
    if (curLength + part.length > maxLength) {
      // 잘려야 하는 지점
      const remain = maxLength - curLength;
      if (remain > 0) {
        // 현재 라인의 일부까지라도 보여준다
        if (resultLines.length === 0) {
          resultLines.push(line.slice(0, remain));
        } else {
          // delimiter 포함 + 자를 수 있는 만큼
          const prefix = delimiter.slice(0, Math.min(remain, delimiter.length));
          const sliceLength = remain - prefix.length;
          resultLines.push(prefix + line.slice(0, sliceLength));
        }
      }
      break;
    }
    resultLines.push(part);
    curLength += part.length;
  }
  return resultLines.join("") + "⋯";
}
