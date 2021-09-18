import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { 
    Container,
    ListaNome,
    Welcome,
    Servico,
    TabContainer,
    Texto,
    TabFavorites,
    TabArrow,
    Seta,
    BoxFavorites,
} from './styles';
import arrowLeft from '../../assets/icons/seta-esquerda.png';
import arrowRight from '../../assets/icons/seta-direita.png';
import CardServicos from '../../ComponentsExtras/CardServicos';

const Apagar = StyleSheet.create({
    Teste: {
        fontFamily: "Roboto-Italic",
        fontSize: 24,
    },
});

export default () => {

    return (
        <Container>
            <ListaNome>
                <Text style={Texto.NomeEmpresa}>AS INGRID'S SALÃO</Text>
            </ListaNome>
            <Welcome>
                <Text style={Texto.Saudacao}>Seja bem Vindo</Text>
            </Welcome>
            <Servico>
                <Text style={Texto.Title}>Serviços disponíveis</Text>
            </Servico>
            <TabContainer>
                <CardServicos 
                    imagem={require('../../assets/icons/tesoura-pente.png')}
                    nomeServico="Cabelereiro"
                />
                <CardServicos 
                    imagem={require('../../assets/icons/barba.png')}
                    nomeServico="Barbeiro"
                />
            </TabContainer>
            <TabFavorites>
                <TabArrow>
                    <Seta source={arrowLeft}/>
                </TabArrow>
                <BoxFavorites>
                    <Text style={Apagar.Teste}>Lista de favoritos</Text>
                </BoxFavorites>
                <TabArrow>
                    <Seta source={arrowRight}/>
                </TabArrow>
            </TabFavorites>
        </Container>
    );
}