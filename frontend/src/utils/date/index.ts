export function timeAgo(date: Date): string {
  const now = new Date();
  const secondsPast = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (secondsPast < 60) {
    return `${secondsPast}秒前`;
  }
  if (secondsPast < 3600) {
    const minutesPast = Math.floor(secondsPast / 60);
    return `${minutesPast}分前`;
  }
  if (secondsPast < 86400) {
    const hoursPast = Math.floor(secondsPast / 3600);
    return `${hoursPast}時間前`;
  }
  if (secondsPast < 2592000) {
    // 1ヶ月を30日とする
    const daysPast = Math.floor(secondsPast / 86400);
    return `${daysPast}日前`;
  }
  if (secondsPast < 31536000) {
    // 1年を365日とする
    const monthsPast = Math.floor(secondsPast / 2592000);
    return `${monthsPast}ヶ月前`;
  }
  const yearsPast = Math.floor(secondsPast / 31536000);
  return `${yearsPast}年前`;
}
