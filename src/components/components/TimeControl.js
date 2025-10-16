import React, { useState, useCallback, useMemo } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import * as time from "../../services/simulation/time";
import { GAME_CONFIG } from "../config/gameConfig";

const TimeControl = React.memo(() => {
  const speedOptions = useMemo(() => GAME_CONFIG.TIMER.SPEED_OPTIONS, []);
  const [selectedSpeed, setSelectedSpeed] = useState(GAME_CONFIG.TIMER.DEFAULT_SPEED);

  const onSpeedChange = useCallback((newSpeed) => {
    try {
      time.setSpeed(newSpeed);
      setSelectedSpeed(newSpeed);
    } catch (error) {
      console.error('Error changing game speed:', error);
    }
  }, []);

  return (
    <View>
      <Text style={styles.title}>Game Speed</Text>
      <View style={styles.row}>
        {speedOptions.map((speed) => (
          <TouchableOpacity
            key={speed}
            style={[
              styles.speedButton,
              selectedSpeed === speed && styles.selectedSpeedButton,
            ]}
            onPress={() => onSpeedChange(speed)}
          >
            <Text style={styles.buttonText}>{1 / speed}x</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
});

TimeControl.displayName = 'TimeControl';

export default TimeControl;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  speedButton: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EBD6AC",
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  selectedSpeedButton: {
    backgroundColor: "#DEC28C",
  },
});
