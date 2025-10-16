import Person from "services/simulation//person";
import Community from "services/simulation//community";
import { getDate } from "services/simulation/time";
import { GAME_CONFIG } from "config/gameConfig";

export class World {
  constructor() {
    this.communities = [];
    this.player = {
      eventHistory: [],
    };
    this.populateWorld();
  }

  populateWorld() {
    for (let i = 0; i < GAME_CONFIG.WORLD.NUMBER_OF_COMMUNITIES; i++) {
      const members = [];
      for (let j = 0; j < GAME_CONFIG.WORLD.PEOPLE_PER_COMMUNITY; j++) {
        const person = Person.createRandomPerson();
        members.push(person);
      }

      const params = {
        id: i,
        people: members,
      };

      const community = new Community(params);
      this.communities.push(community);
    }
  }

  // Simulate the world
  update() {
    this.communities.forEach((community) => {
      community.simulate();
    });

    // player is simulated as part of the community they are in. Eventually we might want a separate case?
    // this.player.simulate();
    this.date = getDate();
  }
}
