import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #7ECAD7;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Estilo = StyleSheet.create({
    Texto: {
        fontFamily: "Roboto-Bold",
        fontSize: 33,
        color: "#268596",
    },
});