class Player {
  constructor({ audioContext, filterNode }) {
    this.audioCtx = audioContext;
    this.gainNode = this.audioCtx.createGain();
    this.timeOffset = 0.2;
    if(filterNode) {
      // run output through extra filter (already connected to audioContext)
      this.gainNode.connect(filterNode);
    } else {
      this.gainNode.connect(this.audioCtx.destination);
    }
    this.oscillator = null;
  }

  setFrequency({ freq, time }) {
    if (time) {
      this.oscillator.frequency.setValueAtTime(freq, this.audioCtx.currentTime + time);
    } else {
      this.oscillator.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
    }
    return this;
  }

  setVolume({ vol, time}) {
    if (time) {
      this.gainNode.gain.exponentialRampToValueAtTime(vol, this.audioCtx.currentTime + time);
    } else {
      this.gainNode.gain.setValueAtTime(vol, this.audioCtx.currentTime);
    }
    return this;
  }

  setWaveType({ type }) {
    this.oscillator.type = type;
    return this;
  }

  play({ freq, vol, type, time }) {
    this.oscillator = this.audioCtx.createOscillator();
    this.oscillator.connect(this.gainNode);

    this.setFrequency({ freq });
    if (type) this.setWaveType({ type });
    this.setVolume({ vol: vol / 10 });

    if (time) {
      this.setVolume({ vol, time: time - this.timeOffset });
      this.oscillator.start(time - this.timeOffset);
      this.setVolume({ vol: vol / 10, time });
    } else {
      this.oscillator.start();
      this.setVolume({ vol, time: this.timeOffset });
    }
    return this;
  }

  stop({ time }) {
    if (time) {
      this.gainNode.gain.setTargetAtTime(1/1000, this.audioCtx.currentTime + time - 0.05, this.timeOffset);
      this.oscillator.stop(this.audioCtx.currentTime + time);
    } else {
      this.gainNode.gain.setTargetAtTime(1/1000, this.audioCtx.currentTime, this.timeOffset);
      this.oscillator.stop(this.audioCtx.currentTime + 0.05);
    }
    return this;
  }
}

export const beep = () => {
  const ctx = window.AudioContext || window.webkitAudioContext;
  const audioContext = new ctx();
  const player = new Player({ audioContext });

  player
    .play({ freq: 440, vol: 0.8, type: 'square' })
    .setFrequency({ freq: 880, time: 0.1 })
    .stop({ time: 0.2 });
};