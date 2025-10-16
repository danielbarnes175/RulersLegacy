import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const CharacterSelection = ({ navigation }) => {
  const handleRandomPress = () => {
    const playerParams = {
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

CharacterSelection.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
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
