import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Modal, TouchableOpacity, ImageBackground } from 'react-native';
import PeopleList from './PeopleList';
import CommunityList from './CommunityList';

export default function GameMenu({ world, onClose }) {
    const [worldViewVisible, setWorldViewVisible] = useState(false);
    const [communityViewVisible, setCommunityViewVisible] = useState(false);
    const [decisionViewVisible, setDecisionViewVisible] = useState(false);
    const [menuOptions, setMenuOptions] = useState([
      {
        title: 'World',
        subheading: 'See relations with other communities',
        image: require('assets/icons/world.png'),
        onPress: () => handleMenuItemPress('World')
      },
      {
        title: 'Your Community',
        subheading: 'Detailed view of your community',
        image: require('assets/icons/community.png'),
        onPress: () => handleMenuItemPress('Community')
      },
      {
        title: 'Decisions',
        subheading: 'View available choices',
        image: require('assets/icons/decisions.png'),
        onPress: () => handleMenuItemPress('Decisions')
      },
      {
        title: 'Economy',
        subheading: 'Trade and resources',
        image: require('assets/icons/gold.png'),
        onPress: () => handleMenuItemPress('Economy')
      },
      {
        title: 'Laws',
        subheading: 'Change your legal system',
        image: require('assets/icons/laws.png'),
        onPress: () => handleMenuItemPress('Laws')
      },
      {
        title: 'Religion',
        subheading: 'Your community\'s beliefs and practices',
        image: require('assets/icons/religion.png'),
        onPress: () => handleMenuItemPress('Religion')
      },
      {
        title: 'Culture',
        subheading: 'Manage cultural practices and traditions',
        image: require('assets/icons/culture.png'),
        onPress: () => handleMenuItemPress('Culture')
      },
      {
        title: 'Military',
        subheading: 'Manage your community\'s military and defense',
        image: require('assets/icons/military.png'),
        onPress: () => handleMenuItemPress('Military')
      }
    ]);

    const handleMenuItemPress = (category) => {
      switch (category) {
        case 'World':
          setWorldViewVisible(true);
          break;
        case 'Community':
          setCommunityViewVisible(true);
          break;
        case 'Decisions':
          setDecisionsViewVisible(true);
          break;
        case 'SaveAndQuit':
          setSaveAndQuitVisible(true);
          break;
        default:
          break;
      }
    }
  
    return (
      <View style={styles.container}>
        <ImageBackground source={require('assets/textures/paper.webp')} style={styles.bg}>
        <View style={styles.container2} >
        <ScrollView style={styles.scrollview}>
        {menuOptions.map((option, index) => (
          <TouchableOpacity key={index} onPress={option.onPress}>
            <View style={styles.menuItemContainer}>
              <Image source={option.image} style={styles.menuItemImage} />
              <View style={styles.menuItemTextContainer}>
                <Text style={styles.menuItemHeading}>{option.title}</Text>
                <Text style={styles.menuItemSubheading}>{option.subheading}</Text>
              </View>
              <Image source={require('assets/rightArrow.png')} style={styles.menuItemArrow} />
            </View>
          </TouchableOpacity>
        ))}
        </ScrollView>
        <Modal visible={worldViewVisible}>
          <CommunityList world={world} onClose={() => { setWorldViewVisible(false); }} />
        </Modal>
        <Modal visible={communityViewVisible}>
          <PeopleList community={world.communities[0]} onClose={() => { setCommunityViewVisible(false); }} />
        </Modal>
        <Modal visible={decisionViewVisible}>
          <PeopleList world={world} onClose={() => { setDecisionViewVisible(false); }} />
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
  }

  const styles = StyleSheet.create({
    container: {
      position: 'relative',
      alignItems: 'flex-start',
      width: '100%',
      height: '100%',
    },
    container2: {
      flex: 1,
      height: 150,
      marginTop: '15%',
      marginBottom: '5%'
    },
    bg: {
      width: '100%',
      height: '100%'
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000'
    },
    scrollview: {
      marginTop: '5%',
      marginBottom: '10%',
      borderBottomColor: '#eee',
    },
    menuItem: {
      borderBottomWidth: 1,
      padding: 5
    },
    portrait: {
      width: 64,
      height: 64,
      borderRadius: 25,
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '15%',
      width: '100%'
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
    menuItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      backgroundColor: '#F5F5DC',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    menuItemImage: {
      width: 50,
      height: 50,
      marginRight: 15,
    },
    menuItemTextContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    menuItemHeading: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 5,
    },
    menuItemSubheading: {
      fontSize: 14,
      color: '#777',
    },
    menuItemArrow: {
      width: 30,
      height: 30,
    },
  });