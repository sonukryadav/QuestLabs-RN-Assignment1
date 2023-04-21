import { View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from '../styles/Order';

export default function Order() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={styles.textTitle}>Order</Text>
        </SafeAreaView>
    )
}