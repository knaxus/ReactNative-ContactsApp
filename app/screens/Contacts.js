import React, { Component, ReactPropTypes } from 'react';
import { View, Text, FlatList } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';
import { ListItem, styles } from '../components/ListItem/index';

class Contacts extends Component {

    handleRowPress = (item) => {
        return null;
    };

    render() {
        return (
        <FlatList
            style={{ backgroundColor: colors.background }}
            data={contacts}
            renderItem={({ item }) => 
                <ListItem contact={item} onPress={() => this.handleRowPress(item)} />
            }
            keyExtractor={(item) => item.email} 
            />
        );
    }
}

export default Contacts;
