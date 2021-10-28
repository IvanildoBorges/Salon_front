import React, { useState, useEffect } from 'react';
import { Image, Alert, Text } from 'react-native';
import {
    Container,
    Carregando,
    BoxImagem,
    Icone,
    Texto,
    BoxFuncionario,
    BoxServico,
    BoxRowLeft,
    BoxRowRight,
    BoxAgendaServicos,
    InfoData,
    VoltarData,
    TextoData,
    AvancarData,
    Imagem,
    InfoSemana,
    DataItem,
    BoxHorarios,
    BotaoCustomizado
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import Api from '../../Services/Api';

export default ({route}) => {  
    const navigation = useNavigation();

    const [valor, setValor] = useState(route.params.array.valor.toFixed(2));
    const [arrayServico, setArrayServico] = useState({
        id: route.params?.array.id,
        nome: route.params?.array.nome,
        descricao: route.params?.array.descricao,
        preco: valor,
        profissional: route.params?.array.profissional,
        especializacao: route.params?.array.especializacao
    });
    const [loading, setLoading] = useState(false);
    const meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];
    const diasDaSemana = [
        'Dom',
        'Seg',
        'Ter',
        'Qua',
        'Qui',
        'Sex',
        'Sab'
    ];
    const [anoState, setAnoState] = useState(0);
    const [mesState, setMesState] = useState(0);
    const [diaState, setDiaState] = useState(0);
    const [horaState, setHoraState] = useState(null);
    const [listDias, setListDiasState] = useState([]);
    const [listHoras, setListHorasState] = useState([]);
    const [agendaState, setAgendaState] = useState([]);

    const getServicoPorId = async () => {
        setLoading(true);
        let json = await Api.getServicoById(arrayServico.id);
        if (json.response) {
            setLoading(false);
        } else {
            Alert.alert(
                "Não foi possível agendar o serviço!", 
                "Algo deu errado",
                [
                    {text: 'VOLTAR', onPress: () => {
                        navigation.goBack();
                    }},
                 ]
             );
        }
    }

    const voltarTela = async () => {
        const nome = route.params?.servico;
        let servicos = await Api.getServicos(nome);
        if (servicos.response) {
            navigation.navigate('Servicos', {
                servico: nome,
                data: servicos
            })
        } else {
            Alert.alert(
                "Não foi possível carregar os serviços", 
                "Algo deu errado",
                [
                    {text: 'VOLTAR', onPress: () => {navigation.navigate('HomeStack')}},
                    {text: 'TENTAR NOVAMENTE', onPress: () => {getServicos()}}
                    ]
                );
        }
    }

    function diminuirData(){
        let dataAux = new Date(anoState, mesState, 1);
        dataAux.setMonth(dataAux.getMonth() - 1);
        setAnoState(dataAux.getFullYear());
        setMesState(dataAux.getMonth());
        setDiaState(1);
    }

    function aumentarData(){
        let dataAux = new Date(anoState, mesState, 1);
        dataAux.setMonth(dataAux.getMonth() + 1);
        setAnoState(dataAux.getFullYear());
        setMesState(dataAux.getMonth());
        setDiaState(1);
    }

    const checkDisponibilidade = async () => {
        let result = await Api.getAgenda();
        setAgendaState([result]);
    }

    useEffect(() => {
        checkDisponibilidade
        let qtdDiasNoMes = new Date(anoState, mesState+1, 0).getDate();
        let listDiasAux = [];
        for(let i=1; i<=qtdDiasNoMes; i++){
            let dataAux = new Date(anoState, mesState, i);
            let year = dataAux.getFullYear();
            let month = dataAux.getMonth()+1;
            let day = dataAux.getDate();
            month = month < 10 ? '0'+month : month;
            day = day < 10 ? '0'+day : day;
            let daySelect = `${year}-${month}-${day}`;
            
            if(agendaState.data[i].data === daySelect){
                listDiasAux.push({
                    status: agendaState.data[i].temVaga,
                    diaDaSemana: diasDaSemana[dataAux.getDay()],
                    diaDoMes: i
                });
            }
            
       }
       setListDiasState(listDiasAux);
       setDiaState(1);
       setListHorasState([]);
       setHoraState(0);

    }, [anoState, mesState]);

    useEffect(() => {
        let hoje = new Date();
        setAnoState(hoje.getFullYear());
        setMesState(hoje.getMonth());
        setDiaState(hoje.getDate());
        getServicoPorId();
    }, []);

    return (
        <Container>
            {loading && 
                <Carregando size="large" color="#268596" />
            }
            <BoxImagem onPress={voltarTela}>
                <Icone source={require('../../assets/icons/xis.png')}/>
            </BoxImagem>
            <BoxFuncionario>
                <Text style={Texto.TituloBold}>PROFISSIONAL</Text>
                <Text style={Texto.TituloRegular}>{arrayServico.profissional}</Text>
            </BoxFuncionario>
            <BoxServico>
                <BoxRowLeft>   
                    <Text style={Texto.TituloBoldEsquerda}>{arrayServico.nome}</Text>
                </BoxRowLeft>
                <BoxRowRight>
                    <Text style={Texto.TituloBoldDireita}>R$: {valor}</Text>
                </BoxRowRight>
            </BoxServico>
            <BoxAgendaServicos>
                <InfoData>
                    <VoltarData onPress={diminuirData}>
                        <Image style={Imagem.Dimensoes} source={require('../../assets/icons/seta-esquerda.png')} />
                    </VoltarData>
                    <TextoData>
                        <Text style={Texto.TituloMesSemana} >{meses[mesState]} {anoState}</Text>
                    </TextoData>
                    <AvancarData onPress={aumentarData}>
                        <Image style={Imagem.Dimensoes} source={require('../../assets/icons/seta-direita.png')} />
                    </AvancarData>
                </InfoData>
                <InfoSemana 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                >
                    {listDias.map((item, key) => (
                        <DataItem 
                            key={key}
                            onPress={() => {}}
                        >
                            <Text style={Texto.DiaWeekday} >{item.diaDaSemana}</Text>
                            <Text style={Texto.DiaMonth} >{item.diaDoMes}</Text>
                        </DataItem>
                    ))}
                </InfoSemana>
            </BoxAgendaServicos>
            <BoxHorarios>

            </BoxHorarios>
            <BotaoCustomizado onPress={() => {}}>
                <Text style={Texto.TitleButton} >CONFIRMAR</Text>
            </BotaoCustomizado>
        </Container>
    );
}