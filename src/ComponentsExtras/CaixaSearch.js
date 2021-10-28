import React from 'react';
import { Image, Text, Alert, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Api from '../Services/Api';

const Box = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
`;

const CaixaInput = styled.View`
    flex: 1;
    background-color: #A7EAF4;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    margin-right: 10px;
    align-items: center;
`;

const BoxButton = styled.TouchableOpacity`
    height: 50px;
    width: 80px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background-color: #268;
`;

const Texto = StyleSheet.create({
    TextoBotao: {
        fontSize: 16,
        fontFamily: "Roboto-Bold",
        color: "#A7EAF4",
    },
});

const Icons = StyleSheet.create({
    imagens: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
});

const Input = styled.TextInput`
    flex: 0.95;
    font-family: Roboto-Bold;
    font-size: 16px;
    color: #268596;
    margin-left: 15px;
`;

export default ({source, placeholder, valor, editarTexto, opcao}) => {
    const navigation = useNavigation();
    const buscarServico = async () => {
        let resultado = await Api.getServico(valor);
        if (resultado) {
            navigation.navigate('SearchServico', {servico: opcao, dados: resultado});
        } else {
            Alert.alert(
                "Não foi possível carregar o serviço", 
                "Serviço não encontrado!",
                [
                    {text: 'VOLTAR', onPress: () => {navigation.navigate('HomeStack')}},
                 ]
             ); 
        }
    }

    return (
        <Box>
            <CaixaInput>
                <Image style={Icons.imagens} source={source} />
                <Input 
                    placeholder={placeholder}
                    placeholderTextColor="#268596"
                    value={valor}
                    onChangeText={editarTexto}
                />
            </CaixaInput>
            <BoxButton onPress={()=>buscarServico()}>
                <Text style={Texto.TextoBotao}>BUSCAR</Text>
            </BoxButton>
        </Box>
    );
};