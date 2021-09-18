import React from 'react';
import { Text, } from 'react-native';
import { 
    Container,
    Estilo
} from './styles';

export default () => {

    return (
        <Container>
            <Text style={Estilo.Texto}>Seja bem vindo!</Text>
        </Container>
    );
}