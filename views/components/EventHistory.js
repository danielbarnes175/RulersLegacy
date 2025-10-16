import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function EventHistory({ eventHistory }) {
  return (
    <View>
      {eventHistory.reverse().map((event, i) => (
        <Text key={i}>
          {event.timeString} - {event.description}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
