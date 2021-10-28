import React from 'react';
import { StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const BoxServico = styled.TouchableOpacity`
    width: 100%;
    height: 130px;
    border-radius: 30px;
    background-color: #FFF;
    margin: 0px 0px 28px 0px;
    padding: 5% 10% 0% 10%;
`;

const BoxText = styled.View`
    align-items: baseline;
    margin-bottom: 3px;
`;

const BoxTextInLine = styled.View`
    flex-direction: row;
    margin-bottom: 5px;
`;

const TextLeft = styled.View`
    width: 50%;
    align-items: baseline;
`;

const TextRight = styled.View`
    width: 50%;
    align-items: flex-end;
`;

const BoxButton = styled.View`
    align-items: center;
`;

const BoxInput = styled.TouchableOpacity`
    background-color: #268596;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 30px;
`;

const Texto = StyleSheet.create({
    Nome: {
        fontFamily: "Roboto-Bold",
        fontSize: 14,
        color: "#000",
        lineHeight: 20,
        letterSpacing: 0.4,
    },
    Descricao: {
        fontFamily: "Roboto-Regular",
        fontSize: 14,
        color: "#000",
        lineHeight: 20,
        letterSpacing: 0.4,
    },
    Preco: {
        fontFamily: "Roboto-Regular",
        fontSize: 14,
        color: "#000",
        lineHeight: 20,
        letterSpacing: 0.4,
    }, 
    Valor: {
        fontFamily: "Roboto-Bold",
        fontSize: 14,
        color: "#000",
        lineHeight: 20,
        letterSpacing: 0.4,
    }, 
    NomeButton: {
        fontFamily: "Roboto-Bold",
        fontSize: 16,
        color: "#A7EAF4",
        lineHeight: 20,
        letterSpacing: 0.4,
    },
});

export default ({data, nome}) => {
    const navigation = useNavigation();

    function agendarServico(){
        navigation.navigate('Agendar', {
            array: data, 
            servico: nome,
        });
    }

    function verificaNumero() {
        if (Number.isInteger(data.valor)) {
            return valor = data.valor+".00";
        } else {
            return valor = data.valor.toFixed(2);
        }
    }

    return(
        <BoxServico onPress={() => agendarServico()}>
            <BoxText>
                <Text style={Texto.Nome}>{data.nome}</Text>
            </BoxText>
            <BoxText>
                <Text style={Texto.Descricao}>{data.descricao}</Text>
            </BoxText>
            <BoxTextInLine>
                <TextLeft>
                    <Text style={Texto.Preco}>Preço:</Text>
                </TextLeft>
                <TextRight>
                    <Text style={Texto.Valor}>R$: {verificaNumero()}</Text>
                </TextRight>
            </BoxTextInLine>
            <BoxButton>
                <BoxInput onPress={() => agendarServico()}>
                    <Text style={Texto.NomeButton}>AGENDAR</Text>
                </BoxInput>
            </BoxButton>
        </BoxServico>
    );
}