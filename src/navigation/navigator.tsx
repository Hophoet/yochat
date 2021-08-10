import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './main.navigator'

const Navigator = (): React.ReactElement => (
    <NavigationContainer>
        <MainNavigator/>
    </NavigationContainer>
);

export default Navigator;

