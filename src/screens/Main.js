import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import PropTypes from "prop-types";
import EventHistory from "components/EventHistory";
import EventModal from "components/EventModal";

const Main = React.memo(
  ({ eventHistory, modalVisible, currentEvent, handleClose, player }) => {
    return (
      <View style={styles.scrollView}>
        <Text style={styles.header}>Events</Text>
        <ScrollView>
          <EventHistory eventHistory={eventHistory} />
        </ScrollView>
        <EventModal
          visible={modalVisible}
          event={currentEvent}
          handleClose={handleClose}
          player={player}
        />
      </View>
    );
  },
);

Main.displayName = "Main";

Main.propTypes = {
  eventHistory: PropTypes.array.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  currentEvent: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired,
};

export default Main;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ffe",
    paddingHorizontal: 62,
    height: "60%",
    width: "100%",
    paddingVertical: 20,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    color: "#d4af37",
  },
});
