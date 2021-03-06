import React, { useEffect, useState } from 'react';
import { Text, Alert } from 'react-native';
import { 
    Container,
    ListaNome,
    AreaDeEntrada,
    BoxScroll,
    AreaText,
    Texto,
    Carregando
} from './styles';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Services/Api';
import CaixaSearch from '../../ComponentsExtras/CaixaSearch';
import CaixaServicos from '../../ComponentsExtras/CaixaServicos';
import Agendar from '../../Telas/Agendar';

export default ({route}) => {

    const navigation = useNavigation();
    const [allServices, allServicesState] = useState([]);
    const [buscarServicoState, setBuscarServicoState] = useState("");
    const [servicoInput, setTipoServicoInput] = useState("");
    const [loading, setLoading] = useState(false);

    const getServicos = async () => {
        setLoading(true);
        let nome = route.params?.servico;
        let servicos = await Api.getServicos(nome);
        if ( nome == 'Cabelereiro') {
            if (servicos.response) {
                setTipoServicoInput("cabelos");
                allServicesState(servicos.data);
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
        } else if (nome == 'Barbeiro') {
            if (servicos.response) {
                setTipoServicoInput("barbas");
                allServicesState(servicos.data);
            } else {
                Alert.alert(
                    "Não foi possível carregar os serviços", 
                    "Algo deu errado",
                    [
                        {text: 'VOLTAR', onPress: () => {navigation.navigate('HomeStack')}},
                     ]
                 );  
            }
        } else {
            console.error("Erro: "+servicos.error);
        }
        setLoading(false);
    }

    useEffect(() => {
        getServicos();
    }, []);

    return (
        <Container>
            <ListaNome>
                <Text style={Texto.NomeEmpresa}>AS INGRID'S SALÃO</Text>
            </ListaNome>
            <AreaDeEntrada>
                <CaixaSearch 
                    source={require('../../assets/icons/search.png')} 
                    placeholder="Buscar serviço"
                    valor={buscarServicoState}
                    opcao={route.params?.servico}
                    editarTexto={texto => setBuscarServicoState(texto)}
                />
            </AreaDeEntrada>
            <AreaText>
                <Text style={Texto.Title}>Cortes de {servicoInput}</Text>
            </AreaText>
            {loading && 
                <Carregando size="large" color="#268596" />
            }
            <BoxScroll>
                {allServices.map((item, k) => (
                    <CaixaServicos nome={route.params?.servico} key={k} data={item} />
                ))}
            </BoxScroll>
        </Container>
    )
}