/** */
export function formatDate(dateString) {
  const monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const year = dateString.getFullYear();
  const month = monthName[dateString.getMonth()];
  const day = dateString.getDate();

  return `${month} ${day}, ${year}`;
}
