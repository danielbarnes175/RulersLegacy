

export default class Community {
    constructor(properties) {
        this.id = 0;
        this.name = 'placeholder';
        this.people = [];
        this.currentLeader = '',
            this.resources = {
                gold: 0,
                prestige: 0,
            }
        this.laws = {

        }
        this.culture = {

        },
            this.military = {
                soldiers: 0
            }

        for (const key in properties) {
            if (properties.hasOwnProperty(key)) {
                this[key] = properties[key];
            }
        }
    }

    // Generate and simulate events specific to a person.
    simulate() {
        this.people.forEach(person => {
            person.simulate();
        });
    }

    addPerson(person) {
        this.people.push(person);
    }

    removePerson(person) {
        this.people = this.people.filter(p => p !== person);
    }
}
