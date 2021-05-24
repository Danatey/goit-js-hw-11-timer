const refs = {
  days: document.querySelector('[data-value=days]'),
  hours: document.querySelector('[data-value=hours]'),
  mins: document.querySelector('[data-value=mins]'),
  secs: document.querySelector('[data-value=secs]'),
};

class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;

    this.countDown();
  }

  countDown() {
    setInterval(() => {
      const curentTime = new Date();
      const timerTime = this.targetDate - curentTime;
      const time = this.getTimeComponents(timerTime);
      this.onTick(time);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.makeString(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.makeString(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.makeString(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.makeString(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  makeString(value) {
    return String(value).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2022, 0, 1, 0, 0, 0),
  onTick: updateTimer,
});

function updateTimer({ days, hours, mins, secs }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}