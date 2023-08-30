import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import TimeControl from './components/TimeControl'

export function GameFooter() {
  return (
    <View style={styles.container}>
      <TimeControl></TimeControl>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }
});


export default GameFooter;