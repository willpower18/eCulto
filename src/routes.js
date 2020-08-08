import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Participacao from './pages/Participacao';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Participacao" component={Participacao}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}