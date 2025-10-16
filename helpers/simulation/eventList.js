const events = [
  {
    id: 'event_find_pet',
    name: 'Find pet',
    description: 'You have found a cute pet!',
    type: 'choice',
    choices: [
      {
        text: 'Keep the pet',
        effect: (person) => { person.hasPet = true; },
        tooltip: 'Gain a pet, giving you +1 happiness.',
      },
      {
        text: 'Leave the pet behind',
        effect: (person) => { },
        tooltip: 'Don\'t gain a pet, you heartless monster.',
      },
    ],
  },
  {
    id: 'event_contract_disease',
    name: 'Contract disease',
    description: 'You have contracted a disease.',
    type: 'automatic',
    effect: (person) => { },
  },
];

export default events;
