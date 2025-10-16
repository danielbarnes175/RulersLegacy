import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEYS = {
  GAME_STATE: "@game_state",
  USER_SETTINGS: "@user_settings",
  SAVE_SLOTS: "@save_slots",
};

export class PersistenceService {
  static async saveGameState(gameState) {
    try {
      const serializedState = JSON.stringify({
        ...gameState,
        timestamp: Date.now(),
      });
      await AsyncStorage.setItem(STORAGE_KEYS.GAME_STATE, serializedState);
      return true;
    } catch (error) {
      console.error("Error saving game state:", error);
      return false;
    }
  }

  static async loadGameState() {
    try {
      const serializedState = await AsyncStorage.getItem(
        STORAGE_KEYS.GAME_STATE,
      );
      if (serializedState) {
        return JSON.parse(serializedState);
      }
      return null;
    } catch (error) {
      console.error("Error loading game state:", error);
      return null;
    }
  }

  static async clearGameState() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.GAME_STATE);
      return true;
    } catch (error) {
      console.error("Error clearing game state:", error);
      return false;
    }
  }

  static async saveToSlot(slotId, gameState) {
    try {
      const saveSlots = await this.getSaveSlots();
      saveSlots[slotId] = {
        ...gameState,
        timestamp: Date.now(),
        slotId,
      };

      await AsyncStorage.setItem(
        STORAGE_KEYS.SAVE_SLOTS,
        JSON.stringify(saveSlots),
      );
      return true;
    } catch (error) {
      console.error("Error saving to slot:", error);
      return false;
    }
  }

  static async loadFromSlot(slotId) {
    try {
      const saveSlots = await this.getSaveSlots();
      return saveSlots[slotId] || null;
    } catch (error) {
      console.error("Error loading from slot:", error);
      return null;
    }
  }

  static async getSaveSlots() {
    try {
      const slotsData = await AsyncStorage.getItem(STORAGE_KEYS.SAVE_SLOTS);
      return slotsData ? JSON.parse(slotsData) : {};
    } catch (error) {
      console.error("Error getting save slots:", error);
      return {};
    }
  }

  static async saveUserSettings(settings) {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.USER_SETTINGS,
        JSON.stringify(settings),
      );
      return true;
    } catch (error) {
      console.error("Error saving user settings:", error);
      return false;
    }
  }

  static async loadUserSettings() {
    try {
      const settings = await AsyncStorage.getItem(STORAGE_KEYS.USER_SETTINGS);
      return settings ? JSON.parse(settings) : null;
    } catch (error) {
      console.error("Error loading user settings:", error);
      return null;
    }
  }
}
