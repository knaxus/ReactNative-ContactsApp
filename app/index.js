import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Contacts from './screens/Contacts';
import Details from './screens/Details';
import Me from './screens/Me';
import NewContact from './screens/NewContact';

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Contacts />
        <Details />
        <Me />
        <NewContact />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  }
})

export default App;
