import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Tabs } from './config/router.js';

export class App extends Component {
  render() {
    return (
      <Tabs />
    )
  }
};

export default App;
