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

const beep = ({
  duration = 500,
  frequency = 540,
  volume = 0.3,
  type = 'triangle',
} = {}) => {
  return new Promise((done) => {
    const context = new AudioContext();
    const o = context.createOscillator();
    const g = context.createGain();

    o.connect(g);
    g.connect(context.destination);

    g.gain.value = volume;
    o.frequency.value = frequency;
    o.type = type;
    o.onended = done;

    o.start();
    setTimeout(() => o.stop(), duration);
  });
};

const pause = (duration = 500) => new Promise((done) => {
  setTimeout(done, duration);
});

// NOTE: this sounds like garbage...find something better
export const playDoneSound = async () => {
  const options = {
    duration: 50,
    frequency: 850
  };
  await pause(50);
  await beep(options);
  await pause(50);
  await beep(options);
  await pause(50);
  await beep(options);
  await pause(50);
  await beep(options);
  await pause(50);
  await beep(options);
  await pause(50);
  await beep(options);
}