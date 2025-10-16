import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default function EventModal({ visible, event, handleClose, player }) {
  if (event) {
    return (
      <View style={styles.container} visible={visible} backdropColor={'white'}
        backdropOpacity={1} >
        <View style={styles.modalView}>
          <Text style={styles.title}>{event.name}</Text>
          <View style={styles.divider}></View>
          <Text>{event.description}</Text>
          <Text></Text><Text></Text>
          {event.choices.map((choice, i) => (
            <Button key={i} title={choice.text} onPress={() => {
              handleClose();
              choice.effect(player);
            }} />
          ))}
        </View>
      </View>
    );
  } else {
    return (
      <View />
    )
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
  },
  modalView: {
    backgroundColor: '#0f0',
    borderRadius: 10,
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    color: '#000'
  },
  divider: {
    borderBottomColor: '#222',
    borderBottomWidth: 2,
    marginRight: '40%',
    marginBottom: '5%',
    marginVertical: 5,
    justifyContent: 'center',
  },
});
