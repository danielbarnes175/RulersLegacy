import "react-native-gesture-handler";
import clone from "clone";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import ErrorBoundary from "./components/ErrorBoundary";

const Stack = createStackNavigator();

import TitleScreen from "./views/TitleScreen";
import GameScreen from "./views/GameScreen";
import CharacterSelection from "./views/CharacterSelection";
import CharacterCustomizer from "./views/CharacterCustomizer";

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
            component={(props) => (
              <ErrorBoundary showBackButton onBack={() => props.navigation.navigate('TitleScreen')}>
                <GameScreen {...props} />
              </ErrorBoundary>
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
}
