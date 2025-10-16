export const GAME_CONFIG = {
    WORLD: {
        NUMBER_OF_COMMUNITIES: 20,
        PEOPLE_PER_COMMUNITY: 20,
        START_DATE: "1/1/1066"
    },

    EVENTS: {
        CHANCE_FOR_NPC_EVENT: 0.02,
        CHANCE_FOR_PLAYER_EVENT: 0.1,
        MAX_EVENT_HISTORY: 100
    },

    CHARACTERS: {
        MIN_AGE: 15,
        MAX_AGE: 55,
        MIN_STAT: 10,
        MAX_STAT: 20,
        MAX_GOLD: 1000,
        MAX_PRESTIGE: 100,
        MAX_HEALTH: 100,
        MIN_TRAITS: 1,
        MAX_TRAITS: 5
    },

    TIMER: {
        DEFAULT_SPEED: 1,
        SPEED_OPTIONS: [4, 2, 1, 0.5, 0.25]
    },

    PERFORMANCE: {
        MAX_RENDER_ITEMS: 50,
        CLONE_THRESHOLD: 1000
    }
};

export const EVENT_TYPES = {
    CHOICE: 'choice',
    AUTOMATIC: 'automatic'
};

export const GENDERS = {
    MALE: 'male',
    FEMALE: 'female'
};
