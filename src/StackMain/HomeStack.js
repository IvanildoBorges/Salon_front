import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../ComponentsExtras/CustomTabBar';
import HomeCliente from '../Telas/HomeCliente';
import Concluidos from '../Telas/Concluidos';
import Agendados from '../Telas/Agendados';
import Favoritos from '../Telas/Favoritos';
import Perfil from '../Telas/Perfil';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeCliente} />
        <Tab.Screen name="Concluidos" component={Concluidos} />
        <Tab.Screen name="Agendados" component={Agendados} />
        <Tab.Screen name="Favoritos" component={Favoritos} />
        <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
);