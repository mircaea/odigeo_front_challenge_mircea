const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];

export const dateFormatDayMonthYear = (date) => {
  if (!date || isNaN(date)) return " - ";
  const parsed = new Date(Number(date));
  const month = months[parsed.getMonth()].substring(0, 3);
  return `${parsed.getDate()} ${month} ${parsed.getFullYear()}`;
};

export const dbDateToString = (dbDate) => {
  let parsed = new Date();
  parsed.setYear(dbDate.year);
  parsed.setMonth(dbDate.month, dbDate.dayOfMonth);
  parsed.setHours(dbDate.hourOfDay);
  parsed.setMinutes(dbDate.minute);
  parsed.setSeconds(dbDate.second);

  return dateFormatDayMonthYear(parsed);
};

// arrivalDate: {
//   dayOfMonth: 6;
//   hourOfDay: 17;
//   minute: 21;
//   month: 11;
//   second: 40;
//   year: 2022;
// }

export const dbDateToDate = (dbDate) => {
  let parsed = new Date();
  parsed.setYear(dbDate.year);
  parsed.setMonth(dbDate.month, dbDate.dayOfMonth);
  parsed.setHours(dbDate.hourOfDay);
  parsed.setMinutes(dbDate.minute);
  parsed.setSeconds(dbDate.second);

  return parsed;
};

export const dbDateMatchesDate = (dbDate, date) => {
  // dbDate: arrivalDate_obj;
  // date: timestamp;
  if (!date || date === "undefined") return false;
  const dateParsed = new Date(date);
  const dateYear = dateParsed.getFullYear();
  const dateMonth = dateParsed.getMonth();
  const dateDate = dateParsed.getDate();

  if (
    dateYear !== dbDate.year ||
    dateMonth !== dbDate.month ||
    dateDate !== dbDate.dayOfMonth
  ) {
    return false;
  }

  return true;
};

export const getTimeDifference = (dateDeparture, dateArrival) => {
  // better difference calculator
  const diffHour = Math.abs(dateDeparture.hourOfDay - dateArrival.hourOfDay);
  const diffMinute = Math.abs(dateDeparture.minute - dateArrival.minute);

  return `${diffHour} h ${diffMinute} min`;
};
