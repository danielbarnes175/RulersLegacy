import { GAME_CONFIG } from "../config/gameConfig";

let daysProgressed = 0;

class GameTimer {
  constructor() {
    this.speed = 1;
    this.timer = null;
    this.isRunning = false;
    this.updateCallback = null;
    this.worldReference = null;
  }

  start(callback, world) {
    if (this.isRunning) return;

    this.isRunning = true;
    this.updateCallback = callback;
    this.worldReference = world;

    this.timer = setInterval(() => {
      const currentWorld = world || this.worldReference;
      if (currentWorld?.player?.activeEvent) {
        this.stop();
        return;
      }

      currentWorld?.update();
      daysProgressed++;

      if (this.updateCallback) {
        this.updateCallback({ world: currentWorld });
      }
    }, this.speed * 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.isRunning = false;
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
    if (this.isRunning && this.timer) {
      this.stop();
      this.start(this.updateCallback, this.worldReference);
    }
  }

  getIsRunning() {
    return this.isRunning;
  }
}

const gameTimer = new GameTimer();

export function startTimer(callback, world) {
  gameTimer.start(callback, world);
}

export function stopTimer() {
  gameTimer.stop();
}

export function setSpeed(newSpeed) {
  gameTimer.setSpeed(newSpeed);
}

export function isTimerRunning() {
  return gameTimer.getIsRunning();
}

export function getDate() {
  const date = new Date(GAME_CONFIG.WORLD.START_DATE);
  date.setDate(date.getDate() + daysProgressed);
  return date.toDateString();
}

export function getRandomDate(year) {
  let maxDay = 31;
  let month = Math.floor(Math.random() * 12) + 1;

  if (month === 2) {
    maxDay = 28;
  } else if ([4, 6, 9, 11].indexOf(month) !== -1) {
    maxDay = 30;
  }

  const day = Math.floor(Math.random() * maxDay) + 1;
  return new Date(year, month - 1, day);
}

export function isItThisDay(date) {
  const currentDate = new Date(GAME_CONFIG.WORLD.START_DATE);
  currentDate.setDate(date.getDate() + daysProgressed);

  let currentDateMonth = currentDate.getUTCMonth() + 1;
  let currentDateDay = currentDate.getUTCDate();
  let dateMonth = date.getUTCMonth() + 1;
  let dateDay = date.getUTCDate();

  return currentDateMonth === dateMonth && currentDateDay === dateDay;
}

export function isTimerRunning() {
  return timerIsRunning;
}
