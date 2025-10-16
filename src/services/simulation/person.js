import * as events from "services/simulation/events";
import { getDate, getRandomDate, isItThisDay } from "services/simulation/time";
import { getRandomId } from "utils/getRandomId";
import { getRandomName } from "utils/names";
import { getRandomTraits } from "utils/traits";
import { getRandomPortrait } from "utils/getRandomPortrait";
import { GAME_CONFIG, GENDERS } from "config/gameConfig";

export default class Person {
  constructor(personProperties) {
    for (const key in personProperties) {
      if (personProperties.hasOwnProperty(key)) {
        this[key] = personProperties[key];
      }
    }
  }

  // Generate and simulate events specific to a person.
  simulate() {
    const randomChance = Math.floor(Math.random() * 100);
    const chancePercentage =
      (this.isPlayer
        ? GAME_CONFIG.EVENTS.CHANCE_FOR_PLAYER_EVENT
        : GAME_CONFIG.EVENTS.CHANCE_FOR_NPC_EVENT) * 100;

    if (randomChance <= chancePercentage) {
      // Generate and simulate new event
      const newEvent = events.generateEvent();
      newEvent.timeString = getDate();
      events.simulateEvent(newEvent, this);
    }

    if (isItThisDay(this.birthDate)) {
      this.age += 1;
    }
  }

  static createRandomPerson(gender = null, generateFamily = true) {
    const statRange =
      GAME_CONFIG.CHARACTERS.MAX_STAT - GAME_CONFIG.CHARACTERS.MIN_STAT + 1;
    const stats = {
      strength:
        Math.floor(Math.random() * statRange) + GAME_CONFIG.CHARACTERS.MIN_STAT,
      intelligence:
        Math.floor(Math.random() * statRange) + GAME_CONFIG.CHARACTERS.MIN_STAT,
      charisma:
        Math.floor(Math.random() * statRange) + GAME_CONFIG.CHARACTERS.MIN_STAT,
      leadership:
        Math.floor(Math.random() * statRange) + GAME_CONFIG.CHARACTERS.MIN_STAT,
    };
    if (!gender) {
      gender = Math.random() < 0.5 ? GENDERS.MALE : GENDERS.FEMALE;
    }
    const ageRange =
      GAME_CONFIG.CHARACTERS.MAX_AGE - GAME_CONFIG.CHARACTERS.MIN_AGE;
    const age =
      Math.floor(Math.random() * ageRange) + GAME_CONFIG.CHARACTERS.MIN_AGE;

    const properties = {
      name: getRandomName(gender),
      age: age,
      gold: Math.floor(Math.random() * GAME_CONFIG.CHARACTERS.MAX_GOLD),
      stats: stats,
      id: getRandomId(),
      prestige: Math.floor(Math.random() * GAME_CONFIG.CHARACTERS.MAX_PRESTIGE),
      traits: getRandomTraits(),
      health: Math.floor(Math.random() * GAME_CONFIG.CHARACTERS.MAX_HEALTH),
      gender: gender,
      portrait: getRandomPortrait(gender),
      isPlayer: false,
      activeEvent: null,
      birthDate: getRandomDate(1066 - age),
      family: {
        parents: [],
        siblings: [],
        children: [],
      },
      eventHistory: [], // Always keep this last
    };

    const person = new Person(properties);

    if (generateFamily) {
      person.generateFamily();
    }

    return person;
  }

  static createRandomChild(parents, age) {
    const properties = {}; // TODO
    properties.age = age;
    properties.parents = parents;

    const person = new Person(properties);
    return person;
  }

  ageUp() {
    this.age += 1;
  }

  addGold(amount) {
    this.gold += amount;
  }

  // Pass on their title, realm, and vassals to heir
  die() {}

  marry(spouse) {
    this.spouse = spouse;
  }

  // Divorce with current spouse
  divorce() {}

  generateFamily() {
    const mother = Person.createRandomPerson("female", false);
    const father = Person.createRandomPerson("male", false);

    mother.marry(father);
    father.marry(mother);

    const siblings = [];
    const children = [];

    this.family = {
      parents: [mother, father],
      siblings,
      children,
    };
  }
}
