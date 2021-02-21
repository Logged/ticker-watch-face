export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function isMarketOpen() {
  let today = new Date();
  let hours = today.getHours();
  let days = today.getDay();
  return (days != 0) && (days != 6) && (hours > 6) && (hours < 20);
}