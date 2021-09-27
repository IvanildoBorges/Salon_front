import React, { useContext } from "react"; 
import { Text, } from 'react-native';
import styled from 'styled-components/native';
import { UserContext } from '../Contexts/UserContext'; 
const HomeIcon = require('../assets/icons/homeTab.png');
const AgendadosIcon = require('../assets/icons/calendario.png');
const ConcluidosIcon = require('../assets/icons/arquivosTab.png');
const FavoritosIcon = require('../assets/icons/favoritoTab.png');
const PerfilIcon = require('../assets/icons/perfilTab.png');

const TabArea = styled.SafeAreaView`
    height: 60px;
    flex-direction: row;
    background-color: #268596;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCircle = styled.TouchableOpacity`
    height: 70px;
    width: 70px;
    justify-content: center;
    align-items: center;
    border: 3px solid #268596;
    border-radius: 35px;
    background-color: #A7EAF4;
    margin-top: -30px;
`;

const Icone = styled.Image`
    height: 30px;
    width: 30px;
    resize-mode: contain;
`;

const Avatar = styled.Image`
    height: 30px;
    width: 30px;
    border-radius: 15px;
`;

export default ({ state, navigation }) => {

    const { state: user } = useContext(UserContext);

    function irPara(nomeDaTela){
        navigation.navigate(nomeDaTela);
    }

    return (
        <TabArea>
            <TabItem onPress={() => irPara('Home')}>
                <Icone 
                    style={{opacity: state.index===0?1 : 0.4}} 
                    source={HomeIcon} 
                />
            </TabItem>

            <TabItem onPress={() => irPara('Concluidos')}>
                <Icone 
                    style={{opacity: state.index===1?1 : 0.4}} 
                    source={ConcluidosIcon} 
                />
            </TabItem>

            <TabItemCircle onPress={() => irPara('Agendados')}>
                <Icone source={AgendadosIcon} />
            </TabItemCircle>

            <TabItem onPress={() => irPara('Favoritos')}>
                <Icone 
                    style={{opacity: state.index===3?1 : 0.4}} 
                    source={FavoritosIcon} 
                />
            </TabItem>

            <TabItem onPress={() => irPara('Perfil')}>
                {   //if-else estilizado
                    user.avatar != null ? 
                        <Avatar source={{uri: user.avatar}} />
                        :
                        <Icone 
                            style={{opacity: state.index===4?1 : 0.4}} 
                            source={PerfilIcon} 
                        />
                }
            </TabItem>
        </TabArea>
        
    );
}