import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

export default function Participacao(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerBrand}>Igreja Batista Betel</Text>
                <Text style={styles.headerText}></Text>
                <FontAwesome5 name="church" size={30} color="#8b57c9" />
            </View>
        </SafeAreaView>
    );
}