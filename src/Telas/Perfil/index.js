import React from 'react';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    Container,
    Estilo
} from './styles';

export default () => {
    const navigation = useNavigation();

    const sairDaConta = async () => {
        await AsyncStorage.removeItem('token');
        navigation.reset({
            routes: [{name: 'Main'}]
        });
    }

    return (
        <Container>
            <Text style={Estilo.Texto}>Perfil</Text>
            <Button  title="Sair" onPress={sairDaConta}></Button>
        </Container>
    );
}