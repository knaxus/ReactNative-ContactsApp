import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import styles from './styles';
import ActionRow from './ActionRow';
import { capitalizeFirstLetter } from '../../helpers/string';

const Info = ({ login, dob, location, registered }) => {
    return (
        <View style={styles.infoContainer}>
            <ActionRow 
                label='City'
                body={capitalizeFirstLetter(location.city)}
            />
            <ActionRow 
                label='Birthday'
                body={moment(dob).format('MMMM Do, YYYY')}
            />
            <ActionRow 
                label='Registered'
                body={moment(registered).format('MMMM Do, YYYY')}
            />
            <ActionRow 
                label='Username'
                body={login.username}
            />
        </View>
    );
};

export default Info;