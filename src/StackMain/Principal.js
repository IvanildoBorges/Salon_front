import React from 'react';
import { 
    createStackNavigator, 
    CardStyleInterpolators,
} from '@react-navigation/stack';
import Preload from '../Telas/Preload/index';
import Main from '../Telas/Main/index';
import Login from '../Telas/Login/index';
import Cadastro from '../Telas/Cadastro/index';
import TermosDeUso from '../Telas/TermosDeUso/index';
import Servicos from '../Telas/Servicos/index';
import Agendar from '../Telas/Agendar/index';
import HomeStack from '../StackMain/HomeStack';
import SearchServico from '../Telas/SearchServico';
import FuncionarioStack from '../StackMain/FuncionarioStack';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator 
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'vertical',
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="TermosDeUso" component={TermosDeUso} />
        <Stack.Screen name="Servicos" component={Servicos} />
        <Stack.Screen name="Agendar" component={Agendar} />
        <Stack.Screen name="SearchServico" component={SearchServico} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="FuncionarioStack" component={FuncionarioStack} />
    </Stack.Navigator>
);