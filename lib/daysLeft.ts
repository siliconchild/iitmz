export default function daysLeft(dateString: string) {
  const regex =
    /\{\{DAYS_LEFT,(20\d{2}|21\d{2}|22\d{2}|23\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\}\}/;

  const match = dateString.match(regex);

  if (match && match[1]) {
    const year = parseInt(match[1]);
    const month = parseInt(match[2]) - 1;
    const day = parseInt(match[3]);

    const targetDate = new Date(year, month, day);
    const timeDifference = targetDate.getTime() - Date.now();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const isFutureDate = timeDifference > 0;

    // Throw Error if date has Passed
    if (!isFutureDate) throw Error("Date in the past");

    // Prepare the result in words
    let result = "";
    if (daysLeft === 0) {
      result = "today";
    } else if (daysLeft === 1 && isFutureDate) {
      result = "tomorrow";
    } else if (daysLeft > 0 && daysLeft <= 7) {
      result = `in ${daysLeft} days`;
    } else if (day > 7) {
      result = `on ${day}-${targetDate.toLocaleString('default', { month: 'short' }).slice(0, 3)}-${year}`
    }
    return result;
  }
}
