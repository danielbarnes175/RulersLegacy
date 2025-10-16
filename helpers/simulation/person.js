import * as events from "./events";
import { getDate, getRandomDate, isItThisDay } from "./time";
import { getRandomId } from "../getRandomId";
import { getRandomName } from "../names";
import { getRandomTraits } from "../traits";
import { getRandomPortrait } from "../getRandomPortrait";

const CHANCE_FOR_NPC_EVENT = 0.02; // 2%
const CHANCE_FOR_PLAYER_EVENT = 0.1; // 10%

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
    let chancePercentage =
      (this.isPlayer ? CHANCE_FOR_PLAYER_EVENT : CHANCE_FOR_NPC_EVENT) * 100;
    if (this.isPlayer) console.log(this.isPlayer);

    if (randomChance <= chancePercentage) {
      // Generate and simulate new event
      let newEvent = events.generateEvent();
      newEvent.timeString = getDate();
      events.simulateEvent(newEvent, this);
    }

    if (isItThisDay(this.birthDate)) {
      this.age += 1;
    }
  }

  static createRandomPerson(gender = null, generateFamily = true) {
    let stats = {
      strength: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
      intelligence: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
      charisma: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
      leadership: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
    };
    if (!gender) {
      gender = Math.random() < 0.5 ? "male" : "female";
    }
    let age = Math.floor(Math.random() * 40) + 15;

    let properties = {
      name: getRandomName(gender),
      age: age,
      gold: Math.floor(Math.random() * 1000),
      stats: stats,
      id: getRandomId(),
      prestige: Math.floor(Math.random() * 100),
      traits: getRandomTraits(),
      health: Math.floor(Math.random() * 100),
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

    let person = new Person(properties);

    if (generateFamily) {
      person.generateFamily();
    }

    return person;
  }

  static createRandomChild(parents, age) {
    let properties = {}; // TODO
    properties.age = age;
    properties.parents = parents;

    let person = new Person(properties);
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
    let mother = Person.createRandomPerson("female", false);
    let father = Person.createRandomPerson("male", false);

    mother.marry(father);
    father.marry(mother);

    let siblings = [];
    let children = [];

    this["family"] = {
      parents: [mother, father],
      siblings,
      children,
    };
  }
}
