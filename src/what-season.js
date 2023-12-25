/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
const errUnexpected = "Unable to determine the time of year!";
const errInvalidDate = "Invalid date!";
function getSeason(date) {
  if (!date) {
    return errUnexpected;
  }
  if (!date.getMonth || typeof date.getMonth !== "function") {
    throw new Error(errInvalidDate);
  }

  let month;
  try {
    date.getTime(); // check if can get time
    month = date.getMonth();
  } catch (err) {
    throw new Error(errInvalidDate);
  }

  switch (month) {
    case 0:
    case 1:
    case 11:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "fall";
    default:
      return errUnexpected;
  }
}

module.exports = {
  getSeason,
};
