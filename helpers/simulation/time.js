let speed = 1;
let timer;
let timerIsRunning = false;

// Need to keep references to these in order to restart their simulation after restarting timer
let updateCallback;
let worldReference;

const START_DATE = '1/1/1066';
let daysProgressed = 0;

export function startTimer(callback, world) {
  if (timerIsRunning) return;
  
  timerIsRunning = true;
  timer = setInterval(() => {    
    if (world) {
      if (world.player.activeEvent) return stopTimer();
      world.update();
      worldReference = world;
    } else {
      if (worldReference.player.activeEvent) return stopTimer();
      world = worldReference;
    }

    daysProgressed++;

    if (callback) {
      updateCallback = callback;
    }

    updateCallback({
      world: world
    });

    return () => { stopTimer(); }
  }, speed * 1000);
}

export function stopTimer() {
  timerIsRunning = false;
  clearInterval(timer);
}

export function setSpeed(newSpeed) {
  speed = newSpeed;
  if (isTimerRunning() && timer) {
    // Restart timer with new speed
    stopTimer();
    startTimer(updateCallback, worldReference);
  }
}

export function getDate() {
  const date = new Date(START_DATE);
  date.setDate(date.getDate() + daysProgressed);
  return date.toDateString();
}

export function getRandomDate(year) {
  let maxDay = 31;
  let month = Math.floor(Math.random() * 12) + 1;

  if (month === 2){
      maxDay = 28;
  } else if ([4,6,9,11].indexOf(month) !== -1){
      maxDay = 30;
  }

  const day = Math.floor(Math.random() * maxDay) + 1;
  return new Date(year, month - 1, day);
}

export function isItThisDay(date) {
  const currentDate = new Date(START_DATE);
  currentDate.setDate(date.getDate() + daysProgressed);

  let currentDateMonth = currentDate.getUTCMonth() + 1;
  let currentDateDay = currentDate.getUTCDate();
  let dateMonth = date.getUTCMonth() + 1;
  let dateDay = date.getUTCDate();

  return (currentDateMonth === dateMonth && currentDateDay === dateDay);
}

export function isTimerRunning() {
  return timerIsRunning;
}