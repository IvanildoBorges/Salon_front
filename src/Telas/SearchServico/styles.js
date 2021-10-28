import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #7ECAD7;
    flex: 1;
    justify-content: center;
`;

export const ListaNome = styled.View`
    flex: 0.2;
    justify-content: center;
    align-items: center;
`;

export const Texto = StyleSheet.create({
    Title: {
        fontFamily: "Roboto-Bold",
        fontSize: 24,
        color: "#268596",
        lineHeight: 24,
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

export const AreaText = styled.View`
    flex: 0.1;
    padding: 0% 10%;
    align-items: baseline;
    justify-content: center;
    margin-bottom: 10px;
`;

export const BoxScroll = styled.ScrollView`
    flex: 1;
    padding: 0% 12%;
`;