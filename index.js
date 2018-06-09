import { AppRegistry } from 'react-native';
import App from './app/index';

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

AppRegistry.registerComponent('ContactsApp', () => App);
