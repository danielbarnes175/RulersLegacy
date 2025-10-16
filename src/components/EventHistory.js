import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";

const EventHistory = React.memo(({ eventHistory }) => {
  const sortedEvents = useMemo(() => {
    if (!eventHistory || !Array.isArray(eventHistory)) {
      return [];
    }
    return [...eventHistory].reverse();
  }, [eventHistory]);

  return (
    <View>
      {sortedEvents.map((event, i) => (
        <Text key={event.id || i}>
          {event.timeString} - {event.description}
        </Text>
      ))}
    </View>
  );
});

EventHistory.displayName = 'EventHistory';

export default EventHistory;

const styles = StyleSheet.create({});
