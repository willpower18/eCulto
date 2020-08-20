import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import styles from './styles';

export default function Home() {
    //Estado da Aplicação
    const [igrejas, setIgrejas] = useState([]);
    const [showLoading, setShowLoading] = useState(false);
    //Navegação
    const navigation = useNavigation();
    const route = useRoute();

    function navigateToCultos(idChurch) {
        navigation.navigate('Cultos',{idChurch});
    }
    
    //Funcoes
    async function getData() {
        setShowLoading(true);
        const response = await api.get(`api/Igrejas?key=AIzaSyBuDB2x3H88svwDRtqC8L7JpXxuG4b2NAY`)
            .catch(function (error){
                setShowLoading(false);
                alert('Não foi possível obter a lista de igrejas!');
            });

        if(response.status === 200){
            setIgrejas(response.data);
            setShowLoading(false);
        }
    }

    async function getAppKey(){
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        try{
            const value = await AsyncStorage.getItem('@App_Key');
            if(value !== null) {
                return;
            }
            else{
                let text = "";
                for (let i = 0; i < 25; i++){
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                await AsyncStorage.setItem('@App_Key', text)
            }
        }
        catch(e){
            let text = "";
            for (let i = 0; i < 25; i++){
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            await AsyncStorage.setItem('@App_Key', text)
        }
    }

    useEffect(() => {
        const teste = navigation.addListener('focus', () => {
            getData();
            getAppKey();
        });
    }, []);
    //Retorno
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.png')} />
                <Text style={styles.headerText}></Text>
                <Text style={styles.headerText}><Text style={{ color: '#8b57c9' }}>e</Text>Culto</Text>
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
            <ActivityIndicator size="large" color="#95c957" animating={showLoading}/>
            <FlatList
                data={igrejas}
                keyExtractor={igreja => String(igreja.idIgreja)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: igreja }) => (
                    <View style={styles.dashBoard2}>
                        <View style={styles.dashBoardHeader}>
                            <Text style={styles.titleDash}>{igreja.nome}</Text>
                            <Text style={styles.titleDash}></Text>
                            <FontAwesome5 name="church" size={20} color="#7f7f7f" />
                        </View>
                        <View style={styles.currency}>
                            <Text style={styles.fontCurrency}>{igreja.endereco}, {igreja.numero} - {igreja.bairro}</Text>
                        </View>
                        <View style={styles.currency}>
                            <Text style={styles.fontCurrency}>{igreja.responsavel}</Text>
                        </View>
                        <View style={styles.currency}>
                            <Text style={styles.fontCurrency}>{igreja.tradicao}</Text>
                        </View>
                        <View style={styles.progressBar}>
                            <Button icon="clock" labelStyle={{ color: '#fff' }} mode="contained" color='#95c957' onPress={() => navigateToCultos(igreja.idIgreja)}>
                                Ver Horários
                        </Button>
                        </View>
                    </View>
                )}
            />
            <View>
                <Text style={styles.wb}><FontAwesome5 name="copyright" size={11} color="8b57c9" /> WB Systems - Soluções em Informática</Text>
            </View>
        </SafeAreaView>
    );
}