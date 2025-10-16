import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const TitleScreen = React.memo(({ navigation }) => {
  const handleNewGamePress = () => {
    navigation.navigate("CharacterSelection");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Ruler's Legacy</Text>
      <TouchableOpacity style={styles.button} onPress={handleNewGamePress}>
        <Text style={styles.buttonText}>New Game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Load Game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
});

TitleScreen.displayName = "TitleScreen";

TitleScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default TitleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    margin: 10,
    width: 150,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
