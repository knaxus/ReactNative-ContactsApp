import Recat from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

import { capitalizeFirstLetter } from '../helpers/string';

export const ContactStack = createStackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions: {
            title: 'Contacts',
        },
    },
    Details: {
        screen: Details,
        navigationOptions: ({ navigation }) => ({
            title: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`
        }),
    },
});

export const NewContactStack = createStackNavigator({
    NewContact: {
        screen: NewContact,
        navigationOptions: {
            headerTitle: 'New Contact',
        },
    },
});

export const MeStack = createStackNavigator({
    Me: {
        screen: Me,
        navigationOptions: {
            headerTitle: 'Me',
        },
    },
});

export const Tabs = createMaterialTopTabNavigator({
    Contacts: {
        screen: ContactStack,
        navigationOptions: {
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />
        }
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            tabBarLabel: 'New Contact',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor} />
        }
    },
    Me: {
        screen: MeStack,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor} />
        }
    }
});
