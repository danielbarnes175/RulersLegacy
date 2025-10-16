import Person from "./person";
import Community from "./community";
import { getDate } from "./time";

const NUMBER_OF_COMMUNITIES = 20;
const PEOPLE_PER_COMMUNITY = 20;

export class World {
  constructor() {
    this.communities = [];
    this.player = {
      eventHistory: [],
    };
    this.populateWorld();
  }

  populateWorld() {
    for (let i = 0; i < NUMBER_OF_COMMUNITIES; i++) {
      let members = [];
      for (let j = 0; j < PEOPLE_PER_COMMUNITY; j++) {
        let person = Person.createRandomPerson();
        members.push(person);
      }

      let params = {
        id: i,
        people: members,
      };

      let community = new Community(params);
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
