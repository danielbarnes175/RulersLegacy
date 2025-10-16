import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import GameFooter from "./GameFooter";
import { useGameState, useGameTimer, useEventModal } from "../hooks/useGameHooks";

export default function GameScreen({ navigation, route }) {
  const { world, player, isInitialized, initializeGame, updateWorld } = useGameState(route.params.playerParams);
  const { startTimer, stopTimer } = useGameTimer();
  const { modalVisible, currentEvent, closeModal } = useEventModal(player);

  useEffect(() => {
    try {
      const initializedWorld = initializeGame();
      startTimer(updateWorld, initializedWorld);
    } catch (error) {
      console.error('Failed to initialize game:', error);
      navigation.navigate('TitleScreen');
    }

    return () => {
      stopTimer();
    };
  }, [initializeGame, startTimer, stopTimer, updateWorld, navigation]);

  const handleClose = () => {
    closeModal();
    startTimer(updateWorld, world);
  };

  if (!isInitialized) {
    return (
      <View style={styles.container}>
        <Text>Loading game...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header style={styles.header} world={world} />
      <Main
        style={styles.main}
        eventHistory={player?.eventHistory || []}
        modalVisible={modalVisible}
        currentEvent={currentEvent}
        handleClose={handleClose}
        player={player}
      />
      <GameFooter style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7BC89",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {},
  main: {},
  footer: {},
});
