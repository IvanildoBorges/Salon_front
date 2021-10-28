import React from "react";
import { StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';

const Area = styled.View`
    margin: 30px 0px;
    align-items: center;
    justify-content: center;
`;

const TextArea = styled.View`
    width: 310px;
    height: 95px;
    padding: 6px;
    border-radius: 30px;
    background-color: #fff;
    align-items: center;
`;

const InfoArea = styled.View`
    justify-content: space-between;
`;

const Estilo = StyleSheet.create({
    Titulo: {
        fontSize: 20,
        fontFamily: "Roboto-Bold",
        marginTop: -10,
        marginBottom: 10,
    },
    Subtitulo: {
        fontSize: 12,
        fontFamily: "Roboto-LightItalic",
    },
});

export default ({ data }) => {

    return(
        <Area>
            <TextArea>
                <Text style={Estilo.Titulo}>{data.cliente}</Text>
                <InfoArea>
                    <Text style={Estilo.Subtitulo}>{data.comentario}</Text>
                </InfoArea>
            </TextArea>
        </Area>
    );
}