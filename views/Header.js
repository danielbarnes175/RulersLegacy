import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { stopTimer, startTimer, isTimerRunning } from '../helpers/simulation/time';
import Person from './Person';
import GameMenu from './GameMenu';
import burgerIcon from '../assets/burger.png';

export default function Header({ world }) {
  const [playerProfileVisible, setPlayerProfileVisible] = useState(false);
  const [menuListVisible, setMenuListVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => { stopTimer(); setPlayerProfileVisible(true); }}
        style={{ position: 'absolute', left: 30 }}
      >
        <Image source={world.player.portrait} style={styles.picture} />
      </TouchableOpacity>
      <Modal visible={playerProfileVisible}>
        <Person person={world.player} onClose={() => { if (!isTimerRunning()) { startTimer(); } setPlayerProfileVisible(false); }} />
      </Modal>
      <View>
        <Text>{world.player.name}</Text>
        <Text>{world.date}</Text>
      </View>
      <View style={{ position: 'absolute', right: 15 }}>
        <TouchableOpacity onPress={() => { stopTimer(); setMenuListVisible(true); }}>
          <Image source={burgerIcon} style={styles.burgerMenuIcon} />
        </TouchableOpacity>
        <Modal visible={menuListVisible}>
          <GameMenu world={world} onClose={() => { if (!isTimerRunning()) { startTimer(); } setMenuListVisible(false); }} />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  picture: {
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 'auto',
  },
  burgerMenuIcon: {
    width: 60,
    height: 60,
    marginLeft: 'auto', // aligns the icon to the right
  },
});
