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
  const numTraits = Math.floor(Math.random() * 4) + 1; // 1-4 traits
  const traits = new Set();
  while (traits.size < numTraits) {
    traits.add(traitsList[Math.floor(Math.random() * traitsList.length)]);
  }
  return Array.from(traits);
}

function ambitiousEffect() {
  // TODO: Implement ambitious trait effect
}

function braveEffect() {
  // TODO: Implement brave trait effect
}

function cunningEffect() {
  // TODO: Implement cunning trait effect
}

function deceitfulEffect() {
  // TODO: Implement deceitful trait effect
}

function generousEffect() {
  // TODO: Implement generous trait effect
}

function greedyEffect() {
  // TODO: Implement greedy trait effect
}
