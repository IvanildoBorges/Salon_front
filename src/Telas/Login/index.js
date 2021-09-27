import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../Contexts/UserContext';
import { 
    Container, 
    BoxImagem,
    AreaDeEntrada,
    BotaoCustomizado,
    TituloDoBotao,
    AreaDeCadastro,
    TextoCadastro,
    TextoCadastroBold,
} from './styles';
import Api from '../../Services/Api';
import CaixaInput from '../../ComponentsExtras/CaixaInput';
import { ConfigLogo } from '../../ComponentsExtras/LogoEstilo';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [emailState, setEmailState] = useState("");
    const [senhaState, setSenhaState] = useState("");

    const irParaHome = async () => {
        if (emailState != '' && senhaState != '') {
            const json = await Api.loginConta(emailState, senhaState);
            if (json.response) {
                //const jsonString = JSON.stringify(json);
                const token = JSON.stringify(json.token);
                await AsyncStorage.setItem('token', token);
                userDispatch({
                    type:'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });
                console.log(json.data.privilegio);
                if (json.data.privilegio == 1) {
                    navigation.reset({
                        routes: [{name: 'FuncionarioStack'}]
                    });
                } else {
                    navigation.reset({
                        routes: [{name: 'HomeStack'}]
                    });
                }                
             } else {
                Alert.alert("Erro de Autenticação","Tente novamente");
             }
        } else {
            Alert.alert("Há campos vazios","Preencha todos os campos!");
        }
    };

    const irParaCadastro = () => {
        navigation.navigate("Cadastro")
    };

    return (
        <Container>
            <View style={BoxImagem.Box}>
                <Image 
                    style={ConfigLogo.Logo}
                    source={require('../../assets/icons/barba2.png')} 
                />
                <Text style={ConfigLogo.Titulo}>App Salon</Text>
            </View>
            <AreaDeEntrada>
                <CaixaInput 
                    source={require('../../assets/icons/email.png')} 
                    placeholder="Digite seu email"
                    valor={emailState}
                    editarTexto={texto => setEmailState(texto)}
                />

                <CaixaInput
                    source={require('../../assets/icons/cadeado.png')} 
                    placeholder="Digite sua senha"
                    valor={senhaState}
                    editarTexto={texto => setSenhaState(texto)}
                    esconderSenha={true}
                />

                <BotaoCustomizado onPress={irParaHome}>
                    <Text style={TituloDoBotao.Titulo} >LOGIN</Text>
                </BotaoCustomizado>
            </AreaDeEntrada>

            <AreaDeCadastro onPress={irParaCadastro} >
                <Text style={TextoCadastro.Titulo} >Não possui conta?</Text>
                <Text style={TextoCadastroBold.Titulo} >Cadastre-se aqui</Text>
            </AreaDeCadastro>
        </Container>
    )
}