import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text'
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

export default function Participacao() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [qtdCriancas, setqtdCriancas] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerBrand}>Igreja Batista Betel</Text>
                <Text style={styles.headerText}></Text>
                <FontAwesome5 name="user-plus" size={30} color="#8b57c9" />
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Culto de Celebração 12/08/2020 19:30</Text>
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
                <Text style={{ fontSize: 12, marginBottom: 5 }}>* Quantidade de Crianças Acima de 12 anos</Text>
                <Button icon="check" labelStyle={{ color: '#fff' }} mode="contained" color='#95c957' onPress={() => { }}>
                    Confirmar
                </Button>
            </View>
        </SafeAreaView>
    );
}