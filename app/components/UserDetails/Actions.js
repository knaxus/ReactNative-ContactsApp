import React from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { ICON_SIZE } from './styles';
import colors from '../../config/colors';
import { toPhoneNumber } from '../../helpers/string';

const Actions = ({ email, cell, phone }) => {
    return (

        // Actions Container
        <View style={styles.actionContainer}>

            {/* Email Details Row */}
            <View style={styles.actionRow}>
                <View style={styles.actionInfo}>
                    <Text style={styles.actionLabel}>Email</Text>
                    <Text style={styles.actionBody}>{email}</Text>
                </View>
                <View style={styles.actionIcons}>
                    <TouchableOpacity
                        onPress={() => null}
                    >
                        <Icon 
                            color={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios'? 'ios-mail' : 'md-mail'}
                        />
                    </TouchableOpacity>
                </View>
                
            </View>

            {/* Cell Phone Row */}
            <View style={styles.actionRow}>
                <View style={styles.actionInfo}>
                    <Text style={styles.actionLabel}>Cell</Text>
                    <Text style={styles.actionBody}>{toPhoneNumber(cell)}</Text>
                </View>
                <View style={styles.actionIcons}>
                    {/* for CALL icon */}
                    <TouchableOpacity
                        onPress={() => null}
                    >
                        <Icon 
                            color={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios'? 'ios-call' : 'md-call'}
                        />
                    </TouchableOpacity>
                    {/* for TEXT MSG/SMS icon */}
                    <TouchableOpacity
                        onPress={() => null}
                    >
                        <Icon 
                            color={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios'? 'ios-text' : 'md-text'}
                        />
                    </TouchableOpacity>
                </View>   
            </View>


            {/* Home Phone Row */}
            <View style={styles.actionRow}>
                <View style={styles.actionInfo}>
                    <Text style={styles.actionLabel}>Home</Text>
                    <Text style={styles.actionBody}>{toPhoneNumber(phone)}</Text>
                </View>
                <View style={styles.actionIcons}>
                    {/* for CALL icon */}
                    <TouchableOpacity
                        onPress={() => null}
                    >
                        <Icon 
                            color={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios'? 'ios-call' : 'md-call'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Actions;