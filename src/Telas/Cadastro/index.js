import React, { useState, useContext } from 'react';
import { Text, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../Contexts/UserContext';
import { 
    Container, 
    CaixaLogo,
    AreaDeEntrada,
    BotaoCustomizado,
    TituloDoBotao,
    AreaDeCadastro,
    TextoCadastroBold
} from './styles';
import Api from '../../Services/Api';
import CaixaInput from '../../ComponentsExtras/CaixaInput';
import { ConfigLogo } from '../../ComponentsExtras/LogoEstilo';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [nomeState, setNomeState] = useState("");
    const [enderecoState, setEnderecoState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [senhaState, setSenhaState] = useState("");
    const [senhaConfirmacaoState, setSenhasenhaConfirmacaoStateState] = useState("");

    const irParaLogin = async () => {
        if (nomeState !='' && enderecoState !='' && emailState != '' && senhaState != '') {
            if (senhaState == senhaConfirmacaoState) {
                //let resposta = await Api.cadastroConta(nomeState, enderecoState, emailState, senhaState);
                // if (resposta.token) {
                //     await AsyncStorage.setItem('token', resposta.token);
                //     userDispatch({
                //         type:'setAvatar',
                //         payload: {
                //             avatar: resposta.data.avatar
                //         }
                //     });
                //    Alert.alert("CADASTRO BEM-SUCEDIDO!", "Ir para login");
                //     navigation.reset({
                //         routes: [{name: 'Login'}]
                //     });                
                // } else {
                //     Alert.alert("Informações incorretas","Email e/ou senha inválidos!");
                // }
                navigation.reset({ 
                    routes: [{name: 'Login'}] 
                })
            } else {
                Alert.alert(title="Senhas diferentes", message="As senhas devem coincidirem");
            }
        } else {
            Alert.alert("Há campos vazios","Preencha todos os campos!");
        }
    };

    function irParaTermosUso() {
        navigation.navigate("TermosDeUso");
    };

    return (
        <Container>
            <CaixaLogo>
                <Image 
                    style={ConfigLogo.Logo}
                    source={require('../../assets/icons/barba2.png')} 
                />
                <Text style={ConfigLogo.Titulo}>App Salon</Text>
            </CaixaLogo>

            <AreaDeEntrada>
                <CaixaInput 
                    source={require('../../assets/icons/pessoa2.png')} 
                    placeholder="Nome"
                    valor={nomeState}
                    editarTexto={texto => setNomeState(texto)}
                />
                <CaixaInput 
                    source={require('../../assets/icons/endereco.png')} 
                    placeholder="Endereço"
                    valor={enderecoState}
                    editarTexto={texto => setEnderecoState(texto)}
                />
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
                <CaixaInput
                    source={require('../../assets/icons/cadeado.png')} 
                    placeholder="Digite novamente sua senha"
                    valor={senhaConfirmacaoState}
                    editarTexto={texto => setSenhasenhaConfirmacaoStateState(texto)}
                    esconderSenha={true}
                />

                <BotaoCustomizado onPress={irParaLogin}>
                    <Text style={TituloDoBotao.Titulo} >CADASTRAR</Text>
                </BotaoCustomizado>
            </AreaDeEntrada>

            <AreaDeCadastro onPress={irParaTermosUso}>
                <Text style={TextoCadastroBold.Titulo} >Termos de uso e Privacidade</Text>
            </AreaDeCadastro>
            
        </Container>
    )
}