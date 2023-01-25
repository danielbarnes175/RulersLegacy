const clone = require('clone');
import { stopTimer } from './time';
import events from './eventList';

export const simulateEvent = (event, person) => {
    // TODO
    if (event.type === 'choice') {
      if (person.isPlayer) {
        person.activeEvent = event;
        stopTimer();
      } else {
        // randomly pick a choice...
      }
    }
    if (event.type === 'automatic') {
      event.effect(person);
    }

    person.eventHistory.push(event);
}

export const generateEvent = () => {
    const eventIndex = Math.floor(Math.random() * events.length);
    let event = events[eventIndex];
    let newEvent = clone(event);
    newEvent.timestamp = Date.now();
    return newEvent;
}