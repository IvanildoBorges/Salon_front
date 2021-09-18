import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #7ECAD7;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const BoxImagem = StyleSheet.create({
    Box: {
        paddingTop: 90,
        alignItems: "center",
        justifyContent: "center",
    },
});

export const AreaDeEntrada = styled.View`
    padding: 40px;
    width: 100%;
`;

export const BotaoCustomizado = styled.TouchableOpacity`
    height: 50px;
    background-color: #268596;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
`;

export const TituloDoBotao = StyleSheet.create({
    Titulo: {
        fontFamily: "Roboto-Bold",
        color: "#7ECAD7",
        fontSize: 34,
        lineHeight: 40,
        letterSpacing: 0.4,
    },
});

export const AreaDeCadastro = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const TextoCadastro = StyleSheet.create({
    Titulo: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: "#268596",
        lineHeight: 20,
        alignItems: "center",
        marginRight: 5,
    },
});

export const TextoCadastroBold = StyleSheet.create({
    Titulo: {
        fontFamily: "Roboto-Bold",
        fontSize: 16,
        color: "#268596",
        lineHeight: 20,
        letterSpacing: 0.4,
        alignItems: "center",
    },
});