import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #7ECAD7;
    flex: 1;
`;

export const ListaNome = styled.View`
    margin-top: 15px;
    margin-bottom: 10px;
    align-items: center;
`;

export const Welcome = styled.View`
    margin-bottom: 110px;
    align-items: center;
`;

export const Servico = styled.View`
    margin: 0px 0px 15px 65px;
    align-items: baseline;
`;

export const TabContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Texto = StyleSheet.create({
    Title: {
        fontFamily: "Roboto-Bold",
        fontSize: 24,
        color: "#268596",
        lineHeight: 24,
        letterSpacing: 0.4,
    },
    Saudacao: {
        fontFamily: "Roboto-Bold",
        fontSize: 48,
        color: "#268596",
        lineHeight: 58,
        letterSpacing: 0.4,
    },
    NomeEmpresa: {
        fontFamily: "Roboto-Regular",
        color: "#fff",
        fontSize: 34,
        lineHeight: 50,
        letterSpacing: 0.4,
    },
});

export const TabFavorites = styled.View`
    align-items: center;
    justify-content: center;   
    flex-direction: row;
    margin: 50px 0px 20px 0px;
`;

export const TabArrow = styled.TouchableOpacity`
    height: 95px;
    width: 27px;
    margin: 0px 5px;
    align-items: center;
    justify-content: center;
`;

export const Seta = styled.Image`
    width: 30px;
    height: 30px;
    resize-mode: contain;
`;

export const BoxFavorites = styled.View`
    width: 310px;
    height: 95px;
    background-color: #fff;
    border-radius: 30px;
    align-items: center;
`;