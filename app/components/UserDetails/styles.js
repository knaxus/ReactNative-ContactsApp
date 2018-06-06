import { StyleSheet, Dimensions } from 'react-native';

import color from '../../config/colors';

const window = Dimensions.get('window');

export const ICON_SIZE = 25;
export default StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    image: {
        width: window.width / 2,
        height: window.width / 2,
        borderRadius: window.width / 4,
    },
    name: {
        fontSize: 22,
        marginTop: 10,
        color: color.primaryText,
    },
    actionContainer: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopColor: color.border,
        borderBottomColor: color.border,
        paddingVertical: 15,
        backgroundColor: color.grayBackground,
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    actionInfo: {
        flexDirection: 'column',
    }, 
    actionLabel: {
        fontSize: 12,
        color: color.subtleText,
        marginBottom: 3,
    },
    actionBody: {
        fontSize: 16,
        color: color.primaryText,
        marginBottom: 5,
    },
    actioIcons: {
        flexDirection: 'row',
    },
    actionIcon: {
        marginLeft: 13,
    },
});