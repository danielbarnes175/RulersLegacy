import Person from './person';
import Community from './community';
import { getDate } from './time';

export class World {
    constructor() {
        this.communities = [];
        this.player = {
            eventHistory: [],
        };
        this.populateWorld();
    }

    populateWorld() {
        for (let i = 0; i < 20; i++) {
            let members = [];
            for (let j = 0; j < 20; j++) {
                let person = Person.createRandomPerson();
                members.push(person);
            }

            let params = {
                id: i,
                people: members
            }
            
            let community = new Community(params);
            this.communities.push(community);
            
        }
    }


    
    // Simulate the world
    update() {
        this.communities.forEach(community => {
            community.simulate();
        });

        this.player.simulate();
        this.date = getDate();
    }
}