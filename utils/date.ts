export function ISTDate(dateInput?: Date | string | number): Date {
  const baseDate = dateInput ? new Date(dateInput) : new Date();

  if (isNaN(baseDate.getTime())) {
    return baseDate;
  }

  const utcTime = baseDate.getTime();
  const istOffset = 330 * 60 * 1000;
  const istTime = utcTime + istOffset;

  return new Date(istTime);
}
