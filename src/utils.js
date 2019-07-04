// ensure numbers are always two digits
const pad = num => {
  const str = num + "";
  return str.length === 2 ? str : "0" + str;
};

export const timeToString = time => {
  const minutes = pad(Math.floor(time / 60));
  const seconds = pad(time % 60);
  return `${minutes}:${seconds}`;
};