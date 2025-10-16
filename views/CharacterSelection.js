import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Person from "../helpers/simulation/person";

const CharacterSelection = ({ navigation }) => {
  const handleRandomPress = () => {
    let playerParams = {
      generateRandomPlayer: true,
    };
    navigation.navigate("GameScreen", { playerParams });
  };

  const handleCustomPress = () => {
    navigation.navigate("CustomCharacter");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleRandomPress}>
        <Text>Random Character</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCustomPress}>
        <Text>Customize Character</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    padding: 10,
    backgroundColor: "#4da6ff",
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CharacterSelection;
