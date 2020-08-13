import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import api from '../../services/api';
import styles from './styles';

export default function Participacao() {
    //Navegação
    const navigation = useNavigation();
    const route = useRoute();

    //Estado da Aplicação
    const [appKey, setAppKey] = useState('');
    const [idCulto, setIdCulto] = useState(route.params.idCulto);
    const [nomeIgreja, setNomeIgreja] = useState(route.params.idIgreja);
    const [nomeCulto, setNomeCulto] = useState('');
    const [horaCulto, setHoraCulto] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [qtdCriancas, setqtdCriancas] = useState('');

    //Funcoes
    async function getAppKey(){
        try{
            const value = await AsyncStorage.getItem('@App_Key');
            if(value !== null) {
                setAppKey(value);
            }
            else{
                setAppKey('-');
            }
        }
        catch(e){
            setAppKey('-');
        }
    }

    async function handleSubmit() {
        if(nome === ''){
            alert('Por Favor preencha o Nome!');
            return;
        }

        if(telefone === ''){
            alert('Por Favor preencha o Telefone!');
            return;
        }
        let criancas = 0;
        if(qtdCriancas !== ''){
            criancas = parseInt(qtdCriancas);
            if(criancas > 2){
                alert('É permitido confirmar no máximo 2 crianças.');
                return;
            }
        }
        
        const data = {
            key: "AIzaSyBuDB2x3H88svwDRtqC8L7JpXxuG4b2NAY",
            participacao: {
                IdParticipacao: 0,
                IdCulto: idCulto,
                Nome: nome,
                Telefone: telefone,
                ChaveApp: appKey,
                QtdCriancas: criancas,
                QtdAdultos: 1,
                Confirmado: 0
            }
        };

        const response = await api.post("api/participacao", data)
            .catch(function (error) {
                if (error.response.status === 401) {
                    alert('Sua presença já esta confirmada!');
                }
                else if (error.response.status === 406) {
                    alert('Capacidade do evento foi atingida, não foi possível confirmar!');
                }
                else {
                    alert('Não foi possível confirmar, tente novamente mais tarde.');
                }
            });
        if (response.status === 200) {
            alert('Presença Confirmada com Sucesso!');
            setNome('');
            setTelefone('');
            setqtdCriancas('');
        }             
       
    }

    async function getData() {
        const response = await api.get(`api/participacao/${idCulto}?key=AIzaSyBuDB2x3H88svwDRtqC8L7JpXxuG4b2NAY`);
        setNomeCulto(response.data.nome);
        setHoraCulto(response.data.dataHora);
    }

    useEffect(() => {
        const loadData = navigation.addListener('focus', () => {
            getData();
            getAppKey();
        });
    }, []);

    //Retorno
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerBrand}>{nomeIgreja}</Text>
                <Text style={styles.headerText}></Text>
                <FontAwesome5 name="user-plus" size={30} color="#8b57c9" />
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>{nomeCulto} às {moment(horaCulto).format("DD/MM/YYYY HH:mm")}</Text>
            </View>
            <View style={styles.dashBoard}>
                <Text style={styles.headerText}>Preencha os dados abaixo:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType={'default'}
                    maxLength={100}
                    placeholder={"Nome Completo"}
                    value={nome}
                    autoCompleteType={"off"}
                    onChangeText={text => setNome(text)}
                />
                <TextInputMask
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    value={telefone}
                    onChangeText={text => {
                        setTelefone(text)
                    }}
                    style={styles.input}
                    placeholder={"Telefone"}
                />
                <TextInput
                    style={styles.input}
                    keyboardType={'numeric'}
                    maxLength={100}
                    placeholder={"Crianças"}
                    value={qtdCriancas}
                    autoCompleteType={"off"}
                    onChangeText={text => setqtdCriancas(text)}
                />
                <Text style={{ fontSize: 12, marginBottom: 5 }}>* Quantidade de Crianças Acima de 7 anos</Text>
                <Button icon="check" labelStyle={{ color: '#fff' }} mode="contained" color='#95c957' onPress={() => handleSubmit()}>
                    Confirmar
                </Button>
            </View>
        </SafeAreaView>
    );
}