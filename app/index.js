import React, { Component } from 'react';
import { View, Platform } from 'react-native';

import { Tabs, Drawer } from './config/router.js';

export class App extends Component {
  render() {
    if(Platform.OS === 'ios')
      return <Tabs />
    else
      return (
          <Drawer />
      )
  }
};

export default App;
