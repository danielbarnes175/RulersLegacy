import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { log } from '../helpers/debug';

export default function Person({ person, onClose }) {
  let [personViewVisible, setPersonViewVisible] = useState(false);
  let [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('assets/textures/paper.webp')} style={styles.bg}>
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
          <Image source={require('assets/icons/strength.png')} style={styles.icon} /><Text style={styles.property}> {person.stats.strength}</Text>
          <Image source={require('assets/icons/lightbulb.png')} style={styles.icon} /><Text style={styles.property}> {person.stats.intelligence}</Text>
          <Image source={require('assets/icons/speak.png')} style={styles.icon} /><Text style={styles.property}> {person.stats.charisma}</Text>
          <Image source={require('assets/icons/strength.png')} style={styles.icon} /><Text style={styles.property}> {person.stats.strength}</Text>
          <Image source={require('assets/icons/lightbulb.png')} style={styles.icon} /><Text style={styles.property}> {person.stats.intelligence}</Text>
          <Image source={require('assets/icons/speak.png')} style={styles.icon} /><Text style={styles.property}> {person.stats.charisma}</Text>
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
            <TouchableOpacity onPress={() => { setSelectedPerson(familyMember); setPersonViewVisible(true); }}>
              <Image source={familyMember.portrait} style={styles.familyMember}></Image>
              <Text>{familyMember.name}</Text>
            </TouchableOpacity>
          ))}
          </View>
          <View style={styles.familyBranch}>
          <Text>Siblings:</Text>
          <View style={styles.branchMembers}>
          {person.family.siblings.map((familyMember, index) => (
            <TouchableOpacity onPress={() => { setSelectedPerson(familyMember); setPersonViewVisible(true); }}>
              <Image source={familyMember.portrait} style={styles.familyMember}></Image>
              <Text>{familyMember.name}</Text>
            </TouchableOpacity>
          ))}
          </View>
          </View>
          <View style={styles.familyBranch}>
          <Text>Children:</Text>
          <View style={styles.branchMembers}>
          {person.family.children.map((familyMember, index) => (
            <TouchableOpacity onPress={() => { setSelectedPerson(familyMember); setPersonViewVisible(true); }}>
              <Image source={familyMember.portrait} style={styles.familyMember}></Image>
              <Text>{familyMember.name}</Text>
            </TouchableOpacity>
          ))}
          </View>
          </View>
        </View>
      </View>
      
      <ScrollView style={styles.infoContainer}>
        <Text style={styles.debugContainer}>
          {log(person)}
        </Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    marginTop: '10%',
    padding: 15,
    flexDirection: "row",
    backgroundColor: '#9e8c72',
  },
  divider: {
    borderBottomColor: '#222',
    marginVertical: 25,
    justifyContent: 'center',
    marginHorizontal: '25%'
  },
  portraitContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
  },
  headerInfoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  portrait: {
      width: '100%',
      height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    width: '100%'
  },
  h2: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 5,
      color: '#d4af37'
  },
  property: {
      fontSize: 15,
      marginBottom: 5,
      color: '#fff'
  },
  statsContainer: {
    height: '5%',
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'darkgray'
  },
  statsRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  traitsContainer: {
    height: '8%',
    width: '100%',
    paddingHorizontal: '3%',
    marginBottom: '5%'
  },
  traits: {
    flexDirection:'row', flexWrap:'wrap'
  },
  trait: {
    width: 32,
    height: 32,
    borderRadius: 20,
    margin: 5
  },
  familyTreeContainer: {
    height: '20%',
    width: '100%',
    paddingHorizontal: '3%'
  },
  branchMembers: {
    flexDirection:'row', flexWrap:'wrap'
  },
  familyMember: {
    width: 45,
    height: 45,
    borderRadius: 20,
    margin: 5
  },
  button: {
      backgroundColor: '#333',
      padding: 10,
      borderRadius: 5,
  },
  buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      justifyContent: 'center'
  },
  icon: {
    width: 32,
    height: 32
  },
  debugContainer: {
    width: '100%',
  },
  infoContainer: {
    marginBottom: '25%',
  }
});