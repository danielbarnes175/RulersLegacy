import React, { useCallback } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import PropTypes from "prop-types";

const EventModal = React.memo(({ visible, event, handleClose, player }) => {
  const handleChoicePress = useCallback((choice) => {
    if (choice.effect && typeof choice.effect === 'function') {
      try {
        choice.effect(player);
      } catch (error) {
        console.error('Error executing choice effect:', error);
      }
    }
    handleClose();
  }, [player, handleClose]);

  if (!event) {
    return null;
  }

  return (
    <View
      style={styles.container}
      visible={visible}
      backdropColor={"white"}
      backdropOpacity={1}
    >
      <View style={styles.modalView}>
        <Text style={styles.title}>{event.name}</Text>
        <View style={styles.divider}></View>
        <Text>{event.description}</Text>
        <Text></Text>
        <Text></Text>
        {event.choices?.map((choice, i) => (
          <Button
            key={i}
            title={choice.text}
            onPress={() => handleChoicePress(choice)}
          />
        ))}
      </View>
    </View>
  );
});

EventModal.displayName = 'EventModal';

EventModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        effect: PropTypes.func.isRequired,
      })
    ),
  }),
  handleClose: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired,
};

export default EventModal;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#0f0",
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    color: "#000",
  },
  divider: {
    borderBottomColor: "#222",
    borderBottomWidth: 2,
    marginRight: "40%",
    marginBottom: "5%",
    marginVertical: 5,
    justifyContent: "center",
  },
});
