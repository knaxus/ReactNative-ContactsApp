import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.primaryText,
    },
    email: {
        fontSize: 13,
        color: colors.subtleText,
    },
});
