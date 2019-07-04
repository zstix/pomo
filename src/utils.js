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

export const notify = message => {
  if (!("Notification" in window)) {
    console.log('This browser does not support dekstop notifications');
  }

  else if (Notification.permission === 'granted') {
    new Notification(message);
  }

  else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification(message);
      }
    })
  }
};