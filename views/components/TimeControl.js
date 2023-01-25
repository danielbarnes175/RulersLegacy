import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import * as time from '../../helpers/simulation/time';

export default function TimeControl() {
  const speedOptions = [4, 2, 1, 0.5, 0.25];
  const [selectedSpeed, setSelectedSpeed] = useState(1);

  const onSpeedChange = newSpeed => {
    time.setSpeed(newSpeed);
    setSelectedSpeed(newSpeed);
  }

  return (
    <View>
      <Text style={styles.title}>Game Speed</Text>
      <View style={styles.row}>
        {speedOptions.map(speed => (
          <TouchableOpacity
            key={speed}
            style={[styles.speedButton, selectedSpeed === speed && styles.selectedSpeedButton]}
            onPress={() => onSpeedChange(speed)}
          >
            <Text style={styles.buttonText}>{1 / speed}x</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  speedButton: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBD6AC'
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  selectedSpeedButton: {
    backgroundColor: '#DEC28C',
  },
});
