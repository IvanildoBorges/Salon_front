import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    background-color: #7ECAD7;
    padding: 10% 5%;
`;

export const Texto = StyleSheet.create({
    TitleButton: {
        fontFamily: "Roboto-Bold",
        color: "#7ECAD7",
        fontSize: 34,
        lineHeight: 40,
        letterSpacing: 0.4,
    },
    TituloBold: {
        fontFamily: "Roboto-Bold",
        fontSize: 24,
        lineHeight: 24,
        letterSpacing: 0.4,
        textAlign: "center",
        color: "#000000",
        marginBottom: 15,
        marginTop: -2,
    },
    TituloRegular: {
        fontFamily: "Roboto-Regular",
        fontSize: 24,
        lineHeight: 24,
        letterSpacing: 0.4,
        textAlign: "center",
        color: "#000000",
    },
    TituloBoldEsquerda: {
        fontFamily: "Roboto-Bold",
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0.4,
        color: "#000000",
        alignItems: "baseline",
    },
    TituloBoldDireita: {
        fontFamily: "Roboto-Bold",
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0.4,
        color: "#000000",
        alignItems: "baseline"
    },
    TituloMesSemana: {
        fontFamily: "Roboto-Bold",
        fontSize: 20,
        letterSpacing: 0.4,
        lineHeight: 20,
    },
    DiaMonth: {
        fontFamily: "Roboto-Bold",
        fontSize: 14,
    },
    DiaWeekday: {
        fontFamily: "Roboto-Bold",
        fontSize: 14,
    },
});

export const Carregando = styled.ActivityIndicator`
    margin-top: 30px;
`;

export const BoxImagem = styled.TouchableOpacity`
    justify-content: center;
`;

export const Icone = styled.Image`
    width: 31px;
    height: 31px;
    resize-mode: contain;
    margin: 15px 0px;
`;

export const BoxFuncionario = styled.View`
    background-color: #fff;
    border-radius: 20px;
    height: 91px;
    align-items: center;
    justify-content: center;
    margin-bottom: 37px;
`;
export const BoxServico = styled.View`
    background-color: #fff;
    border-radius: 20px;
    height: 62px;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    margin-bottom: 37px;
`;

export const BoxRowLeft = styled.View`
    flex: 1;
    padding-right: 10px;
`;

export const BoxRowRight = styled.View`
    align-items: center;
`;

export const BoxAgendaServicos = styled.View`
    background-color: #fff;
    border-radius: 20px;
    height: 130px;
    margin-bottom: 37px;
    padding: 10px;

`;

export const InfoData = styled.View`
    flex-direction: row;
`;

export const VoltarData = styled.TouchableOpacity`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const TextoData = styled.View`
    width: 160px;
    justify-content: center;
    align-items: center;
`;

export const AvancarData = styled.TouchableOpacity`
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Imagem = StyleSheet.create({
    Dimensoes: {
        width: 20,
        height: 20,
    },
});

export const InfoSemana = styled.ScrollView`

`;

export const DataItem = styled.TouchableOpacity`
    width: 40px;
    height: 63px;
    justify-content: center;
    border-radius: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
`;

export const BoxHorarios = styled.View`
    background-color: #fff;
    border-radius: 20px;
    height: 62px;
    margin-bottom: 37px;
`;

export const BotaoCustomizado = styled.TouchableOpacity`
    height: 50px;
    background-color: #268596;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    margin-bottom: 37px;
`;

