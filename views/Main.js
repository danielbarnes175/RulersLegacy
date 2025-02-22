import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import EventHistory from './components/EventHistory';
import EventModal from './components/EventModal';

export default function Main({ eventHistory, modalVisible, currentEvent, handleClose }) {
  return (
    <View style={styles.scrollView}>
      <Text style={styles.header}>Events</Text>
      <ScrollView>
      <EventHistory eventHistory={eventHistory} />
      </ScrollView>
      <EventModal visible={modalVisible} event={currentEvent} handleClose={handleClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffe',
    paddingHorizontal: 62,
    height: '60%',
    width: '100%',
    paddingVertical: 20
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    color: '#d4af37'
  }
});
