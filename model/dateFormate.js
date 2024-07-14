// 格式化时间
export const dateFormate = (dateStr) => {
  const date = new Date(dateStr);

  const y = date.getFullYear();
  const m = padZero(date.getMonth() + 1);
  const d = padZero(date.getDay());

  const hh = padZero(date.getHours());
  const mm = padZero(date.getMinutes());
  const ss = padZero(date.getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;

}

function padZero(n) {
  return n > 9 ? n : '0' + n;
}