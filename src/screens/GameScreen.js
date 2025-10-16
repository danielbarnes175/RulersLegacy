import { StyleSheet, View } from "react-native";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "screens/Header";
import Main from "screens/Main";
import GameFooter from "screens/GameFooter";
import LoadingScreen from "components/LoadingScreen";
import { useGameState, useGameTimer, useEventModal } from "hooks/useGameHooks";

export default function GameScreen({ navigation, route }) {
  const { world, player, isInitialized, initializeGame, updateWorld } =
    useGameState(route.params.playerParams);
  const { startTimer, stopTimer } = useGameTimer();
  const { modalVisible, currentEvent, closeModal } = useEventModal(player);

  useEffect(() => {
    try {
      const initializedWorld = initializeGame();
      startTimer(updateWorld, initializedWorld);
    } catch (error) {
      console.error("Failed to initialize game:", error);
      navigation.navigate("TitleScreen");
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
    return <LoadingScreen message="Initializing your realm..." />;
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

GameScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      playerParams: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

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
