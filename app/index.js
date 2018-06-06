import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ContactStack } from './config/router.js';

export class App extends Component {
  render() {
    return (
      <ContactStack />
    )
  }
};

export default App;
