class Time {
  constructor(hour, min, sec) {
    this.hour = hour;
    this.min = min;
    this.sec = sec;
  }

  resetTime() {
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
  }

  incrementSec() {
    this.sec = (this.sec + 1) % 60;
  }

  incrementMin() {
    // calculating min based on seconds
    if (this.sec == 59) {
      this.min += 1; // add 1 to existing value
    }

    if (this.min / 60 == 1) {
      // one hour has been reached..
      this.min = 0; // reset back to zero...
    }
  }

  incrementHour() {
    if (this.min == 59 && this.sec == 59) {
      // this will ensure proper rendering
      this.hour += 1; // no turning back in this case
    }
  }
}

function appendZero(s) {
  s = String(s);
  if (s.length == 1) {
    return `0${s}`;
  } else return s;
}

export { Time, appendZero };
