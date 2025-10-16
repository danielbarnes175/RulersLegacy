import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import PropTypes from "prop-types";
import Person from "./Person";
import {
  stopTimer,
  startTimer,
  isTimerRunning,
} from "../services/simulation/time";
import paperTexture from "assets/textures/paper.webp";

const PeopleList = React.memo(({ community, onClose }) => {
  const [personViewVisible, setPersonViewVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground source={paperTexture} style={styles.bg}>
        <View style={styles.container2}>
          <Text style={styles.h2}>Character List</Text>
          <ScrollView style={styles.scrollview}>
            {community.people.map((person, i) => (
              <View key={i} style={styles.person}>
                <TouchableOpacity
                  onPress={() => {
                    stopTimer();
                    setSelectedPerson(person);
                    setPersonViewVisible(true);
                  }}
                >
                  <Image
                    source={person.portrait}
                    style={styles.portrait}
                  />
                  <Text>{person.name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          <Modal visible={personViewVisible}>
            <Person
              person={selectedPerson}
              onClose={() => {
                if (!isTimerRunning()) {
                  startTimer();
                }
                setPersonViewVisible(false);
              }}
            />
          </Modal>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
});

PeopleList.displayName = 'PeopleList';

PeopleList.propTypes = {
  community: PropTypes.shape({
    people: PropTypes.arrayOf(
      PropTypes.shape({
        portrait: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PeopleList;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
  },
  container2: {
    flex: 1,
    height: 150,
    marginTop: "15%",
    marginBottom: "5%",
  },
  bg: {
    width: "100%",
    height: "100%",
  },
  h2: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: "2%",
    color: "#000",
  },
  scrollview: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: "5%",
    marginBottom: "10%",
  },
  person: {
    borderBottomWidth: 1,
    padding: 5,
  },
  portrait: {
    width: 64,
    height: 64,
    borderRadius: 25,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15%",
    width: "100%",
  },
  button: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    justifyContent: "center",
  },
  icon: {
    width: 32,
    height: 32,
  },
});
