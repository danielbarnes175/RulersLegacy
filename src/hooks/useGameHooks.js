import { useState, useEffect, useCallback, useMemo } from "react";
import { World } from "services/simulation/world";
import Person from "services/simulation/person";
import * as time from "services/simulation/time";
import clone from "clone";

export const useGameState = (playerParams) => {
  const [player, setPlayer] = useState(() => Person.createRandomPerson());
  const [world, setWorld] = useState(() => new World());
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeGame = useCallback(() => {
    try {
      let newPlayer;
      if (playerParams?.generateRandomPlayer) {
        newPlayer = Person.createRandomPerson();
        newPlayer.isPlayer = true;
      } else {
        newPlayer = Person.createRandomPerson();
        newPlayer.isPlayer = true;
      }

      const newWorld = new World();
      newPlayer.isPlayer = true;
      newWorld.player = newPlayer;
      newWorld.communities[0].people.push(newPlayer);

      setPlayer(newPlayer);
      setWorld(newWorld);
      setIsInitialized(true);

      return newWorld;
    } catch (error) {
      console.error("Error initializing game:", error);
      throw error;
    }
  }, [playerParams]);

  const updateWorld = useCallback((updates) => {
    try {
      if (updates?.world) {
        setWorld((prevWorld) => {
          const newWorld = clone(updates.world);
          return newWorld;
        });
      }
    } catch (error) {
      console.error("Error updating world:", error);
    }
  }, []);

  const worldStats = useMemo(() => {
    if (!world || !world.communities) {
      return null;
    }

    return {
      totalPopulation: world.communities.reduce(
        (sum, community) => sum + (community.people?.length || 0),
        0,
      ),
      communitiesCount: world.communities.length,
      currentDate: world.date,
    };
  }, [world]);

  return {
    player,
    world,
    isInitialized,
    worldStats,
    initializeGame,
    updateWorld,
  };
};

export const useGameTimer = () => {
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = useCallback((updateCallback, world) => {
    try {
      time.startTimer(updateCallback, world);
      setIsRunning(true);
    } catch (error) {
      console.error("Error starting timer:", error);
    }
  }, []);

  const stopTimer = useCallback(() => {
    try {
      time.stopTimer();
      setIsRunning(false);
    } catch (error) {
      console.error("Error stopping timer:", error);
    }
  }, []);

  const setSpeed = useCallback((speed) => {
    try {
      time.setSpeed(speed);
    } catch (error) {
      console.error("Error setting timer speed:", error);
    }
  }, []);

  useEffect(() => {
    setIsRunning(time.isTimerRunning());
  }, []);

  return {
    isRunning,
    startTimer,
    stopTimer,
    setSpeed,
  };
};

export const useEventModal = (player) => {
  const [modalVisible, setModalVisible] = useState(false);

  const currentEvent = useMemo(() => {
    return player?.activeEvent || null;
  }, [player?.activeEvent]);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
    if (player) {
      player.activeEvent = null;
    }
  }, [player]);

  useEffect(() => {
    if (currentEvent) {
      setModalVisible(true);
    }
  }, [currentEvent]);

  return {
    modalVisible,
    currentEvent,
    openModal,
    closeModal,
  };
};
