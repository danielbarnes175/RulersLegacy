import clone from "clone";
import { stopTimer } from "./time";
import events from "./eventList";
import { EVENT_TYPES } from "../../config/gameConfig";

export const simulateEvent = (event, person) => {
  try {
    if (!event || !person) {
      console.warn('simulateEvent called with missing event or person');
      return;
    }

    if (event.type === EVENT_TYPES.CHOICE) {
      if (person.isPlayer) {
        person.activeEvent = event;
        stopTimer();
      } else {
        if (event.choices && event.choices.length > 0) {
          const randomChoice =
            event.choices[Math.floor(Math.random() * event.choices.length)];
          if (randomChoice.effect && typeof randomChoice.effect === 'function') {
            randomChoice.effect(person);
          }
        }
      }
    }
    if (event.type === EVENT_TYPES.AUTOMATIC) {
      if (event.effect && typeof event.effect === 'function') {
        event.effect(person);
      }
    }

    if (person.eventHistory && Array.isArray(person.eventHistory)) {
      person.eventHistory.push(event);
    }
  } catch (error) {
    console.error('Error simulating event:', error);
    console.error('Event:', event);
    console.error('Person:', person?.name || 'Unknown');
  }
};

export const generateEvent = () => {
  const eventIndex = Math.floor(Math.random() * events.length);
  let event = events[eventIndex];
  let newEvent = clone(event);
  newEvent.timestamp = Date.now();
  return newEvent;
};
