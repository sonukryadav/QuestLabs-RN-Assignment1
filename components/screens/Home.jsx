import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import styles from '../styles/Home';

export default function Home() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={styles.textTitle}>Home</Text>
        </SafeAreaView>
    )
}