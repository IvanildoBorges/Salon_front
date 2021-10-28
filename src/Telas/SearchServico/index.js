import React, { useEffect, useState } from 'react';
import { Text, Alert, } from 'react-native';
import { 
    Container,
    ListaNome,
    BoxScroll,
    AreaText,
    Texto,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import CaixaServicos from '../../ComponentsExtras/CaixaServicos';

export default ({route}) => {

    const navigation = useNavigation();
    let [allServices, allServicesState] = useState([]);
    let [tipo, setTipo] = useState('');

    const getServicos = async () => {
        let categoria = route.params.servico;
        let servicos = route.params.dados;
        if ( categoria == 'Cabelereiro') {
            if (servicos.response) {
                setTipo(categoria);
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
        } else if (categoria == 'Barbeiro') {
            if (servicos.response) {
                setTipo(categoria);
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
    }

    useEffect(() => {
        allServicesState([]);
        getServicos();
    }, []);

    return (
        <Container>
            <ListaNome>
                <Text style={Texto.NomeEmpresa}>AS INGRID'S SALÃO</Text>
            </ListaNome>
            <AreaText>
                <Text style={Texto.Title}>Corte encontrado</Text>
            </AreaText>
            <BoxScroll>
                {allServices.map((item, k) => (
                    <CaixaServicos nome={tipo} key={k} data={item} />
                ))}
            </BoxScroll>
        </Container>
    )
}