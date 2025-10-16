const firstNamesMale = ["David", "Bob"];

const firstNamesFemale = ["Anna", "Jessica"];

const lastNames = ["Silver", "Strongarms"];

export function getRandomName(gender) {
  const firstNames = gender === "male" ? firstNamesMale : firstNamesFemale;

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}
