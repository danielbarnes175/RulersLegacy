import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import PropTypes from "prop-types";
import { log } from "utils/debug";
import paperTexture from "assets/textures/paper.webp";
import strengthIcon from "assets/icons/strength.png";
import lightbulbIcon from "assets/icons/lightbulb.png";
import speakIcon from "assets/icons/speak.png";

const Person = React.memo(({ person, onClose }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={paperTexture} style={styles.bg}>
        <View style={styles.headerContainer}>
          <View style={styles.portraitContainer}>
            <Image source={person.portrait} style={styles.portrait} />
          </View>
          <View style={styles.headerInfoContainer}>
            <Text style={styles.h2}>{person.name}</Text>
            <Text style={styles.property}>Age: {person.age}</Text>
            <Text style={styles.property}>Gender: {person.gender}</Text>
            <Text style={styles.property}>Gold: {person.gold}</Text>
            <Text style={styles.property}>Prestige: {person.prestige}</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsRow}>
            <Image source={strengthIcon} style={styles.icon} />
            <Text style={styles.property}> {person.stats.strength}</Text>
            <Image source={lightbulbIcon} style={styles.icon} />
            <Text style={styles.property}> {person.stats.intelligence}</Text>
            <Image source={speakIcon} style={styles.icon} />
            <Text style={styles.property}> {person.stats.charisma}</Text>
            <Image source={strengthIcon} style={styles.icon} />
            <Text style={styles.property}> {person.stats.strength}</Text>
            <Image source={lightbulbIcon} style={styles.icon} />
            <Text style={styles.property}> {person.stats.intelligence}</Text>
            <Image source={speakIcon} style={styles.icon} />
            <Text style={styles.property}> {person.stats.charisma}</Text>
          </View>
        </View>
        <View style={styles.traitsContainer}>
          <Text style={styles.h2}>Traits:</Text>
          <View style={styles.traits}>
            {person.traits.map((trait, index) => (
              <Image key={index} source={trait.image} style={styles.trait} />
            ))}
          </View>
        </View>
        <View style={styles.familyTreeContainer}>
          <Text style={styles.h2}>Family: </Text>
          <View style={styles.familyBranch}>
            <Text>Parents:</Text>
            <View style={styles.branchMembers}>
              {person.family.parents.map((familyMember, index) => (
                <View key={index}>
                  <Image
                    source={familyMember.portrait}
                    style={styles.familyMember}
                  />
                  <Text>{familyMember.name}</Text>
                </View>
              ))}
            </View>
            <View style={styles.familyBranch}>
              <Text>Siblings:</Text>
              <View style={styles.branchMembers}>
                {person.family.siblings.map((familyMember, index) => (
                  <View key={index}>
                    <Image
                      source={familyMember.portrait}
                      style={styles.familyMember}
                    />
                    <Text>{familyMember.name}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.familyBranch}>
              <Text>Children:</Text>
              <View style={styles.branchMembers}>
                {person.family.children.map((familyMember, index) => (
                  <View key={index}>
                    <Image
                      source={familyMember.portrait}
                      style={styles.familyMember}
                    />
                    <Text>{familyMember.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        <ScrollView style={styles.infoContainer}>
          <Text style={styles.debugContainer}>{log(person)}</Text>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
});

Person.displayName = "Person";

Person.propTypes = {
  person: PropTypes.shape({
    portrait: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    gold: PropTypes.number.isRequired,
    prestige: PropTypes.number.isRequired,
    stats: PropTypes.shape({
      strength: PropTypes.number.isRequired,
      intelligence: PropTypes.number.isRequired,
      charisma: PropTypes.number.isRequired,
    }).isRequired,
    traits: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.any.isRequired,
      }),
    ).isRequired,
    family: PropTypes.shape({
      parents: PropTypes.arrayOf(
        PropTypes.shape({
          portrait: PropTypes.any.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ).isRequired,
      siblings: PropTypes.arrayOf(
        PropTypes.shape({
          portrait: PropTypes.any.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ).isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          portrait: PropTypes.any.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Person;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    marginTop: "10%",
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#9e8c72",
  },
  divider: {
    borderBottomColor: "#222",
    marginVertical: 25,
    justifyContent: "center",
    marginHorizontal: "25%",
  },
  portraitContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
  },
  headerInfoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  portrait: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "3%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    width: "100%",
  },
  h2: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    color: "#d4af37",
  },
  property: {
    fontSize: 15,
    marginBottom: 5,
    color: "#fff",
  },
  statsContainer: {
    height: "5%",
    width: "100%",
    marginBottom: 10,
    backgroundColor: "darkgray",
  },
  statsRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  traitsContainer: {
    height: "8%",
    width: "100%",
    paddingHorizontal: "3%",
    marginBottom: "5%",
  },
  traits: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  trait: {
    width: 32,
    height: 32,
    borderRadius: 20,
    margin: 5,
  },
  familyTreeContainer: {
    height: "20%",
    width: "100%",
    paddingHorizontal: "3%",
  },
  branchMembers: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  familyMember: {
    width: 45,
    height: 45,
    borderRadius: 20,
    margin: 5,
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
  debugContainer: {
    width: "100%",
  },
  infoContainer: {
    marginBottom: "25%",
  },
});
