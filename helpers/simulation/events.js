import clone from "clone";
import { stopTimer } from "./time";
import events from "./eventList";

export const simulateEvent = (event, person) => {
  // TODO
  if (event.type === "choice") {
    if (person.isPlayer) {
      person.activeEvent = event;
      stopTimer();
    } else {
      // randomly pick a choice for NPCs
      if (event.choices && event.choices.length > 0) {
        const randomChoice =
          event.choices[Math.floor(Math.random() * event.choices.length)];
        randomChoice.effect(person);
      }
    }
  }
  if (event.type === "automatic") {
    event.effect(person);
  }

  person.eventHistory.push(event);
};

export const generateEvent = () => {
  const eventIndex = Math.floor(Math.random() * events.length);
  let event = events[eventIndex];
  let newEvent = clone(event);
  newEvent.timestamp = Date.now();
  return newEvent;
};
