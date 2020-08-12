import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ProgressBar, Button } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import styles from './styles';

export default function Cultos(){
    //Navegacao
    const navigation = useNavigation();
    const route = useRoute();

    function navigateToParticipacao(idCulto){
        navigation.navigate('Participacao',{idCulto});
    }

    //Estado da Aplicacao
    const [idIgreja, setIdIgreja] = useState(route.params.idChurch);
    const [nomeIgreja, setNomeIgreja] = useState('');
    const [cultos, setCultos] = useState([]);
    const [capacidade, setCapacidade] = useState(0);
    //Funcoes
    async function getData(){
        const response = await api.get(`api/Igrejas/${idIgreja}?key=AIzaSyBuDB2x3H88svwDRtqC8L7JpXxuG4b2NAY`);
        setCapacidade(response.data.capacidade);
        setNomeIgreja(response.data.nomeIgreja);
        setCultos(response.data.cultos);
    }

    useEffect(() => {
        const loadData = navigation.addListener('focus', () => {
            getData();
        });
    }, []);

    //Retorno
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerBrand}>{nomeIgreja}</Text>
            <Text style={styles.headerText}></Text>
            <FontAwesome5 name="church" size={30} color="#8b57c9" />
        </View>
        <View style={styles.header2}>
            <Text style={styles.about}>Escolha um horário de culto disponível abaixo e confirme sua presença</Text>
        </View>
        <FlatList 
            data={cultos}
            keyExtractor={culto => String(culto.idCulto)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: culto }) => (
                <View style={styles.dashBoard2}>
                    <View style={styles.dashBoardHeader}>
                        <Text style={styles.titleDash}>{culto.nome}</Text>
                        <Text style={styles.titleDash}></Text>
                        <FontAwesome5 name="clock" size={20} color="#7f7f7f" />
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>{culto.preletor}</Text>
                    </View>
                    <View style={styles.currency}>
                        <Text style={styles.fontCurrency}>{culto.dataHora}</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <ProgressBar progress={0.5} color='#8b57c9' />
                    </View>
                    <View style={styles.progressBar}>
                        <Button icon="check" labelStyle={{ color: '#fff' }} mode="contained" color='#95c957' onPress={() => navigateToParticipacao(culto.idCulto)}>
                            Quero Participar
                        </Button>
                    </View>
                </View>
            )}
        />
        <View>
            <Text style={styles.wb}><FontAwesome5 name="copyright" size={11} color="8b57c9"/> WB Systems - Soluções em Informática</Text>
        </View>
    </SafeAreaView>
    );
}