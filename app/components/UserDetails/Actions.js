import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import colors from '../../config/colors';
import { toPhoneNumber } from '../../helpers/string';
import ActionRow from './ActionRow';

const Actions = ({ email, cell, phone }) => {
    return (

        // Actions Container
        <View style={styles.actionContainer}>

            {/* Email Details Row */}
            <ActionRow 
                label="Email"
                body={email}
                actions={[
                    {
                        onPress: () => null, 
                        iosIcon: 'ios-mail', 
                        androidIcon: 'md-mail',
                        iconColor: colors.mailIconColor,
                    }
                ]}
            />
            {/* Cell Phone Row */}
            <ActionRow 
                label="Cell"
                body={toPhoneNumber(cell)}
                actions={[
                    {
                        onPress: () => null, 
                        iosIcon: 'ios-call', 
                        androidIcon: 'md-call',
                        iconColor: colors.callIconColor,
                    },
                    {
                        onPress: () => null, 
                        iosIcon: 'ios-text', 
                        androidIcon: 'md-text',
                        iconColor: colors.textIconColor,
                    }
                ]}
            />
            {/* Home Phone Row */}
            <ActionRow 
                label="Home"
                body={toPhoneNumber(phone)}
                actions={[
                    {
                        onPress: () => null, 
                        iosIcon: 'ios-call', 
                        androidIcon: 'md-call',
                        iconColor: colors.callIconColor,
                    }
                ]}
            />
        </View>
    );
};

export default Actions;