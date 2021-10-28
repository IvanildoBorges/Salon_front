import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #7ECAD7;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Carregando = styled.ActivityIndicator`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const Info = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

export const BoxAvatar = styled.View`
    background-color: #268596;
    border-radius: 60px;
    width: 120px;
    height: 120px;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

export const BoxUser = styled.View`
    background-color: #A7EAF4;
    border-radius: 30px;
    width: 316px;
    height: 250px;
    justify-content: center;
    padding: 0% 5%;
`;

export const AreaTexto = styled.View`
    align-items: baseline;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const BotaoSair = styled.TouchableOpacity`
    background-color: #268596;
    width: 140px;
    border-radius: 30px;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const Estilo = StyleSheet.create({
    Abreviacao: {
        fontFamily: "Roboto-Light",
        fontSize: 60,
        color: "#A7EAF4",
        letterSpacing: 0.4,
        alignItems: "center",
        justifyContent: "center"
    },
    Title: {
        color: "#A7EAF4",
        fontFamily: "Roboto-Regular",
        fontSize: 24,
        lineHeight: 24,
        letterSpacing: 0.4,
        alignItems: "center",
        justifyContent: "center"
    },
    TextUser: {
        color: "#268596",
        fontFamily: "Roboto-Bold",
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0.4,
        marginBottom: 5,
        alignItems: "baseline",
        justifyContent: "center"
    },
    TextUserMenor: {
        color: "#268596",
        fontFamily: "Roboto-Regular",
        fontSize: 18,
        lineHeight: 20,
        letterSpacing: 0.4,
        marginRight: 25,
        alignItems: "center",
        justifyContent: "center"
    }
});