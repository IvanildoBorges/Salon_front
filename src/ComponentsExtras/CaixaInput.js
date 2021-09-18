import React from 'react';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const CaixaInput = styled.View`
    width: 100%;
    height: 50px;
    background-color: #A7EAF4;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

const Icons = StyleSheet.create({
    imagens: {
        width: 31,
        height: 31,
        resizeMode: "contain",
    },
});

const Input = styled.TextInput`
    flex: 0.95;
    font-family: Roboto-Bold;
    font-size: 16px;
    color: #268596;
    margin-left: 15px;
`;

export default ({source, placeholder, valor, editarTexto, esconderSenha}) => {
    return (
        <CaixaInput>
            <Image style={Icons.imagens} source={source} />
            <Input 
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={valor}
                onChangeText={editarTexto}
                secureTextEntry={esconderSenha}
            />
        </CaixaInput>
    );
};