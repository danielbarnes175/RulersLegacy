import * as events from './events';
import { getDate, getRandomDate, isItThisDay } from './time';
import { getRandomId } from '../getRandomId';
import { getRandomName } from '../names';
import { getRandomTraits } from '../traits';
import { getRandomPortrait } from '../getRandomPortrait';

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
        const randomChance = Math.floor(Math.random() * 5);
        let newEvent;
        if (randomChance === 1) {
          // Generate and simulate new event
          newEvent = events.generateEvent();
          newEvent.timeString = getDate();
          events.simulateEvent(newEvent, this);
        }

        if (isItThisDay(this.birthDate)) {
            this.age += 1;
        }
    }

    static createRandomPerson() {
        let stats = {
            strength: Math.floor(Math.random() * (20 - 10 + 1)) + 10, 
            intelligence: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
            charisma: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
        }
        let gender = Math.random() < 0.5 ? 'male' : 'female';
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
            eventHistory: [],
            activeEvent: null,
            birthDate: getRandomDate(1066 - age)
        }
        
        let person = new Person(properties);
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
    die(){
        
    }

    marry(spouse){
        this.spouse = spouse
    }

    // Divorce with current spouse
    divorce(){
        
    }
}