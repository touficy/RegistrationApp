import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export default StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    logintxt: {
        color: colors.primary,
        fontFamily:'open-sans-bold'
    },
});