import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import PropTypes from "prop-types";
import ErrorBoundary from "src/components/ui/ErrorBoundary";

const Stack = createStackNavigator();

import TitleScreen from "src/screens/TitleScreen";
import GameScreen from "src/screens/GameScreen";
import CharacterSelection from "src/screens/CharacterSelection";
import CharacterCustomizer from "src/screens/CharacterCustomizer";

const GameScreenWithErrorBoundary = (props) => (
  <ErrorBoundary
    showBackButton
    onBack={() => props.navigation.navigate("TitleScreen")}
  >
    <GameScreen {...props} />
  </ErrorBoundary>
);

GameScreenWithErrorBoundary.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default function App() {
  return (
    <ErrorBoundary>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TitleScreen"
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
        >
          <Stack.Screen name="TitleScreen" component={TitleScreen} />
          <Stack.Screen
            name="CharacterSelection"
            component={CharacterSelection}
          />
          <Stack.Screen
            name="CustomCharacter"
            component={CharacterCustomizer}
          />
          <Stack.Screen
            name="GameScreen"
            component={GameScreenWithErrorBoundary}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
}
