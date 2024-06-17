export function timeAgo(date: Date): string {
  const now = new Date();
  const secondsPast = Math.floor((now.getTime() - date.getTime()) / 1000);

  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = 3600;
  const SECONDS_IN_DAY = 86400;
  const SECONDS_IN_MONTH = 2592000;
  const SECONDS_IN_YEAR = 31536000;

  if (secondsPast < SECONDS_IN_MINUTE) {
    return `${secondsPast}秒前`;
  }
  if (secondsPast < SECONDS_IN_HOUR) {
    const minutesPast = Math.floor(secondsPast / SECONDS_IN_MINUTE);
    return `${minutesPast}分前`;
  }
  if (secondsPast < SECONDS_IN_DAY) {
    const hoursPast = Math.floor(secondsPast / SECONDS_IN_HOUR);
    return `${hoursPast}時間前`;
  }
  if (secondsPast < SECONDS_IN_MONTH) {
    const daysPast = Math.floor(secondsPast / SECONDS_IN_DAY);
    return `${daysPast}日前`;
  }
  if (secondsPast < SECONDS_IN_YEAR) {
    const monthsPast = Math.floor(secondsPast / SECONDS_IN_MONTH);
    return `${monthsPast}ヶ月前`;
  }
  const yearsPast = Math.floor(secondsPast / SECONDS_IN_YEAR);
  return `${yearsPast}年前`;
}
