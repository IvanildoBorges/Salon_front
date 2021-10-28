import React, { useEffect, useContext } from 'react';
import { Text, Image } from 'react-native';
import { Container, Carregando, } from './styles';
import { ConfigLogo, } from '../../ComponentsExtras/LogoEstilo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../Services/Api';
import { UserContext } from '../../Contexts/UserContext';
import { useNavigation } from '@react-navigation/native';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() => {
        try {
            const getToken = async() => {
                const tokenString = await AsyncStorage.getItem('token');
                const token = JSON.parse(tokenString);
                if (token) {
                    let res = await Api.getToken(token);
                    if (res.token) {
                        await AsyncStorage.setItem('token', JSON.stringify(res.token));
                        userDispatch({
                            type:'setAvatar',
                            payload: {
                                avatar: res.data.avatar,
                            }
                        });
                        if (res.data.privilegio) {
                            navigation.reset({
                                routes: [{name: 'FuncionarioStack'}]
                            });
                        } else {
                            navigation.reset({
                                routes: [{name: 'HomeStack'}]
                            });
                        }
                    } else {
                        navigation.navigate("Login");
                    }
                } else {
                    navigation.reset({
                        routes: [{name: "Main"}]
                    });
                }
            }
            getToken();
        } catch (error) {
            console.error("Erro encontrado: " + error);
        }
    },[]);

    return (
        <Container>
            <Image 
                style={ConfigLogo.Logo}
                source={require('../../assets/icons/barba2.png')}
            />
            <Text style={ConfigLogo.Titulo}>App Salon</Text>
            <Carregando size="large" color="#268596" />
        </Container>
    )
}