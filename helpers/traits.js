const traitsList = [
    { name: "ambitious", effect: () => ambitiousEffect, image: require('assets/traits/just.jpg') },
    { name: "brave", effect: () => braveEffect, image: require('assets/traits/just.jpg')  },
    { name: "cunning", effect: () => cunningEffect, image: require('assets/traits/just.jpg')  },
    { name: "deceitful", effect: () => deceitfulEffect, image: require('assets/traits/just.jpg')  },
    { name: "generous", effect: () => generousEffect, image: require('assets/traits/just.jpg')  },
    { name: "greedy", effect: () => greedyEffect, image: require('assets/traits/just.jpg')  },
    // ...
];

export function getRandomTraits() {
    let numTraits = Math.floor(Math.random() * 5) + 1;
    let traits = new Set();
    while(traits.size < numTraits) {
        traits.add(traitsList[Math.floor(Math.random() * traitsList.length)]);
    }
    return Array.from(traits);
}

function ambitiousEffect() {

}