import React, { useContext, useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../Contexts/UserContext'; 
import { 
    Container,
    Carregando,
    Info,
    BoxAvatar,
    BoxUser,
    AreaTexto,
    BotaoSair,
    Estilo,
} from './styles';
import Api from '../../Services/Api';

export default () => {
    const navigation = useNavigation();
    const { state: user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [abrev, setAbrev] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");

    const getInfoUser = async () => {
        setLoading(true);
        const resp = await Api.getUserById(user.id);
        if (resp.response) {
            const string = String.toString(resp.data.nome);
            const nome = setAbreviacao(string);
            setAbrev(nome);
            setNome(resp.data.nome);
            setEmail(resp.data.email);
            setEndereco(resp.data.endereco);
        } else {
            Alert.alert(
                "Não foi possível carregar o perfil", 
                "Algo deu errado!",
                [
                    {text: 'OK'}
                 ]
             );
        }
        setLoading(false);
    }

    const setAbreviacao = (string) => {
        const nomeString = string.substr(0, 2);
        return nomeString.toUpperCase();
    }

    const sairDaConta = () => {
        Alert.alert(
            "Deseja mesmo sair da conta?", 
            `Ao clicar em SIM, você terá que fazer 
novamente o login para acessar sua conta`,
            [
                {text: 'SIM', onPress: async () => {
                    await AsyncStorage.removeItem('token');
                    navigation.reset({
                        routes: [{name: 'Main'}]
                    });
                }},
                {text: 'NÃO'}
             ]
         );
    }

    useEffect(() => {
        getInfoUser();
    }, []);

    return (
        <Container>
            {
            loading
            ?
                <Carregando size="large" color="#268596" />
            :
                <Info>
                    <BoxAvatar>
                        <Text style={Estilo.Abreviacao} >{abrev}</Text>
                    </BoxAvatar>
                    <BoxUser>
                        <AreaTexto>
                            <Text style={Estilo.TextUser} >Nome: </Text>
                            <Text style={Estilo.TextUserMenor} >{nome}</Text>
                        </AreaTexto>
                        <AreaTexto>
                            <Text style={Estilo.TextUser} >Email: </Text>
                            <Text style={Estilo.TextUserMenor} >{email}</Text>
                        </AreaTexto>
                        <AreaTexto>
                            <Text style={Estilo.TextUser} >Endereço: </Text>
                            <Text style={Estilo.TextUserMenor} >{endereco}</Text>
                        </AreaTexto>
                    </BoxUser>
                </Info>
            }
            <BotaoSair  onPress={sairDaConta}>
                <Text style={Estilo.Title} >SAIR</Text>
            </BotaoSair>
        </Container>
    );
}