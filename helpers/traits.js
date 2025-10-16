import justImage from "assets/traits/just.jpg";

const traitsList = [
  { name: "ambitious", effect: () => ambitiousEffect, image: justImage },
  { name: "brave", effect: () => braveEffect, image: justImage },
  { name: "cunning", effect: () => cunningEffect, image: justImage },
  { name: "deceitful", effect: () => deceitfulEffect, image: justImage },
  { name: "generous", effect: () => generousEffect, image: justImage },
  { name: "greedy", effect: () => greedyEffect, image: justImage },
  // ...
];

export function getRandomTraits() {
  let numTraits = Math.floor(Math.random() * 5) + 1;
  let traits = new Set();
  while (traits.size < numTraits) {
    traits.add(traitsList[Math.floor(Math.random() * traitsList.length)]);
  }
  return Array.from(traits);
}

function ambitiousEffect() {}
