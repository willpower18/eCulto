import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ProgressBar, Button } from 'react-native-paper';
import styles from './styles';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerBrand}>Igreja Batista Betel</Text>
                <Text style={styles.headerText}></Text>
                <FontAwesome5 name="user-clock" size={30} color="#bf262f" />
            </View>
            <View style={styles.header}>
                <Text style={styles.about}>Escolha um horário de culto disponível abaixo e confirme sua presença</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Culto de Celebração</Text>
                        <Text style={styles.titleDash}></Text>
                        <FontAwesome5 name="clock" size={20} color="#62402a" />
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>Pr. Valmir Andrade</Text>
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>09/08/2020 20:00</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <ProgressBar progress={0.5} color='#bf262f' />
                    </View>
                    <View style={styles.progressBar}>
                        <Button icon="check" labelStyle={{ color: '#fff' }} mode="contained" color='#2fbf26' onPress={() => { }}>
                            Quero Participar
                    </Button>
                    </View>
                </View>
                <View style={styles.dashBoard2}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>TADEL</Text>
                        <Text style={styles.titleDash}></Text>
                        <FontAwesome5 name="clock" size={20} color="#62402a" />
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>Pr. Valmir Andrade</Text>
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>12/08/2020 20:00</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <ProgressBar progress={0.8} color='#bf262f' />
                    </View>
                    <View style={styles.progressBar}>
                        <Button icon="check" labelStyle={{ color: '#fff' }} mode="contained" color='#2fbf26' onPress={() => { }}>
                            Quero Participar
                    </Button>
                    </View>
                </View>
                <View style={styles.dashBoard2}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Culto de Adoração</Text>
                        <Text style={styles.titleDash}></Text>
                        <FontAwesome5 name="clock" size={20} color="#62402a" />
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>Pr. Paulo Arantes</Text>
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>14/08/2020 19:00</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <ProgressBar progress={1} color='#bf262f' />
                    </View>
                    <View style={styles.progressBar}>
                        <Button icon="close" disabled={true} labelStyle={{ color: '#fff' }} mode="contained" color='#bf262f' onPress={() => { }}>
                            Esgotado
                    </Button>
                    </View>
                </View>
                <View style={styles.dashBoard2}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Culto de Adoração</Text>
                        <Text style={styles.titleDash}></Text>
                        <FontAwesome5 name="clock" size={20} color="#62402a" />
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>Pr. Paulo Arantes</Text>
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>14/08/2020 19:00</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <ProgressBar progress={0.2} color='#bf262f' />
                    </View>
                    <View style={styles.progressBar}>
                        <Button icon="check" labelStyle={{ color: '#fff' }} mode="contained" color='#2fbf26' onPress={() => { }}>
                            Quero Participar
                    </Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}