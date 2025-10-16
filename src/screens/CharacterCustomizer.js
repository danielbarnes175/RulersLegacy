import { Text, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const CharacterCustomizer = ({ navigation }) => {
  const handleCustomPress = () => {
    const playerParams = {
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

CharacterCustomizer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CharacterCustomizer;
