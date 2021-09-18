import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserContextProvider from './Contexts/UserContext'
import Principal from './StackMain/Principal';

export default () => {
    return (
        <UserContextProvider>
            <NavigationContainer>
                <Principal />
            </NavigationContainer>
        </UserContextProvider>
    );
};
