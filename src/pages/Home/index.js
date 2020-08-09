import React from 'react';
import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';

export default function Home() {
    const navigation = useNavigation();
    const route = useRoute();

    function navigateToCultos(){
        navigation.navigate('Cultos');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.png')}/>
                <Text style={styles.headerText}></Text>
                <Text style={styles.headerText}><Text style={{color:'#8b57c9'}}>e</Text>Culto</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.about}>Confirme sua presença em eventos religiosos.</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.about2}>Ajude igrejas a atenderem as exigências sanitárias confirmando sua presença no culto.</Text>
            </View>
            <View>
                <Text style={styles.titleChurch}>Igrejas Credenciadas</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.dashBoard}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Igreja Batista Betel</Text>
                        <Text style={styles.titleDash}></Text>
                        <FontAwesome5 name="church" size={20} color="#7f7f7f" />
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>Rua Olavo Bilac, 000 - São Benedito</Text>
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>Pr. Valmir Andrade</Text>
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>Cristã - Evangélica</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <Button icon="clock" labelStyle={{ color: '#fff' }} mode="contained" color='#95c957' onPress={navigateToCultos}>
                            Ver Horários
                        </Button>
                    </View>
                </View>
                <View style={styles.dashBoard2}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Igreja Batista Memorial</Text>
                        <Text style={styles.titleDash}></Text>
                        <FontAwesome5 name="church" size={20} color="#7f7f7f" />
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>Rua Teste, 000 - Centro</Text>
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>Pr. Valcir Alves</Text>
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>Cristã - Evangélica</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <Button icon="clock" labelStyle={{ color: '#fff' }} mode="contained" color='#95c957' onPress={navigateToCultos}>
                            Ver Horários
                        </Button>
                    </View>
                </View>
                <View style={styles.dashBoard2}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>Comunidade Monte Santo</Text>
                        <Text style={styles.titleDash}></Text>
                        <FontAwesome5 name="church" size={20} color="#7f7f7f" />
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>Rua Teste, 000 - Centro</Text>
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>Pr. Guto Ferraz</Text>
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>Cristã - Evangélica</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <Button icon="clock" labelStyle={{ color: '#fff' }} mode="contained" color='#95c957' onPress={navigateToCultos}>
                            Ver Horários
                        </Button>
                    </View>
                </View>
            </ScrollView>
            <View>
                <Text style={styles.wb}><FontAwesome5 name="copyright" size={11} color="8b57c9"/> WB Systems - Soluções em Informática</Text>
            </View>
        </SafeAreaView>
    );
}