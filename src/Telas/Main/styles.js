import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #7ECAD7;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Carregando = styled.ActivityIndicator`
    margin-top: 30px;
`;

export const Estilo = StyleSheet.create({
    Titulo: {
        width: 327,
        height: 140,
        fontFamily: "Roboto-Regular",
        color: "#268596",
        fontSize: 20,
        marginTop: 15,
        marginLeft: "10%",
        marginRight: "10%",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 35,
        letterSpacing: 0.4,
    },
    Items: {
        marginBottom: 30,
        flexDirection: 'row',
    },
    Topic: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: "10%",
        marginLeft: "10%",
    },
    Imagens: {
        width: 63,
        height: 63,
        resizeMode: "contain",
        marginBottom: 5
    },
    Subtitulo: {
        width: 326,
        height: 70,
        fontFamily: "Roboto-Regular",
        fontSize: 34,
        color: "#fff",
        alignItems: "center",
        lineHeight: 35,
        letterSpacing: 0.4,

    },
 });

 export const Caixa = styled.View`
    padding: 25px 0px 15px 0px;
    width: 80%;
`;

export const ButtonCadastro = styled.TouchableOpacity`
    height: 60px;
    background-color: #268596;
    border: 1px;
    border-color: #268596;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

export const ButtonCadastroMensagem = StyleSheet.create({
    Titulo: {
        fontFamily: "Roboto-Regular",
        fontSize: 34,
        color: "#A7EAF4",
        lineHeight: 34,
        letterSpacing: 0.4,
    },
});

export const ButtonLogin = styled.TouchableOpacity`
    height: 60px;
    border: 2px;
    border-color: #268596;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`;

export const ButtonLoginMensagem = StyleSheet.create({
    Titulo: {
        fontFamily: "Roboto-Regular",
        fontSize: 34,
        color: "#268596",
        lineHeight: 34,
        letterSpacing: 0.4,
    },
});