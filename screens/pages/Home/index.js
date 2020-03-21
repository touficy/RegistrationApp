/* Libraries That Needed */
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

import Button from '../../../components/UI/Button';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/actions/auth';
const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const onLogout = async () => {
        await dispatch(logout());
        navigation.navigate('login');
    };
    // View 
    return (
        // SafeAreaView Used To Fix Design In Notch Screen Phones
        <View style={styles.screen}>
            <Text>Hi From Home</Text>
            <Button onPress={onLogout}>
                <Text style={styles.logintxt}>Logout</Text>
            </Button>
        </View>
    );
};

export { Home };
