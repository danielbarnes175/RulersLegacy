import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Person from "../helpers/simulation/person";

const CharacterCustomizer = ({ navigation }) => {
  const handleCustomPress = () => {
    let playerParams = {
      generateRandomPlayer: false,
      playerConfig: {
        // Insert player config;
      },
    };
    navigation.navigate("CustomCharacter", { playerParams });
  };

  return (
    <View>
      <TouchableOpacity onPress={handleCustomPress}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterCustomizer;
