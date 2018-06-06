import { StackNavigator } from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';

import { capitalizeFirstLetter } from '../helpers/string';

export const ContactStack = StackNavigator({
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
