export const format = (
  value: number | string | Date,
  form: string = "YYYY-MM-dd HH:mm:ss"
) => {
  return form.replace(/YYYY|MM|dd|HH|mm|ss|SSS|AP|YY|M|d|H|m|s|S/g, ($1) => {
    const base = new Date(value);
    const year = base.getFullYear();
    const month = base.getMonth() + 1;
    const date = base.getDate();
    const hour = base.getHours();
    const minute = base.getMinutes();
    const second = base.getSeconds();
    const millisecond = base.getMilliseconds();

    switch ($1) {
      case "YYYY":
        return year.toString().padStart(4, "0");
      case "YY":
        return year.toString().slice(2);
      case "MM":
        return month.toString().padStart(2, "0");
      case "M":
        return month.toString();
      case "dd":
        return date.toString().padStart(2, "0");
      case "d":
        return date.toString();
      case "HH":
        return hour.toString().padStart(2, "0");
      case "H":
        return hour.toString();
      case "mm":
        return minute.toString().padStart(2, "0");
      case "m":
        return minute.toString();
      case "ss":
        return second.toString().padStart(2, "0");
      case "s":
        return second.toString();
      case "SSS":
        return millisecond.toString().padStart(3, "0");
      case "S":
        return millisecond.toString();
      case "AP":
        return hour >= 12 ? "PM" : "AM";
      default:
        return $1;
    }
  });
};
