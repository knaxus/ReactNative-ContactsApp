import React from 'react';
import { View, Text, TouchableHighlight, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { CHEVRON_SIZE } from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';
import colors from '../../config/colors';

const ListItem = ({contact, onPress}) => {
    return (
      <TouchableHighlight
        onPress={onPress}
      >
        <View>
            <Image
                source={{ uri: contact.picture.thumbnail }}
                style={styles.avatar}
            />
        </View>
      </TouchableHighlight>
    );
};

export default ListItem;
