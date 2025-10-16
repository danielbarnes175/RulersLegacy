import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import TimeControl from "./components/TimeControl";

const GameFooter = React.memo(() => {
  return (
    <View style={styles.container}>
      <TimeControl />
    </View>
  );
});

GameFooter.displayName = 'GameFooter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default GameFooter;
