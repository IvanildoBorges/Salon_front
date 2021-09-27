import React, { useState, useContext, } from 'react';
import { Text, Image, Alert, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../Contexts/UserContext';
import { 
    Container, 
    CaixaLogo,
    AreaDeEntrada,
    CaixaPrivilegio,
    CheckBoxTeste,
    BotaoCustomizado,
    TituloDoBotao,
    AreaDeCadastro,
    TextoCadastroBold
} from './styles';
import Api from '../../Services/Api';
import CaixaInput from '../../ComponentsExtras/CaixaInput';
import { ConfigLogo } from '../../ComponentsExtras/LogoEstilo';
import CheckBox from '@react-native-community/checkbox';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [nomeState, setNomeState] = useState("");
    const [enderecoState, setEnderecoState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [senhaState, setSenhaState] = useState("");
    const [senhaConfirmacaoState, setSenhasenhaConfirmacaoStateState] = useState("");
    const [avatarState, setAvatarState] = useState(null);
    const [privilegioState, setPrivilegioState] = useState(false);

    function Login(){
        navigation.reset({
            routes: [{name: 'Login'}]
        });
    }
    
    const irParaLogin = async () => {
        if (nomeState !='' && enderecoState !='' && emailState != '' && senhaState != '' && senhaConfirmacaoState != '') {
            if (senhaState == senhaConfirmacaoState) {
                let resposta = await Api.cadastroConta(privilegioState, nomeState, enderecoState, emailState, senhaState, avatarState);
                //console.log(resposta);
                if (resposta.response) {
                    await AsyncStorage.setItem('token', JSON.stringify(resposta.token));
                    userDispatch({
                        type:'setAvatar',
                        payload: {
                            avatar: resposta.data.avatar
                        }
                    });
                   Alert.alert(
                       "CADASTRO BEM-SUCEDIDO!", 
                       "Ir para login",
                       [
                           {text: 'OK', onPress: () => Login()},
                           //{text: 'Cancelar', onPress: () => Inicio()}
                        ]
                    );             
                } else {
                    Alert.alert("Informações incorretas","Email e/ou senha inválidos!");
                }
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

                {/* <CaixaPrivilegio>
                    <CheckBox
                        style={CheckBoxTeste.Estilo}
                        disabled={false}
                        value={privilegioState}
                        onValueChange={(valor) => setPrivilegioState(valor)}
                        tintColors={{ true: '#268596', false: '#268596' }}
                    />
                    <Text style={CheckBoxTeste.Texto}>É funcionário?</Text>
                </CaixaPrivilegio> */}

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