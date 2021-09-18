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
`;