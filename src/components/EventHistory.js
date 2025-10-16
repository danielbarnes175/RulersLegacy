import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

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

EventHistory.propTypes = {
  eventHistory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      timeString: PropTypes.string,
      description: PropTypes.string.isRequired,
    })
  ),
};

EventHistory.defaultProps = {
  eventHistory: [],
};

export default EventHistory;

const styles = StyleSheet.create({});
