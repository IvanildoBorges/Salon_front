import React, { useEffect, useState } from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { 
    Container,
    Carregando, 
    Estilo, 
    Caixa,
    ButtonCadastro,
    ButtonCadastroMensagem,
    ButtonLogin,
    ButtonLoginMensagem,
} from './styles';
import { EstiloLogo } from '../../ComponentsExtras/LogoEstiloMenor';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Services/Api';

export default () => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    // const sairDoApp = () => {
    //     Alert.alert("Deseja mesmo sair do app?", [
    //         {
    //             text: "Não",
    //             onPress: () => null,
    //             style: "cancel",
    //         },
    //         {
    //             text: "Sim",
    //             onPress: () => BackHandler.exitApp(),
    //         }
    //     ]);
    //     return true;
    // };

    // useEffect(() => {
    //     BackHandler.addEventListener(
    //         "hardwareBackPress",
    //         sairDoApp
    //     );
      
    //     return () => BackHandler.removeEventListener(
    //         "hardwareBackPress",
    //         sairDoApp
    //     );
    // }, []);

    const showMain = async () => {
        setLoading(true);
        const msg = await Api.saudacao();
        if (msg.response) {
            console.log(msg.data);
        }
        setLoading(false);
    }

    useEffect(() => {
        showMain();
    }, []);

    const clickNoBotaoCadastro = () => {
        navigation.navigate("Cadastro");
    };

    const clickNoBotaoLogin = () => {
        navigation.navigate("Login");
    };

    return (
        <Container>
            {loading &&
                <Carregando size="large" color="#268596" />
            }
            <Image 
                style={EstiloLogo.Logo}
                source={require('../../assets/icons/barba2.png')} 
            />
            <Text style={EstiloLogo.Slogan}>App Salon</Text>
            <Text style={Estilo.Titulo}>A PLATAFORMA PARA AGENDAMENTOS DE SERVIÇOS CABELEREIRO E BARBEARIA</Text>
            <View style={Estilo.Items}>
                <View style={Estilo.Topic} >
                    <Image
                        style={Estilo.Imagens}
                        source={require('../../assets/icons/tesoura.png')} 
                    />
                    <Text>Cabelereiro</Text>
                </View>
                <View style={Estilo.Topic} >
                    <Image 
                        style={Estilo.Imagens}
                        source={require('../../assets/icons/narvalha.png')}
                    />
                    <Text>Barbearia</Text>
                </View>
            </View>
            <Text style={Estilo.Subtitulo}>CONFIRA NOSSOS SERVIÇOS</Text>
            <Caixa>
                <ButtonCadastro onPress={clickNoBotaoCadastro}>
                    <Text style={ButtonCadastroMensagem.Titulo}>CADASTRE-SE</Text>
                </ButtonCadastro>
                <ButtonLogin onPress={clickNoBotaoLogin}>
                    <Text style={ButtonLoginMensagem.Titulo}>ENTRAR</Text>
                </ButtonLogin>
            </Caixa>
        </Container>
    )
}