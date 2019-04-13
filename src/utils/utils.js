export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function timestampToDate(ts) {
  const date = new Date(ts);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;

  return `${month}/${day}/${year} ${hours}:${minutes}`;

}