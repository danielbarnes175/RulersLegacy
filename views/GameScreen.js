import clone from "clone";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import GameFooter from "./GameFooter";
import * as time from "../helpers/simulation/time";
import { World } from "../helpers/simulation/world";
import Person from "../helpers/simulation/person";

export default function GameScreen({ navigation, route }) {
  let [player, setPlayer] = useState(Person.createRandomPerson());
  let [modalVisible, setModalVisible] = useState(false);
  let [world, setWorld] = useState(new World());

  // Start timer when game starts
  useEffect(() => {
    if (route.params.playerParams.generateRandomPlayer) {
      let player = Person.createRandomPerson();
      player.isPlayer = true;
      setPlayer(clone(player));
    } else {
      // TODO
    }

    world.player = player;
    world.communities[0].people.push(player);
    setWorld(world);

    time.startTimer(updateState, world);
  }, []);

  const handleClose = () => {
    setModalVisible(false);
    world.player.activeEvent = null;
    time.startTimer(updateState, world);
  };

  const updateState = (updates) => {
    setWorld(clone(updates.world));

    if (world.player.activeEvent) {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Header style={styles.header} world={world} />
      <Main
        style={styles.main}
        eventHistory={clone(world.player.eventHistory)}
        modalVisible={modalVisible}
        currentEvent={world.player.activeEvent}
        handleClose={handleClose}
        player={world.player}
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
