import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #7ECAD7;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const EstiloTermos = StyleSheet.create({
    CaixaDoTitulo: {
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    Titulo: {
        fontFamily: "Roboto-Bold",
        fontSize: 18,
        textAlign: "center",
        color: "#268596",
        lineHeight: 30,
        letterSpacing: 0.4,
        alignItems: "center",
        marginTop: 5,
        marginBottom: 15,
    },
    Subtitulo: {
        fontFamily: "Roboto-Bold",
        fontSize: 18,
        textAlign: "left",
        color: "#268596",
        marginBottom: 3,
    },
    Texto: {
        fontFamily: "Roboto-Regular",
        fontSize: 18,
        textAlign: "left",
        color: "#268596",
        marginBottom: 20,
    },
});