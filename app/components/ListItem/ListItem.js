import React from 'react';
import { View, Text, TouchableHighlight, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { CHEVRON_SIZE } from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';
import colors from '../../config/colors';

const ListItem = ({contact, onPress}) => {
    const name = `${capitalizeFirstLetter(contact.name.first)} ${capitalizeFirstLetter(contact.name.last)}`;
    return (
      <TouchableHighlight
        onPress={onPress}
      >
        <View style={styles.row}>
            <Image
                source={{ uri: contact.picture.thumbnail }}
                style={styles.avatar}
            />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{contact.email}</Text>
            </View>
        </View>
      </TouchableHighlight>
    );
};

export default ListItem;
