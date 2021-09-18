import React from 'react';
import { Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const TabItem = styled.TouchableOpacity`
    height: 120px;
    width: 120px;
    margin: 0px 20px;
    background-color: #A7EAF4;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`;

const Icone = styled.Image`
    width: 70px;
    height: 70px;
    resize-mode: contain;
    margin: 10px 0px;
`;

const Texto = StyleSheet.create({
    TitlesImagens: {
        fontFamily: "Roboto-Bold",
        color: "#268596",
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.4,
    },
});

export default ({imagem, nomeServico}) => {
    return (
        <TabItem>
            <Icone source={imagem} />
            <Text style={Texto.TitlesImagens}>{nomeServico}</Text>
        </TabItem>
    );
}