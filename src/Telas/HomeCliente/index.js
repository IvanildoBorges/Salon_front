import React, { useState, useEffect } from 'react';
import { Alert, Text, } from 'react-native';
import { 
    Container,
    ListaNome,
    Welcome,
    Servico,
    TabContainer,
    Texto,
    Seta,
    TabInfoArea,
} from './styles';
import arrowLeft from '../../assets/icons/seta-esquerda.png';
import arrowRight from '../../assets/icons/seta-direita.png';
import CardServicos from '../../ComponentsExtras/CardServicos';
import ItemAvaliacao from '../../ComponentsExtras/ItemAvaliacao';
import Api from '../../Services/Api';
import AppIntroSlider from 'react-native-app-intro-slider';

export default () => {

    const [list, setList] = useState([]);

    const getAvaliacoes = async () => {
        let res = await Api.getAvaliacoes();
        if (res.response) {
            setList(res.data);
        } else {
            Alert.alert(
                "Não foi possível carregar os comentários!", 
                "Erro: "+res.error
            );
        }
    }

    useEffect(() => {
        getAvaliacoes();
    }, []);

    function listaComentarios({ item }){
        return (
            <ItemAvaliacao data={item} />
        );
    }

    const onPressTouchLeft = () => {
        return (
            <Seta source={arrowLeft}/>
        )
    }

    const onPressTouchRigth = () => {
        return (
            <Seta source={arrowRight}/>
        )
    }

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
            <TabInfoArea>
                <AppIntroSlider
                    renderItem={listaComentarios}
                    data={list}
                    activeDotStyle={{
                        backgroundColor: '#268596',
                        width: 30,
                    }}
                    renderNextButton={onPressTouchRigth}
                    showPrevButton={true}
                    renderPrevButton={onPressTouchLeft}
                    renderDoneButton={()=> <Text></Text> }
                />
            </TabInfoArea>
        </Container>
    );
}